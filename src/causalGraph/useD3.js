/*
    referred from:
    https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app
*/

import React from 'react';
import * as d3 from 'd3';

export const useD3 = (renderGraph, dependencies) => {
    const ref = React.useRef();

    React.useEffect(() => {
        renderGraph(d3.select(ref.current));
        return () => {};
      }, dependencies);
    return ref;
}