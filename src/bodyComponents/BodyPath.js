import React from 'react';
import '../style.css';

function BodyPath({pathId, d, transform, onClick, potentialSyms, selectedSyms}) {
    var tempId = pathId.replaceAll('_', ' ');
    var tempSymName = tempId.replace('F ', '').replace('B ', '').replace(' 2', '');
    var tempSymName0 = tempSymName.split(' Or ')[0];
    var ifInSyms = selectedSyms.includes(tempId);
    var ifInPoSyms = potentialSyms.includes(tempSymName0);


    function getClassName(){
        if(ifInSyms){
            if (!ifInPoSyms){
                return 'path-selected';
            }
            else{
                return 'path-selected potential';
            }
        }
        else{
            if (potentialSyms.includes(tempSymName0)){
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