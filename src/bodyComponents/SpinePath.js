import React from 'react';
import '../style.css';

class SpinePath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //colorTransFactor: 0,
            isHovered: false,
        };
    }

    clickHandler(){
        this.props.selectCause(this.props.pathId.replace('V_', '').replace('_', ' '));
    }

    /*
    onHover() {
        this.props.selectCause(this.props.pathId.replace('V_', '').replace('_', ' '));
        this.setState({isHovered: true});
    }

    onLeave() {
        this.props.deleteCause(this.props.pathId.replace('V_', '').replace('_', ' '));
        this.setState({isHovered: false});
    }*/

    render(){
        var tempId = this.props.pathId.replace('V_', '').replace('_', ' ');
        //var fillColor = "rgba(255,0,0," + this.props.causeStr[tempId].fromSym*0.2 + ")";
        var factor = (this.props.causeStr[tempId].length > 0) ? 1 : 0;
        var fillColor = "rgba(0,0,255," + factor * 0.2 + ")";
        //var strokeWidth = (this.props.causeStr[tempId].fromPattern > 0 || this.state.isHovered)? "2px" : "1.25px";
        //var storkeColor = (this.props.causeStr[tempId].fromPattern > 0 || this.state.isHovered)? "rgba(0,0,255)" : "#333";
        var strokeWidth = (tempId === this.props.currentCause) ? "2px" : "1.25px";
        var storkeColor = (tempId === this.props.currentCause)? "rgba(0,0,255)" : "#333";
        return (
            <path id={this.props.pathId} d={this.props.d} transform={this.props.transform}
                className="spinal-path"
                style={{fill: fillColor, strokeWidth: strokeWidth, stroke: storkeColor}}
                /*onMouseEnter={() => this.onHover()}
                onMouseLeave={() => this.onLeave()}*/
                onClick={() => this.clickHandler()}
                data-tip={tempId}
                data-for="spineSvgs"/>
        );
    }
}

export default SpinePath;