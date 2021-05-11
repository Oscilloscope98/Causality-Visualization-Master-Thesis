import React from 'react';
import '../style.css';

function SpinePath({ pathId, d, transform, patterns, selectedCauses, selectCause, deleteCause }) {
    var tempId = pathId.replace('V_', '');
    var tempNum = tempId.substring(1);
    var tempCause = "DLS ";
    //current no deal with C1
    if (tempNum == '1') {
        if (tempId[0] == 'T') {
            tempCause += 'C8-' + tempId;
        }
        else if (tempId[0] == 'L') {
            tempCause += 'T12-' + tempId;
        }
        else if (tempId[0] == 'S') {
            tempCause += 'L5-' + tempId;
        }
    }
    else {
        tempCause += tempId[0] + (tempNum - 1) + '-' + tempId;
    }

    function ifInPatterns() {
        if (patterns.includes('R ' + tempId) || patterns.includes('L ' + tempId)) return true;
        else return false;
    }

    function getClassName() {
        if (ifInPatterns()) {
            return 'spinal-path-related';
        }
        else {
            return 'spinal-path';
        }
    }

    function onHover() {
        //if (ifInPatterns()){
        //console.log(tempCause);
        selectCause(tempCause);
        //}
    }

    function onLeave() {
        //if (ifInPatterns()){
        deleteCause(tempCause);
        //}
    }

    return (
        <path id={pathId} d={d} transform={transform}
            className={getClassName()}
            onMouseEnter={() => onHover()}
            onMouseLeave={() => onLeave()}
            data-tip={tempCause}
            data-for="spineSvgs"
        />
    );
}

export default SpinePath;