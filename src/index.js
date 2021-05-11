import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import BodyTemplate from './bodyComponents/BodyTemplate';
import CausalGraph from './causalGraph/CausalGraph';
import SpinalNerves from './bodyComponents/SpinalNerves';
import Patterns from './causalGraph/Patterns';

const data = require('./data/data.json');
const symsData = require('./data/symsToCause.json');
const causeData = require('./data/causeToSyms.json');

var patternStrInitial = {};
Array.from(Array(7).keys()).forEach(c => {
    patternStrInitial["L C" + (c+2)] =  0;
    patternStrInitial["R C" + (c+2)] =  0;
});
Array.from(Array(12).keys()).forEach(t => {
    patternStrInitial["L T" + (t+1)] = 0;
    patternStrInitial["R T" + (t+1)] = 0;
});
Array.from(Array(5).keys()).forEach(l => {
    patternStrInitial["L L" + (l+1)] = 0;
    patternStrInitial["R L" + (l+1)] = 0;
});
Array.from(Array(2).keys()).forEach(s => {
    patternStrInitial["L S" + (s+1)] = 0;
    patternStrInitial["R S" + (s+1)] = 0;
});

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
            r.symptoms.forEach(s => {
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

//change symptoms name on body template to the ones causal graoh
//Specially, for the ones with "Or", only keeps the former part for calculating the strength purpose
function simplifySymName(symName){
    var tempSym = symName.replace('F ', '').replace('B ', '').replace(' 2', '');
    if (tempSym.includes(' Or ')){
        tempSym = tempSym.split(' Or ')[0];
    }
    return tempSym;
}

//get related patterns according to input symptoms on causal graph
function getRelatedPatterns(symName, symsData){
    var patterns = [];
    symsData[symName].forEach(r => {
        patterns.push(r.pattern);
    });
    return patterns;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symptoms: [], //selected symptoms on body template (with FB, Or, 2)
            causes: [], //selected causes on causal graph
            patternStr: patternStrInitial, //strength (related nums) of each symptoms according to selected symptoms
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

        //deal with related patterns
        let tempPatternStr = this.state.patternStr;
        let tempPatterns = getRelatedPatterns(simplifySymName(symName), symsData);
        tempPatterns.forEach(p => {
            tempPatternStr[p]--;
        });
        this.setState({ patternStr: tempPatternStr});
    }

    //select symptoms on body template
    selectSym(symName) {
        let tempSyms = this.state.symptoms;
        if (!tempSyms.includes(symName)) {
            tempSyms.push(symName);
            this.setState({ symptoms: tempSyms });
            //deal with related patterns
            let tempPatternStr = this.state.patternStr;
            let tempPatterns = getRelatedPatterns(simplifySymName(symName), symsData);
                tempPatterns.forEach(p => {
                tempPatternStr[p]++;
            });
            this.setState({ patternStr: tempPatternStr});
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
        //console.log(this.state.symptoms);
        console.log(this.state.patternStr);
        return (
            <div>
                <div className="flex-container">
                    <div className="cause text-center"> Cause: Pathophysiological Diagnosis</div>
                    <div className="middle-reason text-center"> Middle Reason: Pattern Diagnosis </div>
                    <div className="effect text-center"> Effect: Symptom diagnosis </div>
                </div>
                <div className="flex-container">
                    <div className="cause">
                        <SpinalNerves width={430}
                            patterns={getPatterns(symsData, symptomsUnifyFB)}
                            selectedCauses={this.state.causes}
                            selectCause={causeName => this.selectCause(causeName)}
                            deleteCause={causeName => this.deleteCause(causeName)}
                        />
                    </div>
                    <div className="middle-reason text-center"> 
                        <Patterns patternStr={this.state.patternStr}/> 
                    </div>
                    <div className="effect">
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
<p>Selected Symptoms: {symString}</p>
<p>Potential Symptoms: {potentialSymString}</p>

<CausalGraph data={dataReformat(symsData, symptomsUnifyFB, causeData, this.state.causes)}
                            width={800} height={1000}
                            selectedCauses={this.state.causes}
                            selectCause={causeName => this.selectCause(causeName)}
                            selectedSyms={this.state.symptoms} />
*/