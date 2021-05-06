import React from 'react';
import '../style.css';

function BodyPath({pathId, d, transform, onClick, potentialSyms, selectedSyms}) {
    function getClassName(){
        var tempId = pathId.replaceAll('_', ' ');
        if(selectedSyms.includes(tempId)){
            return 'path-selected';
        }
        else{
            var tempSymName = tempId.replace('F ', '').replace('B ', '').replace(' 2', '').split(' Or ')[0];
            if (potentialSyms.includes(tempSymName)){
                return 'path-potential';
            }
            else return '';
        }
    }

    return (
        <path id={pathId} d={d} transform={transform} onClick={onClick} className={getClassName()}/>
    );
}

export default BodyPath;