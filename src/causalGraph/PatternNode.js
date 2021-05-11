import React from 'react';
import '../style.css';

class PatternNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorRFactor: 0,
        };
    }

    getClassName(){
        if (this.props.patternName.includes("L ")){
            return "contents left";
        }
        else{
            return "contents right";
        }  
    }

    //color range?
    onHover() {
        this.setState({ colorRFactor: 0.4 });
    }

    onLeave() {
        this.setState({ colorRFactor: 0.2 });
    }

    render(){
        return (
            <div className={this.getClassName()} 
                onMouseEnter={() => this.onHover()}
                onMouseLeave={() => this.onLeave()} 
                style={{backgroundColor: "rgba(255,0,0," + Math.max(0.2, this.state.colorRFactor)*this.props.patternStr +")"}}>
                {this.props.patternName} 
            </div>
        );
    }
}

export default PatternNode;