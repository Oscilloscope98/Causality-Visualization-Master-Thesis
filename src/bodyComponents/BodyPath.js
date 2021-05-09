import React from 'react';
import '../style.css';

function BodyPath({pathId, d, transform, onClick, potentialSyms, selectedSyms}) {
    var tempId = pathId.replaceAll('_', ' ');
    var tempSymName = tempId.replace('F ', '').replace('B ', '').replace(' 2', '').split(' Or ')[0];

    function getClassName(){
        if(selectedSyms.includes(tempId)){
            return 'path-selected';
        }
        else{
            if (potentialSyms.includes(tempSymName)){
                return 'path-potential';
            }
            else return '';
        }
    }

    return (
        <path id={pathId} d={d} transform={transform} 
            onClick={onClick} 
            className={getClassName()}
            data-tip={tempSymName}
            data-for="symSvgs"
            />
    );
}

export default BodyPath;