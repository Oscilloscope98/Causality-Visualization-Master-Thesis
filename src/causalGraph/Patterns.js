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
            <div className="text-center">
                <ul className="pattern-list">
                    {patternList.map(p => {
                        return <li key={p}>
                            <PatternNode patternName={"L "+p} 
                                patternStr={this.props.patternStr["L "+p]}/>
                            <PatternNode patternName={"R "+p} 
                                patternStr={this.props.patternStr["R "+p]}/>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Patterns;