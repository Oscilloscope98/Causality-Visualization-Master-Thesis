import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import BodyTemplate from './bodyComponents/BodyTemplate';
import CausalGraph from './causalGraph/CausalGraph';

const data = require('./data/data.json');
const dataRe = require('./data/data_reconstructed.json');

//reconstruct json file for graph according to the selected data
function dataReformat(data, selectedData) {
    var newData = {};
    newData["nodes"] = [];
    newData["links"] = [];
    selectedData.forEach(d => {
        newData.nodes.push({ "id": d, "group": 1 });
        data[d].forEach(r => {
            newData.links.push({ "source": d, "target": r.pattern, "value": 1 });
            if (!newData.nodes.some(node => node.id === r.pattern)) {
                newData.nodes.push({ "id": r.pattern, "group": 2 });
                newData.links.push({ "source": r.pattern, "target": r.cause, "value": 1 });
            }
            if (!newData.nodes.some(node => node.id === r.cause)) {
                newData.nodes.push({ "id": r.cause, "group": 3 });
            }
        });
    });
    return newData;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symptoms: [],
        };
    }

    delectSym(symName) {
        let tempSyms = this.state.symptoms;
        const index = tempSyms.indexOf(symName);
        if (index > -1) {
            tempSyms.splice(index, 1);
        }
        this.setState({ symptoms: tempSyms });
    }

    handleClick(symName) {
        let tempSyms = this.state.symptoms;
        if (!tempSyms.includes(symName)) {
            tempSyms.push(symName);
            this.setState({ symptoms: tempSyms });
        }
        else {
            //double click to disable a symptom
            this.delectSym(symName);
        }
        console.log(this.state.symptoms);
    }


    render() {
        var symptomsUnifyFB = [];
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
        console.log(symptomsUnifyFB)
        //console.log(dataReformat(dataRe, symptomsUnifyFB));
        return (
            <div>
                <p>Selected Symptoms: {symString}</p>
                <div className="flex-container">
                    <div className="graph">
                        <CausalGraph data={dataReformat(dataRe, symptomsUnifyFB)} width={800} height={1000} />
                    </div>
                    <div className="pd">
                        <BodyTemplate width={600}
                            clickCallBack={symName => this.handleClick(symName)}
                            deleteSym={symName => this.delectSym(symName)}
                            selectedSymptoms={this.state.symptoms} />
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