import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import BodyTemplate from './bodyComponents/BodyTemplate';
import SpinalNerves from './bodyComponents/SpinalNerves';
import Patterns from './causalGraph/Patterns';
/*import { Legend } from './common/commonComponents'
import { ColorScale } from './common/commonComponents'*/
import ReactTooltip from 'react-tooltip';

//const symsData = require('./data/symsToCause.json');
const causeData = require('./data/causeToSyms.json');
//const patternData = require('./data/patternToSymsCause.json');

var patternStrInitial = {};
var patternLRList = []
Array.from(Array(7).keys()).forEach(c => {
    patternLRList.push("L C" + (c + 2));
    patternLRList.push("R C" + (c + 2));
});
Array.from(Array(12).keys()).forEach(t => {
    patternLRList.push("L T" + (t + 1));
    patternLRList.push("R T" + (t + 1));
});
Array.from(Array(5).keys()).forEach(l => {
    patternLRList.push("L L" + (l + 1));
    patternLRList.push("R L" + (l + 1));
});
Array.from(Array(2).keys()).forEach(s => {
    patternLRList.push("L S" + (s + 1));
    patternLRList.push("R S" + (s + 1));
});
patternLRList.forEach(p => {
    patternStrInitial[p] = { normal: 0, potential: 0 };
});

var causeStrInitial = {};
Object.keys(causeData).forEach(c => {
    causeStrInitial[c] = { fromSym: 0, fromPattern: 0 };
});

//for setting of new causal relations
var causeToSymsExpInitial = {};
Object.keys(causeData).forEach(c => {
    causeToSymsExpInitial[c] = [];
});
causeToSymsExpInitial[""] = []; //deal with the case when no cause is selected

//get potential symptoms from cause, with the name same as the one in causal graph
/*
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
}*/

//change symptoms name on body template to the ones causal graoh
//specially, for the ones with "Or", index is used to get the former or later one
//only keeps the former part for calculating the strength purpose
/*
function simplifySymName(symName, index = 0) {
    var tempSym = symName.replace('F ', '').replace('B ', '').replace(' 2', '');
    if (tempSym.includes(' Or ')) {
        tempSym = tempSym.split(' Or ')[index];
    }
    return tempSym;
}*/

//get related nodes according to input nodes on causal graph
function getRelatedNodes(inputNodeName, data, outputNodeType) {
    var outputs = [];
    data[inputNodeName].forEach(n => {
        outputs.push(n[outputNodeType]);
    });
    return outputs;
}

//for setting of new causal relations
/*
function unifySyms(newSyms) {
    var symptomsUnifyFB = []; //symptom list with the name same as the one in causal graph
    var tempSyms = newSyms;
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
    return symptomsUnifyFB;
}*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symptoms: [], //selected symptoms on body template (with FB, Or, 2)
            causes: [], //hovered causes on causal graph
            patterns: [], //hovered patterns on causal graph
            patternStr: patternStrInitial, //strength (related nums) of each pattern according to selected symptoms/causes
            causeStr: causeStrInitial, //strength (related nums) of each cause according to selected symptoms
            //potentialSyms: [], //potential symptoms according to selected cause, with name the same on the causal graph
            //for setting of new causal relations
            causeToSymsExp: causeToSymsExpInitial, //store the cuase to symptoms causal relations according to the expert's experience
            currentCauseName: "", //store the current cause name that is selected
        };
    }

    //for setting of new causal relations
    confirmSelection() {
        var savedJson = JSON.stringify(this.state.causeToSymsExp);
        var fs = require('fs');
        fs.writeFile("thing.json", savedJson);
    }

    clearSelection() {
        this.setState({ newSyms: [] });
    }

    deleteSymNew(symName) {
        var tempCause = this.state.currentCauseName;
        var tempData = this.state.causeToSymsExp;
        if (tempCause !== "") {
            let tempSyms = tempData[tempCause];
            const index = tempSyms.indexOf(symName);
            if (index > -1) {
                tempSyms.splice(index, 1);
            }
            this.setState({ causeToSymsExp: tempData });
        }
    }

    selectSymNew(symName) {
        var tempCause = this.state.currentCauseName;
        var tempData = this.state.causeToSymsExp;
        if (tempCause !== "") {
            let tempSyms = tempData[tempCause];
            if (!tempSyms.includes(symName)) {
                tempSyms.push(symName);
                this.setState({ causeToSymsExp: tempData });
            }
            else {
                //double click to disable a symptom
                this.deleteSymNew(symName);
            }
        }
    }

    selectCauseNew(causeName) {
        this.setState({ currentCauseName: causeName });

        let tempPoPatternStr = this.state.patternStr;
        Object.keys(tempPoPatternStr).forEach(c => {
            if (tempPoPatternStr[c].potential > 0) tempPoPatternStr[c].potential = 0;
        });
        let tempPoPatterns = getRelatedNodes(causeName, causeData, "pattern");
        tempPoPatterns.forEach(p => {
            tempPoPatternStr[p].potential++;
        });
        this.setState({ patternStr: tempPoPatternStr });
    }

    /*
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
        let tempPatterns = getRelatedNodes(simpliedSymName, symsData, "pattern");
        tempPatterns.forEach(p => {
            tempPatternStr[p].normal--;
        });
        this.setState({ patternStr: tempPatternStr });

        let tempCuaseStr = this.state.causeStr;
        let tempCauses = getRelatedNodes(simpliedSymName, symsData, "cause");
        tempCauses.forEach(c => {
            tempCuaseStr[c].fromSym--;
        });
        this.setState({ causeStr: tempCuaseStr });
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
            let tempPatterns = getRelatedNodes(simpliedSymName, symsData, "pattern");
            tempPatterns.forEach(p => {
                tempPatternStr[p].normal++;
            });
            this.setState({ patternStr: tempPatternStr });

            let tempCuaseStr = this.state.causeStr;
            let tempCauses = getRelatedNodes(simpliedSymName, symsData, "cause");
            tempCauses.forEach(c => {
                tempCuaseStr[c].fromSym++;
            });
            this.setState({ causeStr: tempCuaseStr });
        }
        else {
            //double click to disable a symptom
            this.deleteSym(symName);
        }
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
        let tempPoPatterns = getRelatedNodes(causeName, causeData, "pattern")
        tempPoPatterns.forEach(p => {
            tempPoPatternStr[p].potential--;
        });
        this.setState({ patternStr: tempPoPatternStr });
    }

    //select cause on causal graph
    selectCause(causeName) {
        let tempCauses = this.state.causes;
        if (!tempCauses.includes(causeName)) {
            tempCauses.push(causeName);
            this.setState({ causes: tempCauses });

            //deal with related patterns
            let tempPoPatternStr = this.state.patternStr;
            let tempPoPatterns = getRelatedNodes(causeName, causeData, "pattern");
            tempPoPatterns.forEach(p => {
                tempPoPatternStr[p].potential++;
            });
            this.setState({ patternStr: tempPoPatternStr });
        }
        else {
            //double click to deselect a cause
            this.deleteCause(causeName);
        }
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
        this.setState({ causeStr: tempCauseStr2 });
    }

    //select pattern on causal graph
    selectPattern(patternName) {
        let tempPatterns = this.state.patterns;
        if (!tempPatterns.includes(patternName)) {
            tempPatterns.push(patternName);
            this.setState({ patterns: tempPatterns });

            //deal with related causes
            let tempCauseStr2 = this.state.causeStr;
            let tempCause2 = patternData[patternName].cause;
            tempCauseStr2[tempCause2].fromPattern++;
            //console.log(tempCauseStr2[tempCause2].fromPattern);
            this.setState({ causeStr: tempCauseStr2 });
        }
        else {
            //double click to deselect a cause
            this.deletePattern(patternName);
        }
    }*/

    render() {
        //potential symptom list with the name same as the one in causal graph
        //var potentialSyms = getPotentialSyms(causeData, this.state.causes, patternData, this.state.patterns);
        var potentialSyms = [];
        //console.log(this.state.symptoms);
        //console.log(this.state.currentCauseName);
        console.log(this.state.causeToSymsExp);

        //console.log(this.state.patternStr);
        //console.log(this.state.causeStr);
        return (
            <div>
                <div className="flex-container title">
                    <div className="cause middle-font"
                        data-tip data-for="causeInfo"> Cause: Pathophysiological Diagnosis</div>
                    <div className="middle-reason middle-font"
                        data-tip data-for="middeReasonInfo"> Middle Reason: Pattern Diagnosis </div>
                    <div className="effect middle-font"
                        data-tip data-for="effectInfo"> Effect: Symptom diagnosis </div>
                    <ReactTooltip id='causeInfo' place="bottom" className='small-font info-tooltip'>
                        This part includes a spinal cord diagram for showing the original cause of discomforts. DLS refers to discoligamentous injury, which is the most common cause of neuropathic pain diagnosis.
                    </ReactTooltip>
                    <ReactTooltip id='middeReasonInfo' place="bottom" className='small-font info-tooltip'>
                        This part includes a list of pattern nodes for showing the set of spinal nerves that do not work properly. This condition is often referred to as a radiculopathy.
                    </ReactTooltip>
                    <ReactTooltip id='effectInfo' place="bottom" className='small-font info-tooltip'>
                        This part includes a body template for selecting discomfort areas or symptoms.
                    </ReactTooltip>
                </div>
                <div className="flex-container legends">
                    <div className="cause flex-container">
                        {/* 
                        <ColorScale id="related to symptom"
                            baseColor={{ r: 255, g: 0, b: 0 }}
                            increaseFactor={0.2}
                            colorNum={5}
                        />
                        <Legend id="related to middle reason"
                            bkgColor="rgba(255,0,0,0)"
                            borderColor="0px 0px 0px 0.15vw rgb(0,0,255) inset"
                            ifLeft={true} />*/}
                    </div>
                    <div className="middle-reason flex-container">
                        {/* 
                        <ColorScale id="related to symptom"
                            baseColor={{ r: 255, g: 0, b: 0 }}
                            increaseFactor={0.2}
                            colorNum={5}
                        />
                        <Legend id="related to cause"
                            bkgColor="rgba(255,0,0,0)"
                            borderColor="0px 0px 0px 0.15vw rgba(0,0,255,0.5) inset"
                            inText="T"
                            textColor="rgba(0,0,255,0.5)"
                            ifLeft={true} />*/}
                    </div>
                    <div className="effect flex-container">
                        <a
                            href={`data:text/json;charset=utf-8,${encodeURIComponent(
                                JSON.stringify(this.state.causeToSymsExp)
                            )}`}
                            download="newRelation.json"
                        >
                            {`Download Json`}
                        </a>
                        {/* 
                        <Legend id="selected" bkgColor="rgba(255,0,0,0.2)" />
                        <Legend id="potential" bkgColor="rgba(0,0,255,0.2)" />
                        <Legend id="selected & potential" bkgColor="rgba(255,0,0,0.2)"
                            borderColor="0px 0px 0px 0.15vw rgba(0,0,255,0.5) inset"
                            ifLeft={true} />*/}
                    </div>
                </div>
                <div className="flex-container visual">
                    <div className="cause">
                        <SpinalNerves
                            causeStr={this.state.causeToSymsExp}
                            /*selectedCauses={this.state.causes}*/
                            currentCause={this.state.currentCauseName}
                            selectCause={causeName => this.selectCauseNew(causeName)}
                        /*deleteCause={causeName => this.deleteCause(causeName)}*/
                        />
                    </div>
                    <div className="middle-reason">
                        <Patterns patternStr={this.state.patternStr}
                        /*selectPattern={patternName => this.selectPattern(patternName)}
                        deletePattern={patternName => this.deletePattern(patternName)}*/
                        />
                    </div>
                    <div className="effect">
                        <BodyTemplate
                            clickCallBack={symName => this.selectSymNew(symName)}
                            selectedSyms={this.state.causeToSymsExp[this.state.currentCauseName]}
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