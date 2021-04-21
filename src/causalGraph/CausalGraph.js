import { useD3 } from './useD3';
import React from 'react';
import * as d3 from 'd3';

/*
referred from:
https://observablehq.com/@d3/force-directed-graph
https://observablehq.com/@turuibo/the-complete-causal-graph-of-neuropathic-pain-diagnosis
*/

function CausalGraph({ data, width, height }) {
    function color(d) {
        //const scale = d3.scaleOrdinal(d3.schemeCategory10);
        const colorList = d3.schemeCategory10;
        return colorList[d.group - 1];
    }
    function drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }
    const ref = useD3(
        (svg) => {
            svg.selectAll('*').remove();

            console.log(data);

            const links = data.links.map(d => Object.assign(d));
            const nodes = data.nodes.map(d => Object.assign(d));


            const simulation = d3.forceSimulation(nodes)
                .force("x", d3.forceX(d => {
                    if (d.group === 1) {
                        return width; // width/5 - 50 - 400;
                    }
                    if (d.group === 2) {
                        return width / 2; // width/5 - 50 - 400;
                    }
                    if (d.group === 3) {
                        return width / 3; // width/5 - 50 - 400;
                    }
                }).strength(0.95))
                .force("link", d3.forceLink(links).id(d => d.id))
                .force("charge", d3.forceManyBody())
                .force("center", d3.forceCenter(width / 2, height / 2))
                .force("collide", d3.forceCollide().radius(d => 35).iterations(5));

            svg.attr("viewBox", [0, 0, width, height])
            
            /*zoon
          
            const zoom = d3.zoom()
              .scaleExtent([0.2, 8])
              .on("zoom", (event) => {
                svg.attr("transform", event.transform)});
          
            svg.call(zoom);*/

            const link = svg.append("g")
                .attr("stroke", "#999")
                .attr("stroke-opacity", 0.6)
                .selectAll("line")
                .data(links)
                .join("line")
                .attr("stroke-width", d => Math.sqrt(d.value));

            const node = svg.append("g")
                .selectAll(".node")
                .data(nodes)
                .join("g")
                .attr('class', 'node')
                .call(drag(simulation));

            node.append('circle')
                .attr("r", 10)
                .attr("fill", color);

            node.append("text")
                .text(function (d) {
                    return d.id;
                })
                .style('fill', '#000')
                .style('font-size', '10px')
                .attr('dx', 12)
                .attr('dy', 0);

            simulation.on("tick", () => {
                link
                    .attr("x1", d => d.source.x)
                    .attr("y1", d => d.source.y)
                    .attr("x2", d => d.target.x)
                    .attr("y2", d => d.target.y);

                node
                    .attr("transform", d => `translate(${d.x}, ${d.y})`);
            });
        }, [data]
    );

    return (
        <svg
            ref={ref}
            style={{
                height: 700,
                width: 400,
                marginRight: "0px",
                marginLeft: "0px",
            }}
        />
    );
}

export default CausalGraph;