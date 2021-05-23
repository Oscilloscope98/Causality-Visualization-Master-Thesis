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

    onHover() {
        this.props.selectCause(this.props.pathId.replace('V_', '').replace('_', ' '));
        this.setState({isHovered: true});
    }

    onLeave() {
        this.props.deleteCause(this.props.pathId.replace('V_', '').replace('_', ' '));
        this.setState({isHovered: false});
    }

    render(){
        var tempId = this.props.pathId.replace('V_', '').replace('_', ' ');
        var fillColor = "rgba(255,0,0," + this.props.causeStr[tempId].fromSym*0.2 + ")";
        var strokeWidth = (this.props.causeStr[tempId].fromPattern > 0 || this.state.isHovered)? "2px" : "1.25px";
        var storkeColor = (this.props.causeStr[tempId].fromPattern > 0 || this.state.isHovered)? "rgba(0,0,255)" : "#333";
        return (
            <path id={this.props.pathId} d={this.props.d} transform={this.props.transform}
                className="spinal-path"
                style={{fill: fillColor, strokeWidth: strokeWidth, stroke: storkeColor}}
                onMouseEnter={() => this.onHover()}
                onMouseLeave={() => this.onLeave()}
                data-tip={tempId}
                data-for="spineSvgs"/>
        );
    }
}

export default SpinePath;