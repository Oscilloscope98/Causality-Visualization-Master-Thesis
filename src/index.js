import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import BodyTemplate from './bodyComponents/BodyTemplate';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symptoms: [],
        };
    }

    delectSym(symName){
        let tempSyms = this.state.symptoms;
        const index = tempSyms.indexOf(symName);
            if (index > -1) {
                tempSyms.splice(index, 1);
            }
        this.setState({symptoms: tempSyms});
    }

    handleClick(symName){
        let tempSyms = this.state.symptoms;
        if (!tempSyms.includes(symName)){
            tempSyms.push(symName);
            this.setState({symptoms: tempSyms});
        }
        else{
            //double click to disable a symptom
            this.delectSym(symName);
        }
        console.log(this.state.symptoms);
    }


    render() {
        var symptomsUnifyFB = [];
        var tempSyms = this.state.symptoms;
        for (var i = 0; i < tempSyms.length; i++){
            var tempSym = tempSyms[i].replace('F ', '').replace('B ', '').replace(' 2', '');
            if (!symptomsUnifyFB.includes(tempSym)){
                symptomsUnifyFB.push(tempSym);
            }
        }
        let symString = '';
        symptomsUnifyFB.forEach(item => symString+=item+', ');
        symString = symString.slice(0, -2); 
        return (
            <div className="center">
                <p>Selected Symptoms: {symString}</p>
                <BodyTemplate width={600} 
                    clickCallBack={symName => this.handleClick(symName)} 
                    deleteSym={symName => this.delectSym(symName)}
                    selectedSymptoms={this.state.symptoms}/>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);