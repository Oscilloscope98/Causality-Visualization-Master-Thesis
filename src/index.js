import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import BodyTemplate from './bodyComponents/BodyTemplate';
import SpinalNerves from './bodyComponents/SpinalNerves';
import Patterns from './causalGraph/Patterns';
import { Legend, ColorScale, ToggleButton, CausalDirectionArrow, DamageToNerveStemDescription } from './common/commonComponents'
import ReactTooltip from 'react-tooltip';

const symsData = require('./data/symsToCause.json');
const causeData = require('./data/causeToSyms.json');
const patternData = require('./data/patternToSymsCause.json');

const symsDataExp = require('./data/symsToCauseExp.json');
const causeDataExp = require('./data/causeToSymsExp.json');
const patternDataExp = require('./data/patternToSymsCauseExp.json');

//change symptoms name on body template to the ones causal graoh
//specially, for the ones with "Or", index is used to get the former or later one
//only keeps the former part for calculating the strength purpose
function simplifySymName(symName, index = 0) {
    var tempSym = symName.replace('F ', '').replace('B ', '').replace(' 2', '');
    if (tempSym.includes(' Or ')) {
        tempSym = tempSym.split(' Or ')[index];
    }
    return tempSym;
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

//get pattern & cause str from selected symptoms and hovered cause
function getStr(symsData, selectedSyms, patternData, selectedPatterns, causeData, selectedCauses) {
    //initialization
    var unifiedSyms = [];
    var patternStr = {};
    Object.keys(patternData).forEach(p => {
        patternStr[p] = { normal: 0, potential: 0 };
    });
    var causeStr = {};
    Object.keys(causeData).forEach(c => {
        causeStr[c] = { fromSym: 0, fromPattern: 0 };
    });
    //deal with each part
    selectedSyms.forEach(sraw => {
        var s = simplifySymName(sraw);
        if (!unifiedSyms.includes(s)) {
            unifiedSyms.push(s);
            symsData[s].forEach(r => {
                patternStr[r.pattern].normal++;
                causeStr[r.cause].fromSym++;
            });
        }
    });

    selectedPatterns.forEach(p => {
        causeStr[patternData[p].cause].fromPattern++;
    });

    selectedCauses.forEach(c => {
        causeData[c].forEach(sp => {
            patternStr[sp.pattern].potential++;
        });
    });

    return { patternStr, causeStr };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symptoms: [], //selected symptoms on body template (with FB, Or, 2)
            causes: [], //hovered causes on causal graph
            patterns: [], //hovered patterns on causal graph
            //patternStr: patternStrInitial, //strength (related nums) of each pattern according to selected symptoms/causes
            //causeStr: causeStrInitial, //strength (related nums) of each cause according to selected symptoms
            //potentialSyms: [], //potential symptoms according to selected cause, with name the same on the causal graph
            isML: true, //which dataset is currently selected
        };
    }

    changeData() {
        let tempBool = this.state.isML;
        this.setState({ isML: !tempBool });
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
    }

    //delect pattern on causal graph
    deletePattern(patternName) {
        let tempPatterns = this.state.patterns;
        const index = tempPatterns.indexOf(patternName);
        if (index > -1) {
            tempPatterns.splice(index, 1);
        }
        this.setState({ patterns: tempPatterns });
    }

    //select pattern on causal graph
    selectPattern(patternName) {
        let tempPatterns = this.state.patterns;
        if (!tempPatterns.includes(patternName)) {
            tempPatterns.push(patternName);
            this.setState({ patterns: tempPatterns });
        }
        else {
            //double click to deselect a cause
            this.deletePattern(patternName);
        }
    }

    render() {
        //get current dataset in use
        var currentSymsData = this.state.isML ? symsData : symsDataExp;
        var currentPatternData = this.state.isML ? patternData : patternDataExp;
        var currentCauseData = this.state.isML ? causeData : causeDataExp;

        //potential symptom list with the name same as the one in causal graph
        var potentialSyms = getPotentialSyms(currentCauseData, this.state.causes, currentPatternData, this.state.patterns);
        var str = getStr(currentSymsData, this.state.symptoms, currentPatternData, this.state.patterns,
            currentCauseData, this.state.causes);
        //console.log(str);

        //deal with interactive descriptive info
        var ifNoSyms = this.state.symptoms.length === 0;
        var ifNoPatterns = this.state.patterns.length === 0;
        var ifNoCauses = this.state.causes.length === 0;

        var ifHideArrow = ifNoSyms && ifNoPatterns && ifNoCauses;
        var ifRightL;
        var ifRightR;
        if (!ifNoPatterns){
            ifRightL = false;
            ifRightR = true;
        }
        if (!ifNoCauses){
            ifRightL = true;
            ifRightR = true;
        }
        if (!ifNoSyms && ifNoPatterns && ifNoCauses){
            ifRightL = false;
            ifRightR = false;
        }


        return (
            <div>
                <DamageToNerveStemDescription causeName={this.state.causes[0]} ifHide={ifNoCauses || this.state.causes[0] === "DLS S1-S2"}/>
                <div className="flex-data-switch-arrow small-font">
                    <div className="empty-left"></div>
                    <div className="arrow-left">
                        <CausalDirectionArrow ifRight={ifRightL} ifHide={ifHideArrow}/> </div>
                    <div className="arrow-right">
                        <CausalDirectionArrow ifRight={ifRightR} ifHide={ifHideArrow}/> </div>
                    <div className="data-switch">
                        <div className="explain">Dataset: </div>
                        <ToggleButton isSelected={!this.state.isML}
                            onToggle={() => this.changeData()}
                            nonSelectText="V1" selectText="V2" /></div>
                </div>
                <div className="flex-container title">
                    <div className="cause middle-font"
                        data-tip data-for="causeInfo"> Cause: Pathophysiological Diagnosis</div>
                    <div className="middle-reason middle-font"
                        data-tip data-for="middeReasonInfo"> Middle Reason: Pattern Diagnosis </div>
                    <div className="effect middle-font"
                        data-tip data-for="effectInfo"> Effect: Symptom diagnosis </div>
                    <ReactTooltip id='causeInfo' place="bottom" 
                        className='tiny-font info-tooltip' backgroundColor='rgba(0,0,0,0.8)' textColor='white'>
                        This part demonstrates spinal cord segments which could possibly be the original cause of the discomforts. DLS refers to discoligamentous injury, which is the most common cause of neuropathic pain diagnosis.
                    </ReactTooltip>
                    <ReactTooltip id='middeReasonInfo' place="bottom" className='small-font info-tooltip'
                        className='tiny-font info-tooltip' backgroundColor='rgba(0,0,0,0.8)' textColor='white'>
                        This part presents the possible pattern of spinal nerves that may be affected. This condition is often referred to as a radiculopathy.
                    </ReactTooltip>
                    <ReactTooltip id='effectInfo' place="bottom" className='small-font info-tooltip'
                        className='tiny-font info-tooltip' backgroundColor='rgba(0,0,0,0.8)' textColor='white'>
                        This part includes a body template for selecting areas of discomfort for symptoms.
                    </ReactTooltip>
                </div>
                <div className="flex-container legends">
                    <div className="cause flex-container">
                        <ColorScale id="related to symptom"
                            baseColor={{ r: 255, g: 0, b: 0 }}
                            increaseFactor={0.2}
                            colorNum={5}
                            ifHide={ifNoSyms} />
                        <Legend id="related to middle reason"
                            bkgColor="rgba(255,0,0,0)"
                            borderColor="0px 0px 0px 0.15vw rgb(0,0,255) inset"
                            ifLeft={true}
                            ifHide={ifNoPatterns} />
                    </div>
                    <div className="middle-reason flex-container">
                        <ColorScale id="related to symptom"
                            baseColor={{ r: 255, g: 0, b: 0 }}
                            increaseFactor={0.2}
                            colorNum={5}
                            ifHide={ifNoSyms} />
                        <Legend id="related to cause"
                            bkgColor="rgba(255,0,0,0)"
                            borderColor="0px 0px 0px 0.15vw rgba(0,0,255,0.5) inset"
                            inText="T"
                            textColorIn="rgba(0,0,255,0.5)"
                            ifLeft={true}
                            ifHide={ifNoCauses} />
                    </div>
                    <div className="effect flex-container">
                        <Legend id="selected" bkgColor="rgba(255,0,0,0.2)" />
                        <Legend id="potential" bkgColor="rgba(0,0,255,0.2)" />
                        <Legend id="selected & potential" bkgColor="rgba(255,0,0,0.2)"
                            borderColor="0px 0px 0px 0.15vw rgba(0,0,255,0.5) inset"
                            ifLeft={true} />
                    </div>
                </div>
                <div className="flex-container visual">
                    <div className="cause">
                        <SpinalNerves
                            causeStr={str.causeStr}
                            selectedCauses={this.state.causes}
                            selectCause={causeName => this.selectCause(causeName)}
                            deleteCause={causeName => this.deleteCause(causeName)}
                        />
                    </div>
                    <div className="middle-reason">
                        <Patterns patternStr={str.patternStr}
                            selectPattern={patternName => this.selectPattern(patternName)}
                            deletePattern={patternName => this.deletePattern(patternName)}
                        />
                    </div>
                    <div className="effect">
                        <BodyTemplate
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