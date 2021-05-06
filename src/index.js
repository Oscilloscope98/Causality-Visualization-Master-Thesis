import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import BodyTemplate from './bodyComponents/BodyTemplate';
import CausalGraph from './causalGraph/CausalGraph';
import SpinalNerves from './bodyComponents/SpinalNerves';

const data = require('./data/data.json');
const symsData = require('./data/symsToCause.json');
const causeData = require('./data/causeToSyms.json');

//reconstruct json file for causal graph according to the selected symptoms on body template
function dataReformat(symsData, selectedSyms, causeData, selectedCauses) {
    var newData = {};
    newData["nodes"] = [];
    newData["links"] = [];
    selectedSyms.forEach(s => {
        newData.nodes.push({ "id": s, "group": 1, "potential": false });
        symsData[s].forEach(r => {
            newData.links.push({ "source": s, "target": r.pattern, "value": 1, "potential": false });
            if (!newData.nodes.some(node => node.id === r.pattern)) {
                newData.nodes.push({ "id": r.pattern, "group": 2, "potential": false });
                newData.links.push({ "source": r.pattern, "target": r.cause, "value": 1, "potential": false });
            }
            if (!newData.nodes.some(node => node.id === r.cause)) {
                newData.nodes.push({ "id": r.cause, "group": 3, "potential": false });
            }
        });
    });
    selectedCauses.forEach(c => {
        causeData[c].forEach(r => {
            if (!newData.nodes.some(node => node.id === r.pattern)) {
                newData.nodes.push({ "id": r.pattern, "group": 2, "potential": true });
                newData.links.push({ "source": r.pattern, "target": c, "value": 1, "potential": true });
            }
            r.symptoms.forEach(s =>{
                if (!newData.nodes.some(node => node.id === s)) {
                    newData.nodes.push({ "id": s, "group": 1, "potential": true });
                    newData.links.push({ "source": s, "target": r.pattern, "value": 1, "potential": true });
                }
            });
        });
    });
    return newData;
}

//get potential symptoms from cause, with the name same as the one in causal graph
function getPotentialSyms(causeData, selectedCauses) {
    var potentialSyms = [];
    selectedCauses.forEach(c => {
        causeData[c].forEach(r => {
            potentialSyms = potentialSyms.concat(r.symptoms.filter((item) => potentialSyms.indexOf(item) < 0));
        });
    });
    return potentialSyms;
}

//get patterns from symptoms, with the name same as the one in causal graph (i.e. with L & R)
function getPatterns(symsData, selectedSyms) {
    var patterns = [];
    selectedSyms.forEach(s => {
        symsData[s].forEach(r => {
            if (patterns.indexOf(r.pattern) < 0) patterns.push(r.pattern);
        });
    });
    return patterns;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symptoms: [], //selected symptoms on body template (with FB, Or, 2)
            causes: [], //selected causes on causal graph
            //potentialSyms: [] //potential symptoms according to selected cause
        };
    }

    //delect symptoms on body template
    deleteSym(symName) {
        let tempSyms = this.state.symptoms;
        const index = tempSyms.indexOf(symName);
        if (index > -1) {
            tempSyms.splice(index, 1);
        }
        this.setState({ symptoms: tempSyms });
    }

    //select symptoms on body template
    selectSym(symName) {
        let tempSyms = this.state.symptoms;
        if (!tempSyms.includes(symName)) {
            tempSyms.push(symName);
            this.setState({ symptoms: tempSyms });
        }
        else {
            //double click to disable a symptom
            this.deleteSym(symName);
        }
        //console.log(this.state.symptoms);
    }

    //delect causes on causal graph
    deleteCause(causeName) {
        let tempCauses = this.state.causes;
        const index = tempCauses.indexOf(causeName);
        if (index > -1) {
            tempCauses.splice(index, 1);
        }
        this.setState({ causes: tempCauses });
    }

    //select cause on causal graph
    selectCause(causeName) {
        let tempCauses = this.state.causes;
        if (!tempCauses.includes(causeName)) {
            tempCauses.push(causeName);
            this.setState({ causes: tempCauses });
        }
        else {
            //double click to deselect a cause
            this.deleteCause(causeName);
        }
        //console.log(this.state.causes)
    }

    render() {
        var symptomsUnifyFB = []; //symptom list with the name same as the one in causal graph
        var tempSyms = this.state.symptoms;
        for (var i = 0; i < tempSyms.length; i++) {
            var tempSym = tempSyms[i].replace('F ', '').replace('B ', '').replace(' 2', '');
            //deal with " Or "
            var tempSymSplits = tempSym.split(' Or ');
            tempSymSplits.forEach(s => {
                if (!symptomsUnifyFB.includes(s)) {
                    symptomsUnifyFB.push(s);
                }
            });
        }
        let symString = '';
        symptomsUnifyFB.forEach(item => symString += item + ', ');
        symString = symString.slice(0, -2);
        //console.log(symptomsUnifyFB)

        //potential symptom list with the name same as the one in causal graph
        var potentialSyms = getPotentialSyms(causeData, this.state.causes);
        let potentialSymString = '';
        potentialSyms.forEach(item => potentialSymString += item + ', ');
        potentialSymString = potentialSymString.slice(0, -2);
        //console.log(dataReformat(symsData, symptomsUnifyFB, causeData, this.state.causes));
        //console.log(getPatterns(symsData, this.state.symptoms));
        console.log(this.state.symptoms);
        return (
            <div>
                <p>Selected Symptoms: {symString}</p>
                <p>Potential Symptoms: {potentialSymString}</p>
                <div className="flex-container">
                    <div className="graph">
                        <SpinalNerves width={450}
                            patterns={getPatterns(symsData, symptomsUnifyFB)}
                            selectedCauses={this.state.causes}
                            selectCause={causeName => this.selectCause(causeName)}
                            deleteCause={causeName => this.deleteCause(causeName)}
                        />
                    </div>
                    <div className="pd">
                        <BodyTemplate width={600}
                            clickCallBack={symName => this.selectSym(symName)}
                            deleteSym={symName => this.deleteSym(symName)}
                            selectedSyms={this.state.symptoms} 
                            potentialSyms={potentialSyms}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/*
<CausalGraph data={dataReformat(symsData, symptomsUnifyFB, causeData, this.state.causes)} 
                            width={800} height={1000}
                            selectedCauses={this.state.causes}
                            selectCause={causeName => this.selectCause(causeName)}
                            selectedSyms={this.state.symptoms} />
*/