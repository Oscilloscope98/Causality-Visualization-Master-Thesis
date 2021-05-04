import React from 'react';
import '../style.css';

function Ellipse({pathId, cx, cy, rx, ry, transform, onClick, potentialSyms, selectedSyms}) {
    function getClassName(pathId, potentialSyms, selectedSyms){
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
        <ellipse id={pathId} cx={cx} cy={cy} rx={rx} ry={ry} transform={transform} 
            onClick={onClick} className={getClassName(pathId, potentialSyms, selectedSyms)}/>
    );
}

export default Ellipse;