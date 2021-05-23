import React from "react";
import '../style.css';

export const Legend = ({ id, inText = "", textColor, bkgColor, borderColor, ifLeft=false }) => {
    // attribute: id
    //optional value: bkgColor, borderColor
    var updateStyle = {};
    if (bkgColor !== undefined) {
        updateStyle.backgroundColor = bkgColor;
    }
    if (borderColor !== undefined) {
        updateStyle.boxShadow = borderColor;
    }
    if (textColor !== undefined) {
        updateStyle.color = textColor;
    }

    var tempTextClass="not-left";
    if(ifLeft){
        tempTextClass = "";
    }

    return (
        <div className='legend-or-scale-flex'>
            <div className='legend' style={updateStyle}>{inText}</div>
            <div className={'legend-or-scale-text small-font '+ tempTextClass}>{id}</div>
        </div>
    );
}

export const ColorScale = ({ id, baseColor, increaseFactor, colorNum, ifLeft=false }) => {
    //base color is in {r, g, b}
    var tempTextClass="not-left";
    if(ifLeft){
        tempTextClass = "";
    }

    return (
        <div className='legend-or-scale-flex'>
            {Array.from(Array(colorNum).keys()).map(n => {
                var tempClass = "scale";
                var tempColor = "rgba("+baseColor.r+","+baseColor.g+","+baseColor.b+","+increaseFactor*(n+1)+")";
                if (n === 0) tempClass+=" start";
                else if (n === colorNum-1) tempClass+=" end";
                return <div key={id+n} className={tempClass} style={{backgroundColor: tempColor}}/>
            })
            }
            <div className={'legend-or-scale-text small-font '+ tempTextClass}>{id}</div>
        </div>
    );
}