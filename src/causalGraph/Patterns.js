import React from 'react';
import PatternNode from './PatternNode';
import '../style.css';

class Patterns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: ''
        };
    }

    render() {
        var patternListLR = Object.keys(this.props.patternStr);
        var patternList = [];
        patternListLR.forEach(p => {
            var tempP = p.replace("L ", "").replace("R ", "");
            if (!patternList.includes(tempP)) patternList.push(tempP);
        });
        return (
            <ul className="pattern-list small-font">
                {patternList.map(p => {
                    return <li key={p}>
                        <PatternNode patternName={"L " + p}
                            patternStr={this.props.patternStr["L " + p]}
                            /*selectPattern={this.props.selectPattern}
                            deletePattern={this.props.deletePattern}*/ />
                        <PatternNode patternName={"R " + p}
                            patternStr={this.props.patternStr["R " + p]}
                            /*selectPattern={this.props.selectPattern}
                            deletePattern={this.props.deletePattern}*/ />
                    </li>
                })}
            </ul>
        );
    }
}

export default Patterns;