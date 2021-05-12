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
const patternData = require('./data/patternToSymsCause.json');

var patternStrInitial = {};
var patternLRList = []
Array.from(Array(7).keys()).forEach(c => {
    patternLRList.push("L C" + (c+2));
    patternLRList.push("R C" + (c+2));
});
Array.from(Array(12).keys()).forEach(t => {
    patternLRList.push("L T" + (t+1));
    patternLRList.push("R T" + (t+1));
});
Array.from(Array(5).keys()).forEach(l => {
    patternLRList.push("L L" + (l+1));
    patternLRList.push("R L" + (l+1));
});
Array.from(Array(2).keys()).forEach(s => {
    patternLRList.push("L S" + (s+1));
    patternLRList.push("R S" + (s+1));
});
patternLRList.forEach(p => {
    patternStrInitial[p] = {normal: 0, potential: 0};
});

var causeStrInitial = {};
Object.keys(causeData).forEach(c => {
    causeStrInitial[c] = {fromSym: 0, fromPattern: 0};
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
function getPotentialSyms(causeData, selectedCauses, patternData, selectedPatterns) {
    var potentialSyms = [];
    selectedCauses.forEach(c => {
        causeData[c].forEach(r => {
            potentialSyms = potentialSyms.concat(r.symptoms.filter((item) => potentialSyms.indexOf(item) < 0));
        });
    });
    selectedPatterns.forEach(p => {
        patternData[p].symptoms.forEach(s => {
            if (potentialSyms.indexOf(s) < 0) potentialSyms.push(s);
        });
    });
    return potentialSyms;
}

//get patterns from symptoms/causes, with the name same as the one in causal graph (i.e. with L & R)
function getPatterns(data, selectedNodes) {
    var patterns = [];
    selectedNodes.forEach(s => {
        data[s].forEach(r => {
            if (patterns.indexOf(r.pattern) < 0) patterns.push(r.pattern);
        });
    });
    return patterns;
}

//get causes from symptoms, with the name same as the one in causal graph (i.e. DLS ...)
function getCauses(symsData, selectedSyms) {
    var causes = [];
    selectedSyms.forEach(s => {
        symsData[s].forEach(r => {
            if (causes.indexOf(r.cause) < 0) causes.push(r.cause);
        });
    });
    return causes;
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

//get related patterns according to input symptom/cause on causal graph
function getRelatedPatterns(nodeName, data){
    var patterns = [];
    data[nodeName].forEach(r => {
        patterns.push(r.pattern);
    });
    //console.log(patterns);
    return patterns;
}

//get related causes according to input symptom on causal graph
function getRelatedCauses(symName, symsData){
    var causes = [];
    symsData[symName].forEach(r => {
        causes.push(r.cause);
    });
    return causes;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symptoms: [], //selected symptoms on body template (with FB, Or, 2)
            causes: [], //hovered causes on causal graph
            patterns: [], //hovered patterns on causal graph
            patternStr: patternStrInitial, //strength (related nums) of each pattern according to selected symptoms/causes
            causeStr: causeStrInitial, //strength (related nums) of each cause according to selected symptoms
            //potentialPatternStr: patternStrInitial, //strength (related nums) of each symptoms according to selected causes
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

        //deal with related patterns/causes
        let simpliedSymName = simplifySymName(symName);

        let tempPatternStr = this.state.patternStr;
        let tempPatterns = getRelatedPatterns(simpliedSymName, symsData);
        tempPatterns.forEach(p => {
            tempPatternStr[p].normal--;
        });
        this.setState({ patternStr: tempPatternStr});

        let tempCuaseStr = this.state.causeStr;
        let tempCauses = getRelatedCauses(simpliedSymName, symsData);
        tempCauses.forEach(c => {
            tempCuaseStr[c].fromSym--;
        });
        this.setState({causeStr: tempCuaseStr});
    }

    //select symptoms on body template
    selectSym(symName) {
        let tempSyms = this.state.symptoms;
        if (!tempSyms.includes(symName)) {
            tempSyms.push(symName);
            this.setState({ symptoms: tempSyms });
            //deal with related patterns
            let simpliedSymName = simplifySymName(symName);

            let tempPatternStr = this.state.patternStr;
            let tempPatterns = getRelatedPatterns(simplifySymName(simpliedSymName), symsData);
                tempPatterns.forEach(p => {
                tempPatternStr[p].normal++;
            });
            this.setState({ patternStr: tempPatternStr});

            let tempCuaseStr = this.state.causeStr;
            let tempCauses = getRelatedCauses(simpliedSymName, symsData);
            tempCauses.forEach(c => {
                tempCuaseStr[c].fromSym++;
            });
            this.setState({causeStr: tempCuaseStr});
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

        //deal with related patterns
        let tempPoPatternStr = this.state.patternStr;
        let tempPoPatterns = getRelatedPatterns(causeName, causeData);
        tempPoPatterns.forEach(p => {
            tempPoPatternStr[p].potential--;
        });
        this.setState({ patternStr: tempPoPatternStr});
    }

    //select cause on causal graph
    selectCause(causeName) {
        let tempCauses = this.state.causes;
        if (!tempCauses.includes(causeName)) {
            tempCauses.push(causeName);
            this.setState({ causes: tempCauses });

            //deal with related patterns
            let tempPoPatternStr = this.state.patternStr;
            let tempPoPatterns = getRelatedPatterns(causeName, causeData);
                tempPoPatterns.forEach(p => {
                tempPoPatternStr[p].potential++;
            });
            this.setState({ patternStr: tempPoPatternStr});
        }
        else {
            //double click to deselect a cause
            this.deleteCause(causeName);
        }
        //console.log(this.state.causes)
    }

    //delect pattern on causal graph
    deletePattern(patternName) {
        let tempPatterns = this.state.patterns;
        const index = tempPatterns.indexOf(patternName);
        if (index > -1) {
            tempPatterns.splice(index, 1);
        }
        this.setState({ patterns: tempPatterns });

        //deal with related causes
        let tempCauseStr2 = this.state.causeStr;
        let tempCause2 = patternData[patternName].cause;
        tempCauseStr2[tempCause2].fromPattern--;
        this.setState({ causeStr: tempCauseStr2});
    }

    //select pattern on causal graph
    selectPattern(patternName) {
        let tempPatterns= this.state.patterns;
        if (!tempPatterns.includes(patternName)) {
            tempPatterns.push(patternName);
            this.setState({ patterns: tempPatterns });

            //deal with related causes
            let tempCauseStr2 = this.state.causeStr;
            let tempCause2 = patternData[patternName].cause;
            tempCauseStr2[tempCause2].fromPattern++;
            console.log(tempCauseStr2[tempCause2].fromPattern);
            this.setState({ causeStr: tempCauseStr2});
        }
        else {
            //double click to deselect a cause
            this.deletePattern(patternName);
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
        var potentialSyms = getPotentialSyms(causeData, this.state.causes, patternData, this.state.patterns);
        let potentialSymString = '';
        potentialSyms.forEach(item => potentialSymString += item + ', ');
        potentialSymString = potentialSymString.slice(0, -2);
        //console.log(dataReformat(symsData, symptomsUnifyFB, causeData, this.state.causes));
        //console.log(this.state.symptoms);
        //console.log(this.state.patternStr);
        //console.log(this.state.causes);
        //console.log(getCauses(symsData, symptomsUnifyFB));
        console.log(this.state.causeStr);
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
                            causeStr={this.state.causeStr}
                            selectedCauses={this.state.causes}
                            selectCause={causeName => this.selectCause(causeName)}
                            deleteCause={causeName => this.deleteCause(causeName)}
                        />
                    </div>
                    <div className="middle-reason text-center"> 
                        <Patterns patternStr={this.state.patternStr}
                                selectPattern={patternName => this.selectPattern(patternName)}
                                deletePattern={patternName => this.deletePattern(patternName)}
                        /> 
                    </div>
                    <div className="effect">
                        <BodyTemplate width={600}
                            clickCallBack={symName => this.selectSym(symName)}
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