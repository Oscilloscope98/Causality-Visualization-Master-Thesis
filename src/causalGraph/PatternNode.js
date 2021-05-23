import React from 'react';
import '../style.css';

class PatternNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //colorTransFactor: 0,
            isHovered: false,
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
        this.props.selectPattern(this.props.patternName);
        //this.setState({ colorTransFactor: 0.3 });
        this.setState({ isHovered: true });
    }

    onLeave() {
        this.props.deletePattern(this.props.patternName);
        //this.setState({ colorTransFactor: 0.2 });
        this.setState({ isHovered: false });
    }

    render(){
        /*
        var bkgColor = (this.props.patternStr.normal > 0) ? 
        "rgba(255,0,0," + Math.max(0.2, this.state.colorTransFactor)*this.props.patternStr.normal +")":
        "rgba(160, 160, 160, 0.2)";*/
        var bkgColor = (this.props.patternStr.normal > 0) ? 
        "rgba(255,0,0," + 0.2*this.props.patternStr.normal +")":
        "rgba(160, 160, 160, 0.2)";
        var border = (this.props.patternStr.potential > 0 || this.state.isHovered) ? "0px 0px 0px 0.3vmin rgba(0,0,255,0.5) inset" : "none";
        var fontColor = (this.props.patternStr.potential > 0 || this.state.isHovered) ? "rgba(0,0,255,0.5)" : "white";
        return (
            <div className={this.getClassName()} 
                onMouseEnter={() => this.onHover()}
                onMouseLeave={() => this.onLeave()} 
                style={{backgroundColor: bkgColor, boxShadow: border, color: fontColor}}>
                {this.props.patternName} 
            </div>
        );
    }
}

export default PatternNode;
/*
        var color = (this.props.patternStr.normal > 0)?
        ((this.props.patternStr.potential > 0) ? "rgba(255,0,255," + Math.max(0.2, this.state.colorTransFactor)*this.props.patternStr.normal +")":
        "rgba(255,0,0," + Math.max(0.2, this.state.colorTransFactor)*this.props.patternStr.normal +")"):
        ((this.props.patternStr.potential > 0) ? "rgba(0,0,255," + Math.max(0.2, this.state.colorTransFactor) +")":
        "rgba(0,0,0,0)");
*/