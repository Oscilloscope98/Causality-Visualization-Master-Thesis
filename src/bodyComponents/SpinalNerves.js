import React from 'react'
import bodyTemplateBackPartPNG from '../figures/body_components/body_template_back_part_new.png'
import SpinePath from './SpinePath';
import ReactTooltip from 'react-tooltip';
import '../style.css';

class SpinalNerves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: ''
        };
    }

    render() {
        return (
            <div className='svg-image-container'>
                <img src={bodyTemplateBackPartPNG} alt='' />
                <svg id="Spinal_Nerves"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 366 479.83">
                    <rect id="Border" width="366" height="479.83" style={{ fill: "none" }} />
                    <g id="Nerves">
                        <path
                            d="M218.27,267.94v79.25s1.4,5.13,1.76,7.86,2.1,7.17-.36,13.66-3.16,15-4.57,15.37h.23c-1.4-.34-2.11-8.88-4.57-15.37s-.7-10.93-.35-13.66a79.34,79.34,0,0,1,1.76-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffeec5", stroke: "#333", strokeWidth: "2px" }} />
                        <path d="M211.35,108.18V266.92c0,2.07,1.73,9.22,3.87,9.22s3.87-7.15,3.87-9.22V108.18a3.87,3.87,0,0,0-7.74,0Z"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "#ffca05", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M252.81,325.16a10.87,10.87,0,0,0-1.57-1.6A13.33,13.33,0,0,0,249,322.2a22.58,22.58,0,0,0-4.41-1.6,39,39,0,0,0-10.39-1.36,16.76,16.76,0,0,1-14.18-8.43,53.59,53.59,0,0,1-2.2-5.24"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4px" }} />
                        <path
                            d="M252.5,323.34a4.15,4.15,0,0,1-1.58-1.82,22.83,22.83,0,0,0-2.2-3.65,18.8,18.8,0,0,0-3.78-4.55,46.34,46.34,0,0,0-4.1-3.42,17.06,17.06,0,0,0-4.72-2.28,55.87,55.87,0,0,1-9.77-3.87,28.83,28.83,0,0,1-4.72-3,12.16,12.16,0,0,1-3.78-5.69"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4px" }} />
                        <path
                            d="M244.62,309.9a23.11,23.11,0,0,0-10.39-13.21c-2.21-1.14-4.41-2.05-6.93-3.19a16.59,16.59,0,0,1-5.36-4.09c-.63-1.14-1.57-2.28-2.2-3.42"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4px" }} />
                        <path
                            d="M247.29,282.57c-2.49-1.82-6.53-2.5-9.64-3.41a44.32,44.32,0,0,1-8.08-1.83,13.73,13.73,0,0,1-3.42-1.13c-1.87-.92-3.11-2.51-4.35-3.65-.63-1.14-1.25-2.05-1.87-3a41.34,41.34,0,0,0-2.49-3.41"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4px" }} />
                        <path
                            d="M177.17,379.45a14.1,14.1,0,0,1,6.5-3.33c1.44-.34,3.9-.63,5.31-.86h1.17a5.63,5.63,0,0,1,1.88.46,24.31,24.31,0,0,0,4.1,0"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M156.38,416.94c0-.91.29-7.49,5.86-17.77,2.45-4.5,3.76-8.22,7.93-13.72a118.49,118.49,0,0,1,23.33-23.83"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "6px" }} />
                        <path
                            d="M182.18,376.4a29.46,29.46,0,0,1,3.28-2.28,16.37,16.37,0,0,1,2.35-1.82c.46-.22.7-.45,1.17-.68s2.93-1.2,3.81-1.71"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M158.14,410.73c.7-1.36,2-4,2.63-5.63,1.06-2.82,1.56-2.5,2.73-4.32a33.21,33.21,0,0,1,6.25-7.53c2.81-2.5,6.56-3.64,9.61-5.69a20.91,20.91,0,0,0,4.46-3.64,112.32,112.32,0,0,1,10.73-11.79"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M182.94,384.77a31.09,31.09,0,0,1,4.16-3.59,12.79,12.79,0,0,1,4-1.82,10.17,10.17,0,0,1,2.35-.91,9,9,0,0,1,2.34-.68"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M169,419.22c-1.71-8.6,1.88-14.81,3.05-17.54a44.65,44.65,0,0,1,3.29-5.69,15.79,15.79,0,0,1,3.52-4.33,37,37,0,0,1,3.27-2.38,12.58,12.58,0,0,0,4.93-4.91,47.63,47.63,0,0,0,3.29-4.1,6.34,6.34,0,0,1,3.05-1.82"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M176.78,393.71c.47-1.14.94-2,1.41-3.19a5.8,5.8,0,0,1,1.88-3" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2px" }} />
                        <path
                            d="M190.39,411.93c-.71.23-8.06,0-8.68-6.83-.37-4.09,1.41-8,4-11.16,1.4-1.6,2.58-3.19,3.75-4.78a35.88,35.88,0,0,0,2.11-4.33l1.41-3.42c.46-.68.7-1.36,1.17-2.05.47-.45.94-.68,1.41-1.14"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M190.85,386.65c.94-2.5,4.46-3.87,7-3.87" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M191.56,408.06a9.06,9.06,0,0,1-4.92.22,10.74,10.74,0,0,1-2.82-1.59c-.47-.68-.94-.91-1.41-1.59-.23-.69-.23-.92-.47-1.6a11.65,11.65,0,0,1,.73-4.72"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M243,318.27a12.36,12.36,0,0,1-1.65-2,16,16,0,0,0-2.37-2.9,30.22,30.22,0,0,0-3.78-3.42l-2.12-1.54a12.87,12.87,0,0,1-1.89-1.36c-1.42-.86-2.6-1.71-4-2.39"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M238,306.31a2.58,2.58,0,0,0-.47-1.36c-.24-.86-.48-1.71-.71-2.56-.71-1.54-1.42-2.91-2.13-4.27a12,12,0,0,0-4-3.08"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M244.15,328.35c-.47-.69-1.18-1.2-1.65-1.88l-2.13-2.56a9.71,9.71,0,0,0-3.54-2.74c-1-.51-2.13-.85-3.07-1.36a8.82,8.82,0,0,0-3.08-.86"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M249.82,300c-1.65.69-3.54,1.2-5.43,1.88-2.6.69-5.2,1.2-7.57,1.88-1.65.34-3.54.86-5.19,1.37-.47,0-.95.17-1.65.17a2.38,2.38,0,0,0-1.19-.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M247.69,290.26a8.89,8.89,0,0,1-2.12.17,48.42,48.42,0,0,0-5,.34,67.62,67.62,0,0,1-8.27.51h-5.2c-.94-.17-2.83,0-3.31-.68"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M246.5,354.9c-2.65-2.13-5.31-4.46-9.73-5.95a16.23,16.23,0,0,0-4.86-1.28c-1.77-.42,5.35,1.37,3.58,1.15a33.74,33.74,0,0,1-11.06-3.18c-2.65-1.28-5.31-2.77-6.63-4.26"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,244c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,256c2.81,4.79,3.52,9.57,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,235.15c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,223.19c2.81,4.78,3.52,9.57,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,213.28c2.81,4.79,3.52,9.57,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,202.35c2.81,4.79,3.52,9.57,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,193.13c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,183.22c2.81,4.78,3.52,9.57,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,174c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,165.12c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M216.74,159.31c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M216.9,321.35c-1.25,1.59-.41,3.87.42,5.23a19.53,19.53,0,0,0,5.85,6.83c4.17,3.42,3.73,2.79,10,4.38,5.85,1.37,11.69,3.65,12.94,7.29"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4px" }} />
                        <path d="M241.52,333.92c-3.76-.68-.4,1.54-3.74,2.45a20.12,20.12,0,0,1-4.17.69h-2.09c-.84,0-1.26.23-2.09-.23"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M289.17,185.28a57,57,0,0,1-10.5-1.66A42,42,0,0,1,268,178.45c-7.33-4.83-13.67-11-20.83-16a69.9,69.9,0,0,0-19.34-8.83,43.55,43.55,0,0,0-9.5-2.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M285.17,185c-5.84-2.67-10.5-7.5-15-11.83a213.61,213.61,0,0,0-18.5-16.5A78.25,78.25,0,0,0,241,149.78a57.18,57.18,0,0,0-10.5-4,97.57,97.57,0,0,0-13.5-2.66"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M276.83,170.62a61.74,61.74,0,0,1-7.33-5.5c-2.5-2.34-4.5-4.84-6.83-7.34a47.47,47.47,0,0,0-7.17-7,53.56,53.56,0,0,0-8.33-5.16,86,86,0,0,0-18.84-7.17,62.77,62.77,0,0,0-10.83-2.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M251.67,148.12a84.36,84.36,0,0,1-7.34-8c-3-3.34-7.16-5.17-11.33-6.84a61.64,61.64,0,0,0-10.83-2.83c-2-.33-3.84-.17-5.84-.67"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M299.33,195.12a41.91,41.91,0,0,0-3.16-8,41.89,41.89,0,0,0-6.67-8.5,35.38,35.38,0,0,0-8.17-6,62,62,0,0,0-7.66-3.34,68.89,68.89,0,0,1-16.34-8.5"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M282.83,173.45c-4.16-3.33-7.33-7.5-10.5-11.67-1.5-2-2.83-4-4.5-5.83a21,21,0,0,0-4.16-3.5,33.3,33.3,0,0,0-9-4.67,20.83,20.83,0,0,1-5.67-2"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path d="M257.5,160.45c0-2.5.17-5.17-.83-7.33-.5-1.17-3.67-4.67-5-5" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M273.33,176.28A37.15,37.15,0,0,0,264.5,170a22.93,22.93,0,0,0-5.33-2.67l-4-1.5c-1.17-.33-2.17-.83-3.34-1.16a7.22,7.22,0,0,1-1.66-.67c-1-.5-3.5-1.67-4.5-2.33"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M252.81,325.16a10.87,10.87,0,0,0-1.57-1.6A13.33,13.33,0,0,0,249,322.2a22.58,22.58,0,0,0-4.41-1.6,39,39,0,0,0-10.39-1.36,16.76,16.76,0,0,1-14.18-8.43,53.59,53.59,0,0,1-2.2-5.24"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M252.5,323.34a4.15,4.15,0,0,1-1.58-1.82,22.83,22.83,0,0,0-2.2-3.65,18.8,18.8,0,0,0-3.78-4.55,46.34,46.34,0,0,0-4.1-3.42,17.06,17.06,0,0,0-4.72-2.28,55.87,55.87,0,0,1-9.77-3.87,28.83,28.83,0,0,1-4.72-3,12.16,12.16,0,0,1-3.78-5.69"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M244.62,309.9a23.11,23.11,0,0,0-10.39-13.21c-2.21-1.14-4.41-2.05-6.93-3.19a16.59,16.59,0,0,1-5.36-4.09c-.63-1.14-1.57-2.28-2.2-3.42"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M247.29,282.57c-2.49-1.82-6.53-2.5-9.64-3.41a44.32,44.32,0,0,1-8.08-1.83,13.73,13.73,0,0,1-3.42-1.13c-1.87-.92-3.11-2.51-4.35-3.65-.63-1.14-1.25-2.05-1.87-3a41.34,41.34,0,0,0-2.49-3.41"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M182.18,376.4a29.46,29.46,0,0,1,3.28-2.28,16.37,16.37,0,0,1,2.35-1.82c.46-.22.7-.45,1.17-.68s2.93-1.2,3.81-1.71"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M177.17,379.45a14.1,14.1,0,0,1,6.5-3.33c1.44-.34,3.9-.63,5.31-.86h1.17a5.63,5.63,0,0,1,1.88.46,24.31,24.31,0,0,0,4.1,0"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M156.38,416.94c0-.91.29-7.49,5.86-17.77,2.45-4.5,3.76-8.22,7.93-13.72a118.49,118.49,0,0,1,23.33-23.83"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "5px" }} />
                        <path
                            d="M158.14,410.73c.7-1.36,2-4,2.63-5.63,1.06-2.82,1.56-2.5,2.73-4.32a33.21,33.21,0,0,1,6.25-7.53c2.81-2.5,6.56-3.64,9.61-5.69a20.91,20.91,0,0,0,4.46-3.64,112.32,112.32,0,0,1,10.73-11.79"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M182.94,384.77a31.09,31.09,0,0,1,4.16-3.59,12.79,12.79,0,0,1,4-1.82,10.17,10.17,0,0,1,2.35-.91,9,9,0,0,1,2.34-.68"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M169,419.22c-1.71-8.6,1.88-14.81,3.05-17.54a44.65,44.65,0,0,1,3.29-5.69,15.79,15.79,0,0,1,3.52-4.33,37,37,0,0,1,3.27-2.38,12.58,12.58,0,0,0,4.93-4.91,47.63,47.63,0,0,0,3.29-4.1,6.34,6.34,0,0,1,3.05-1.82"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M176.78,393.71c.47-1.14.94-2,1.41-3.19a5.8,5.8,0,0,1,1.88-3" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.1px" }} />
                        <path
                            d="M190.39,411.93c-.71.23-8.06,0-8.68-6.83-.37-4.09,1.41-8,4-11.16,1.4-1.6,2.58-3.19,3.75-4.78a35.88,35.88,0,0,0,2.11-4.33l1.41-3.42c.46-.68.7-1.36,1.17-2.05.47-.45.94-.68,1.41-1.14"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M190.85,386.65c.94-2.5,4.46-3.87,7-3.87" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M191.56,408.06a9.06,9.06,0,0,1-4.92.22,10.74,10.74,0,0,1-2.82-1.59c-.47-.68-.94-.91-1.41-1.59-.23-.69-.23-.92-.47-1.6a11.65,11.65,0,0,1,.73-4.72"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M250.44,379.45a14.15,14.15,0,0,0-6.5-3.33c-1.44-.34-3.91-.63-5.32-.86h-1.17a5.69,5.69,0,0,0-1.88.46,24.3,24.3,0,0,1-4.1,0"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M271.23,416.94c0-.91-.29-7.49-5.87-17.77-2.44-4.5-3.76-8.22-7.92-13.72a118.66,118.66,0,0,0-23.34-23.83"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "6px" }} />
                        <path
                            d="M245.43,376.4a29.55,29.55,0,0,0-3.29-2.28,16.88,16.88,0,0,0-2.34-1.82c-.47-.22-.71-.45-1.18-.68s-2.93-1.2-3.81-1.71"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M269.47,410.73c-.71-1.36-2-4-2.64-5.63-1.06-2.82-1.55-2.5-2.73-4.32a32.91,32.91,0,0,0-6.24-7.53c-2.82-2.5-6.57-3.64-9.62-5.69a21.17,21.17,0,0,1-4.46-3.64,111.17,111.17,0,0,0-10.73-11.79"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M244.66,384.77a30.47,30.47,0,0,0-4.16-3.59,12.69,12.69,0,0,0-4-1.82,10.28,10.28,0,0,0-2.34-.91,9,9,0,0,0-2.35-.68"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M258.56,419.22c1.71-8.6-1.88-14.81-3.05-17.54a45.83,45.83,0,0,0-3.28-5.69,16,16,0,0,0-3.52-4.33,40.26,40.26,0,0,0-3.27-2.38,12.61,12.61,0,0,1-4.94-4.91,47.47,47.47,0,0,1-3.28-4.1,6.38,6.38,0,0,0-3.05-1.82"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M250.82,393.71c-.47-1.14-.94-2-1.41-3.19a5.84,5.84,0,0,0-1.87-3" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2px" }} />
                        <path
                            d="M237.22,411.93c.7.23,8.05,0,8.67-6.83.38-4.09-1.4-8-4-11.16-1.41-1.6-2.58-3.19-3.76-4.78a37.33,37.33,0,0,1-2.1-4.33c-.48-1.14-.94-2.28-1.41-3.42-.47-.68-.71-1.36-1.17-2.05-.47-.45-.94-.68-1.41-1.14"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M236.75,386.65c-.94-2.5-4.46-3.87-7-3.87" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M236,408.06a9.1,9.1,0,0,0,4.93.22,10.68,10.68,0,0,0,2.81-1.59c.47-.68.94-.91,1.41-1.59.23-.69.23-.92.47-1.6a11.63,11.63,0,0,0-.72-4.72"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M245.43,376.4a29.55,29.55,0,0,0-3.29-2.28,16.88,16.88,0,0,0-2.34-1.82c-.47-.22-.71-.45-1.18-.68s-2.93-1.2-3.81-1.71"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M250.44,379.45a14.15,14.15,0,0,0-6.5-3.33c-1.44-.34-3.91-.63-5.32-.86h-1.17a5.69,5.69,0,0,0-1.88.46,24.3,24.3,0,0,1-4.1,0"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M271.23,416.94c0-.91-.29-7.49-5.87-17.77-2.44-4.5-3.76-8.22-7.92-13.72a118.66,118.66,0,0,0-23.34-23.83"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "5px" }} />
                        <path
                            d="M269.47,410.73c-.71-1.36-2-4-2.64-5.63-1.06-2.82-1.55-2.5-2.73-4.32a32.91,32.91,0,0,0-6.24-7.53c-2.82-2.5-6.57-3.64-9.62-5.69a21.17,21.17,0,0,1-4.46-3.64,111.17,111.17,0,0,0-10.73-11.79"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M244.66,384.77a30.47,30.47,0,0,0-4.16-3.59,12.69,12.69,0,0,0-4-1.82,10.28,10.28,0,0,0-2.34-.91,9,9,0,0,0-2.35-.68"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M258.56,419.22c1.71-8.6-1.88-14.81-3.05-17.54a45.83,45.83,0,0,0-3.28-5.69,16,16,0,0,0-3.52-4.33,40.26,40.26,0,0,0-3.27-2.38,12.61,12.61,0,0,1-4.94-4.91,47.47,47.47,0,0,1-3.28-4.1,6.38,6.38,0,0,0-3.05-1.82"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M250.82,393.71c-.47-1.14-.94-2-1.41-3.19a5.84,5.84,0,0,0-1.87-3" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.1px" }} />
                        <path
                            d="M237.22,411.93c.7.23,8.05,0,8.67-6.83.38-4.09-1.4-8-4-11.16-1.41-1.6-2.58-3.19-3.76-4.78a37.33,37.33,0,0,1-2.1-4.33c-.48-1.14-.94-2.28-1.41-3.42-.47-.68-.71-1.36-1.17-2.05-.47-.45-.94-.68-1.41-1.14"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M236.75,386.65c-.94-2.5-4.46-3.87-7-3.87" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M236,408.06a9.1,9.1,0,0,0,4.93.22,10.68,10.68,0,0,0,2.81-1.59c.47-.68.94-.91,1.41-1.59.23-.69.23-.92.47-1.6a11.63,11.63,0,0,0-.72-4.72"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M243,318.27a12.36,12.36,0,0,1-1.65-2,16,16,0,0,0-2.37-2.9,30.22,30.22,0,0,0-3.78-3.42l-2.12-1.54a12.87,12.87,0,0,1-1.89-1.36c-1.42-.86-2.6-1.71-4-2.39"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M238,306.31a2.58,2.58,0,0,0-.47-1.36c-.24-.86-.48-1.71-.71-2.56-.71-1.54-1.42-2.91-2.13-4.27a12,12,0,0,0-4-3.08"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M244.15,328.35c-.47-.69-1.18-1.2-1.65-1.88l-2.13-2.56a9.71,9.71,0,0,0-3.54-2.74c-1-.51-2.13-.85-3.07-1.36a8.82,8.82,0,0,0-3.08-.86"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M249.82,300c-1.65.69-3.54,1.2-5.43,1.88-2.6.69-5.2,1.2-7.57,1.88-1.65.34-3.54.86-5.19,1.37-.47,0-.95.17-1.65.17a2.38,2.38,0,0,0-1.19-.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M247.69,290.26a8.89,8.89,0,0,1-2.12.17,48.42,48.42,0,0,0-5,.34,67.62,67.62,0,0,1-8.27.51h-5.2c-.94-.17-2.83,0-3.31-.68"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M246.5,354.9c-2.65-2.13-5.31-4.46-9.73-5.95a16.23,16.23,0,0,0-4.86-1.28c-1.77-.42,5.35,1.37,3.58,1.15a33.74,33.74,0,0,1-11.06-3.18c-2.65-1.28-5.31-2.77-6.63-4.26"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,244c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,256c2.81,4.79,3.52,9.57,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,235.15c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,223.19c2.81,4.78,3.52,9.57,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,213.28c2.81,4.79,3.52,9.57,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,202.35c2.81,4.79,3.52,9.57,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,193.13c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,183.22c2.81,4.78,3.52,9.57,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,174c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,165.12c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M216.74,159.31c2.81,4.78,3.52,9.56,32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M216.9,321.35c-1.25,1.59-.41,3.87.42,5.23a19.53,19.53,0,0,0,5.85,6.83c4.17,3.42,3.73,2.79,10,4.38,5.85,1.37,11.69,3.65,12.94,7.29"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M241.52,333.92c-3.76-.68-.4,1.54-3.74,2.45a20.12,20.12,0,0,1-4.17.69h-2.09c-.84,0-1.26.23-2.09-.23"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M289.17,185.28a57,57,0,0,1-10.5-1.66A42,42,0,0,1,268,178.45c-7.33-4.83-13.67-11-20.83-16a69.9,69.9,0,0,0-19.34-8.83,43.55,43.55,0,0,0-9.5-2.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M285.17,185c-5.84-2.67-10.5-7.5-15-11.83a213.61,213.61,0,0,0-18.5-16.5A78.25,78.25,0,0,0,241,149.78a57.18,57.18,0,0,0-10.5-4,97.57,97.57,0,0,0-13.5-2.66"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M276.83,170.62a61.74,61.74,0,0,1-7.33-5.5c-2.5-2.34-4.5-4.84-6.83-7.34a47.47,47.47,0,0,0-7.17-7,53.56,53.56,0,0,0-8.33-5.16,86,86,0,0,0-18.84-7.17,62.77,62.77,0,0,0-10.83-2.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M251.67,148.12a84.36,84.36,0,0,1-7.34-8c-3-3.34-7.16-5.17-11.33-6.84a61.64,61.64,0,0,0-10.83-2.83c-2-.33-3.84-.17-5.84-.67"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M299.33,195.12a41.91,41.91,0,0,0-3.16-8,41.89,41.89,0,0,0-6.67-8.5,35.38,35.38,0,0,0-8.17-6,62,62,0,0,0-7.66-3.34,68.89,68.89,0,0,1-16.34-8.5"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M282.83,173.45c-4.16-3.33-7.33-7.5-10.5-11.67-1.5-2-2.83-4-4.5-5.83a21,21,0,0,0-4.16-3.5,33.3,33.3,0,0,0-9-4.67,20.83,20.83,0,0,1-5.67-2"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path d="M257.5,160.45c0-2.5.17-5.17-.83-7.33-.5-1.17-3.67-4.67-5-5" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M273.33,176.28A37.15,37.15,0,0,0,264.5,170a22.93,22.93,0,0,0-5.33-2.67l-4-1.5c-1.17-.33-2.17-.83-3.34-1.16a7.22,7.22,0,0,1-1.66-.67c-1-.5-3.5-1.67-4.5-2.33"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M176.79,325.16a10.87,10.87,0,0,1,1.57-1.6,13.33,13.33,0,0,1,2.21-1.36,22.58,22.58,0,0,1,4.41-1.6,38.89,38.89,0,0,1,10.39-1.36,16.72,16.72,0,0,0,14.17-8.43,51.44,51.44,0,0,0,2.21-5.24"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4px" }} />
                        <path
                            d="M177.1,323.34a4.21,4.21,0,0,0,1.58-1.82,22.83,22.83,0,0,1,2.2-3.65,18.8,18.8,0,0,1,3.78-4.55,46.34,46.34,0,0,1,4.1-3.42,16.79,16.79,0,0,1,4.72-2.28,55.76,55.76,0,0,0,9.76-3.87,28.51,28.51,0,0,0,4.73-3,12.16,12.16,0,0,0,3.78-5.69"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4px" }} />
                        <path
                            d="M185,309.9a23.11,23.11,0,0,1,10.39-13.21c2.2-1.14,4.41-2.05,6.93-3.19a16.55,16.55,0,0,0,5.35-4.09c.63-1.14,1.58-2.28,2.21-3.42"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4px" }} />
                        <path
                            d="M182.3,282.57c2.49-1.82,6.53-2.5,9.64-3.41a44.43,44.43,0,0,0,8.09-1.83,13.87,13.87,0,0,0,3.42-1.13c1.86-.92,3.11-2.51,4.35-3.65a31.1,31.1,0,0,1,1.87-3c.93-1.14,1.55-2.5,2.48-3.41"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4px" }} />
                        <path
                            d="M186.63,318.27a12.36,12.36,0,0,0,1.65-2,16.36,16.36,0,0,1,2.36-2.9,31.7,31.7,0,0,1,3.78-3.42l2.13-1.54a12.87,12.87,0,0,0,1.89-1.36c1.42-.86,2.6-1.71,4-2.39"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M185.45,328.35c.47-.69,1.18-1.2,1.65-1.88l2.13-2.56a9.71,9.71,0,0,1,3.54-2.74c.94-.51,2.13-.85,3.07-1.36a8.77,8.77,0,0,1,3.07-.86"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M179.78,300c1.65.69,3.54,1.2,5.43,1.88,2.6.69,5.2,1.2,7.56,1.88,1.65.34,3.54.86,5.2,1.37.47,0,.94.17,1.65.17a2.36,2.36,0,0,1,1.18-.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M181.9,290.26a9,9,0,0,0,2.13.17,48.61,48.61,0,0,1,5,.34,67.5,67.5,0,0,0,8.27.51h5.2c.94-.17,2.83,0,3.3-.68"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M183.09,354.9c2.66-2.13,5.31-4.46,9.73-5.95a16.38,16.38,0,0,1,4.87-1.28c1.77-.42-5.35,1.37-3.58,1.15a33.82,33.82,0,0,0,11.06-3.18c2.65-1.28,5.31-2.77,6.63-4.26"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,244c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,256c-2.82,4.79-3.52,9.57-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,235.15c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,223.19c-2.82,4.78-3.52,9.57-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,213.28c-2.82,4.79-3.52,9.57-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,202.35c-2.82,4.79-3.52,9.57-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,193.13c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,183.22c-2.82,4.78-3.52,9.57-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,174c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,165.12c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M212.86,159.31c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M212.7,321.35c1.25,1.59.41,3.87-.42,5.23a19.53,19.53,0,0,1-5.85,6.83c-4.17,3.42-3.74,2.79-10,4.38-5.85,1.37-11.69,3.65-13,7.29"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "4px" }} />
                        <path d="M188.08,333.92c3.75-.68.4,1.54,3.74,2.45a20.12,20.12,0,0,0,4.17.69h2.09c.84,0,1.25.23,2.09-.23"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M140.43,185.28a57,57,0,0,0,10.5-1.66,42,42,0,0,0,10.67-5.17c7.33-4.83,13.67-11,20.83-16a69.9,69.9,0,0,1,19.34-8.83,43.55,43.55,0,0,1,9.5-2.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M144.43,185c5.84-2.67,10.5-7.5,15-11.83a213.61,213.61,0,0,1,18.5-16.5,78.25,78.25,0,0,1,10.67-6.84,57.18,57.18,0,0,1,10.5-4,97.57,97.57,0,0,1,13.5-2.66"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M152.77,170.62a61.74,61.74,0,0,0,7.33-5.5c2.5-2.34,4.5-4.84,6.83-7.34a47.47,47.47,0,0,1,7.17-7,53.56,53.56,0,0,1,8.33-5.16,86,86,0,0,1,18.84-7.17,62.77,62.77,0,0,1,10.83-2.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M177.93,148.12a84.36,84.36,0,0,0,7.34-8c3-3.34,7.16-5.17,11.33-6.84a61.64,61.64,0,0,1,10.83-2.83c2-.33,3.84-.17,5.84-.67"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M130.27,195.12a41.91,41.91,0,0,1,3.16-8,41.89,41.89,0,0,1,6.67-8.5,35.38,35.38,0,0,1,8.17-6,62,62,0,0,1,7.66-3.34,68.89,68.89,0,0,0,16.34-8.5"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M146.77,173.45c4.16-3.33,7.33-7.5,10.5-11.67,1.5-2,2.83-4,4.5-5.83a21,21,0,0,1,4.16-3.5,33.3,33.3,0,0,1,9-4.67,20.83,20.83,0,0,0,5.67-2"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path d="M172.1,160.45c0-2.5-.17-5.17.83-7.33.5-1.17,3.67-4.67,5-5" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M156.27,176.28A37.15,37.15,0,0,1,165.1,170a22.93,22.93,0,0,1,5.33-2.67l4-1.5c1.17-.33,2.17-.83,3.34-1.16a7.22,7.22,0,0,0,1.66-.67c1-.5,3.5-1.67,4.5-2.33"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#333", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5px" }} />
                        <path
                            d="M176.79,325.16a10.87,10.87,0,0,1,1.57-1.6,13.33,13.33,0,0,1,2.21-1.36,22.58,22.58,0,0,1,4.41-1.6,38.89,38.89,0,0,1,10.39-1.36,16.72,16.72,0,0,0,14.17-8.43,51.44,51.44,0,0,0,2.21-5.24"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M177.1,323.34a4.21,4.21,0,0,0,1.58-1.82,22.83,22.83,0,0,1,2.2-3.65,18.8,18.8,0,0,1,3.78-4.55,46.34,46.34,0,0,1,4.1-3.42,16.79,16.79,0,0,1,4.72-2.28,55.76,55.76,0,0,0,9.76-3.87,28.51,28.51,0,0,0,4.73-3,12.16,12.16,0,0,0,3.78-5.69"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M185,309.9a23.11,23.11,0,0,1,10.39-13.21c2.2-1.14,4.41-2.05,6.93-3.19a16.55,16.55,0,0,0,5.35-4.09c.63-1.14,1.58-2.28,2.21-3.42"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M182.3,282.57c2.49-1.82,6.53-2.5,9.64-3.41a44.43,44.43,0,0,0,8.09-1.83,13.87,13.87,0,0,0,3.42-1.13c1.86-.92,3.11-2.51,4.35-3.65a31.1,31.1,0,0,1,1.87-3c.93-1.14,1.55-2.5,2.48-3.41"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path
                            d="M186.63,318.27a12.36,12.36,0,0,0,1.65-2,16.36,16.36,0,0,1,2.36-2.9,31.7,31.7,0,0,1,3.78-3.42l2.13-1.54a12.87,12.87,0,0,0,1.89-1.36c1.42-.86,2.6-1.71,4-2.39"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M185.45,328.35c.47-.69,1.18-1.2,1.65-1.88l2.13-2.56a9.71,9.71,0,0,1,3.54-2.74c.94-.51,2.13-.85,3.07-1.36a8.77,8.77,0,0,1,3.07-.86"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M179.78,300c1.65.69,3.54,1.2,5.43,1.88,2.6.69,5.2,1.2,7.56,1.88,1.65.34,3.54.86,5.2,1.37.47,0,.94.17,1.65.17a2.36,2.36,0,0,1,1.18-.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M181.9,290.26a9,9,0,0,0,2.13.17,48.61,48.61,0,0,1,5,.34,67.5,67.5,0,0,0,8.27.51h5.2c.94-.17,2.83,0,3.3-.68"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M183.09,354.9c2.66-2.13,5.31-4.46,9.73-5.95a16.38,16.38,0,0,1,4.87-1.28c1.77-.42-5.35,1.37-3.58,1.15a33.82,33.82,0,0,0,11.06-3.18c2.65-1.28,5.31-2.77,6.63-4.26"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,244c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,256c-2.82,4.79-3.52,9.57-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,235.15c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,223.19c-2.82,4.78-3.52,9.57-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,213.28c-2.82,4.79-3.52,9.57-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,202.35c-2.82,4.79-3.52,9.57-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,193.13c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,183.22c-2.82,4.78-3.52,9.57-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,174c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,165.12c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path d="M212.86,159.31c-2.82,4.78-3.52,9.56-32.72,8.54" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M212.7,321.35c1.25,1.59.41,3.87-.42,5.23a19.53,19.53,0,0,1-5.85,6.83c-4.17,3.42-3.74,2.79-10,4.38-5.85,1.37-11.69,3.65-13,7.29"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3px" }} />
                        <path d="M188.08,333.92c3.75-.68.4,1.54,3.74,2.45a20.12,20.12,0,0,0,4.17.69h2.09c.84,0,1.25.23,2.09-.23"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px" }} />
                        <path
                            d="M140.43,185.28a57,57,0,0,0,10.5-1.66,42,42,0,0,0,10.67-5.17c7.33-4.83,13.67-11,20.83-16a69.9,69.9,0,0,1,19.34-8.83,43.55,43.55,0,0,1,9.5-2.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M144.43,185c5.84-2.67,10.5-7.5,15-11.83a213.61,213.61,0,0,1,18.5-16.5,78.25,78.25,0,0,1,10.67-6.84,57.18,57.18,0,0,1,10.5-4,97.57,97.57,0,0,1,13.5-2.66"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M152.77,170.62a61.74,61.74,0,0,0,7.33-5.5c2.5-2.34,4.5-4.84,6.83-7.34a47.47,47.47,0,0,1,7.17-7,53.56,53.56,0,0,1,8.33-5.16,86,86,0,0,1,18.84-7.17,62.77,62.77,0,0,1,10.83-2.17"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M177.93,148.12a84.36,84.36,0,0,0,7.34-8c3-3.34,7.16-5.17,11.33-6.84a61.64,61.64,0,0,1,10.83-2.83c2-.33,3.84-.17,5.84-.67"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M130.27,195.12a41.91,41.91,0,0,1,3.16-8,41.89,41.89,0,0,1,6.67-8.5,35.38,35.38,0,0,1,8.17-6,62,62,0,0,1,7.66-3.34,68.89,68.89,0,0,0,16.34-8.5"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M146.77,173.45c4.16-3.33,7.33-7.5,10.5-11.67,1.5-2,2.83-4,4.5-5.83a21,21,0,0,1,4.16-3.5,33.3,33.3,0,0,1,9-4.67,20.83,20.83,0,0,0,5.67-2"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path d="M172.1,160.45c0-2.5-.17-5.17.83-7.33.5-1.17,3.67-4.67,5-5" transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M156.27,176.28A37.15,37.15,0,0,1,165.1,170a22.93,22.93,0,0,1,5.33-2.67l4-1.5c1.17-.33,2.17-.83,3.34-1.16a7.22,7.22,0,0,0,1.66-.67c1-.5,3.5-1.67,4.5-2.33"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "none", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }} />
                        <path
                            d="M218.27,267.94v79.25s1.4,5.13,1.76,7.86,2.1,7.17-.36,13.66-3.16,15-4.57,15.37h.23c-1.4-.34-2.11-8.88-4.57-15.37s-.7-10.93-.35-13.66a79.34,79.34,0,0,1,1.76-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffca05" }} />
                        <path
                            d="M218.25,267.94v79.25a79.34,79.34,0,0,1,1.76,7.86c.35,2.73,2.1,7.17-.35,13.66s-3.16,15-4.56,15.37h.23c-1.4-.34-2.11-8.88-4.56-15.37s-.7-10.93-.35-13.66a80.34,80.34,0,0,1,1.75-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffca06" }} />
                        <path
                            d="M218.24,267.94v79.25a80.34,80.34,0,0,1,1.75,7.86c.35,2.73,2.1,7.17-.35,13.66s-3.15,15-4.54,15.37h.23c-1.4-.34-2.1-8.88-4.55-15.37s-.7-10.93-.35-13.66a80.34,80.34,0,0,1,1.75-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffca07" }} />
                        <path
                            d="M218.23,267.94v79.25s1.39,5.13,1.74,7.86,2.09,7.17-.35,13.66-3.14,15-4.53,15.37h.23c-1.39-.34-2.09-8.88-4.53-15.37s-.69-10.93-.35-13.66,1.74-7.86,1.74-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcb08" }} />
                        <path
                            d="M218.22,267.94v79.25s1.39,5.13,1.74,7.86,2.08,7.17-.35,13.66-3.13,15-4.52,15.37h.23c-1.39-.34-2.09-8.88-4.52-15.37s-.69-10.93-.35-13.66,1.74-7.86,1.74-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcb09" }} />
                        <path
                            d="M218.21,267.94v79.25s1.38,5.13,1.73,7.86,2.07,7.17-.35,13.66-3.12,15-4.5,15.37h.23c-1.39-.34-2.08-8.87-4.51-15.37s-.69-10.93-.34-13.66a79.28,79.28,0,0,1,1.73-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcb0a" }} />
                        <path
                            d="M218.19,267.94v79.25s1.38,5.13,1.73,7.86,2.07,7.17-.35,13.66-3.1,15-4.49,15.37h.23c-1.38-.34-2.07-8.88-4.49-15.37s-.69-10.93-.34-13.66a79.28,79.28,0,0,1,1.73-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcb0b" }} />
                        <path
                            d="M218.18,267.94v79.25a80.28,80.28,0,0,1,1.72,7.86c.34,2.73,2.06,7.17-.34,13.66s-3.1,15-4.48,15.37h.23c-1.38-.34-2.06-8.88-4.47-15.37s-.69-10.93-.35-13.66,1.72-7.86,1.72-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcb0c" }} />
                        <path
                            d="M218.17,267.94v79.25s1.37,5.13,1.71,7.86,2.06,7.17-.34,13.66-3.09,15-4.46,15.37h.23c-1.38-.34-2.06-8.87-4.46-15.37s-.69-10.93-.35-13.66,1.72-7.86,1.72-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcc0d" }} />
                        <path
                            d="M218.15,267.94v79.25s1.37,5.13,1.72,7.86,2,7.17-.35,13.66-3.08,15-4.44,15.37h.23c-1.37-.34-2.06-8.88-4.45-15.37s-.69-10.93-.34-13.66,1.71-7.86,1.71-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcc0e" }} />
                        <path
                            d="M218.14,267.94v79.25s1.37,5.13,1.71,7.86,2,7.17-.34,13.66-3.07,15-4.44,15.37h.23c-1.36-.34-2-8.88-4.43-15.37s-.68-10.93-.34-13.66,1.7-7.86,1.7-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcc0f" }} />
                        <path
                            d="M218.13,267.94v79.25s1.36,5.13,1.7,7.86,2,7.17-.34,13.66-3.06,15-4.42,15.37h.23c-1.36-.34-2-8.88-4.42-15.37s-.68-10.93-.34-13.66,1.7-7.86,1.7-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcc10" }} />
                        <path
                            d="M218.12,267.94v79.25s1.35,5.12,1.69,7.86,2,7.17-.34,13.66-3.05,15-4.4,15.37h.23c-1.36-.34-2-8.88-4.41-15.37s-.68-10.93-.34-13.66,1.69-7.86,1.69-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#fc1" }} />
                        <path
                            d="M218.1,267.94v79.25a80.21,80.21,0,0,1,1.69,7.86c.34,2.73,2,7.17-.33,13.66s-3.05,15-4.4,15.37h.23c-1.35-.34-2-8.88-4.39-15.37s-.68-10.93-.34-13.66,1.69-7.86,1.69-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcc12" }} />
                        <path
                            d="M218.09,267.94v79.25s1.35,5.13,1.69,7.86,2,7.17-.34,13.66-3,15-4.37,15.37h.22c-1.35-.34-2-8.88-4.38-15.37s-.67-10.93-.33-13.66,1.68-7.86,1.68-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcd13" }} />
                        <path
                            d="M218.08,267.94v79.25s1.34,5.13,1.68,7.86,2,7.17-.34,13.66-3,15-4.36,15.37h.23c-1.35-.34-2-8.88-4.37-15.37s-.67-10.93-.33-13.66,1.67-7.86,1.67-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcd14" }} />
                        <path
                            d="M218.07,267.94v79.25s1.34,5.13,1.67,7.86,2,7.17-.33,13.66-3,15-4.35,15.37h.22c-1.34-.34-2-8.88-4.35-15.37s-.67-10.93-.33-13.66,1.67-7.86,1.67-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcd15" }} />
                        <path
                            d="M218.05,267.94v79.25s1.34,5.13,1.67,7.86,2,7.17-.33,13.66-3,15-4.33,15.37h.22c-1.34-.34-2-8.88-4.34-15.37s-.66-10.93-.33-13.66,1.67-7.86,1.67-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcd16" }} />
                        <path
                            d="M218,267.94v79.25s1.33,5.13,1.67,7.86,2,7.17-.34,13.66-3,15-4.32,15.37h.22c-1.33-.34-2-8.88-4.31-15.37s-.67-10.93-.34-13.66,1.66-7.86,1.66-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcd17" }} />
                        <path
                            d="M218,267.94v79.25s1.33,5.13,1.66,7.86,2,7.17-.33,13.66-3,15-4.31,15.37h.22c-1.33-.34-2-8.88-4.31-15.37s-.66-10.93-.33-13.66,1.66-7.86,1.66-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffce18" }} />
                        <path
                            d="M218,267.94v79.25s1.32,5.13,1.65,7.86,2,7.17-.33,13.66-3,15-4.29,15.37h.22c-1.32-.34-2-8.88-4.29-15.37s-.66-10.93-.33-13.66,1.64-7.86,1.64-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffce19" }} />
                        <path
                            d="M218,267.94v79.25s1.31,5.13,1.64,7.86,2,7.17-.33,13.66-3,15-4.28,15.37h.22c-1.31-.34-2-8.88-4.27-15.37s-.66-10.93-.33-13.66,1.64-7.86,1.64-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffce1a" }} />
                        <path
                            d="M218,267.94v79.25s1.32,5.13,1.65,7.86,2,7.17-.33,13.66-3,15-4.27,15.37h.22c-1.31-.34-2-8.87-4.26-15.37s-.66-10.93-.33-13.66,1.64-7.86,1.64-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffce1b" }} />
                        <path
                            d="M218,267.94v79.25s1.31,5.13,1.63,7.86,2,7.17-.32,13.66-2.94,15-4.25,15.37h.22c-1.31-.34-2-8.88-4.25-15.37s-.65-10.93-.33-13.66,1.63-7.86,1.63-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffce1c" }} />
                        <path
                            d="M218,267.94v79.25s1.3,5.13,1.63,7.86,2,7.17-.33,13.66-2.93,15-4.23,15.37h.21c-1.3-.34-1.95-8.88-4.23-15.37s-.65-10.93-.33-13.66,1.63-7.86,1.63-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcf1d" }} />
                        <path
                            d="M218,267.94v79.25s1.3,5.13,1.62,7.86,1.95,7.17-.32,13.66-2.93,15-4.22,15.37h.21c-1.3-.34-1.95-8.88-4.22-15.37s-.65-10.93-.33-13.66,1.63-7.86,1.63-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcf1e" }} />
                        <path
                            d="M217.94,267.94v79.25s1.3,5.13,1.62,7.86,1.94,7.17-.32,13.66-2.91,15-4.21,15.37h.22c-1.3-.34-1.94-8.88-4.21-15.37s-.65-10.93-.32-13.66,1.61-7.86,1.61-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcf1f" }} />
                        <path
                            d="M217.93,267.94v79.25s1.29,5.13,1.62,7.86,1.93,7.17-.33,13.66-2.9,15-4.19,15.37h.22c-1.3-.34-1.94-8.88-4.2-15.37s-.64-10.93-.32-13.66,1.61-7.86,1.61-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcf20" }} />
                        <path
                            d="M217.92,267.94v79.25s1.29,5.13,1.61,7.86,1.92,7.17-.33,13.66-2.89,15-4.17,15.37h.21c-1.29-.34-1.93-8.88-4.18-15.37s-.64-10.93-.32-13.66,1.61-7.86,1.61-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcf21" }} />
                        <path
                            d="M217.91,267.94v79.25s1.28,5.13,1.6,7.86,1.92,7.17-.32,13.66-2.88,15-4.17,15.37h.22c-1.28-.34-1.92-8.88-4.17-15.37s-.64-10.93-.31-13.66,1.6-7.86,1.6-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffcf22" }} />
                        <path
                            d="M217.9,267.94v79.25s1.27,5.13,1.59,7.86,1.91,7.17-.32,13.66-2.87,15-4.15,15.37h.22c-1.28-.34-1.92-8.88-4.15-15.37s-.64-10.93-.32-13.66,1.59-7.86,1.59-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd023" }} />
                        <path
                            d="M217.88,267.94v79.25s1.27,5.13,1.59,7.86,1.91,7.17-.32,13.66-2.86,15-4.13,15.37h.21c-1.27-.34-1.91-8.88-4.14-15.37s-.63-10.93-.31-13.66,1.59-7.86,1.59-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd024" }} />
                        <path
                            d="M217.87,267.94v79.25s1.27,5.13,1.59,7.86,1.9,7.17-.32,13.66-2.86,15-4.12,15.37h.21c-1.27-.34-1.91-8.88-4.12-15.37s-.64-10.93-.32-13.66,1.58-7.86,1.58-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd025" }} />
                        <path
                            d="M217.86,267.94v79.25s1.26,5.13,1.58,7.86,1.89,7.17-.32,13.66-2.84,15-4.11,15.37h.22c-1.27-.34-1.9-8.88-4.11-15.37s-.63-10.93-.32-13.66,1.58-7.86,1.58-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd026" }} />
                        <path
                            d="M217.85,267.94v79.25s1.26,5.13,1.57,7.86,1.89,7.17-.31,13.66-2.84,15-4.1,15.37h.21c-1.26-.34-1.89-8.88-4.09-15.37s-.63-10.93-.32-13.66,1.58-7.86,1.58-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd027" }} />
                        <path
                            d="M217.83,267.94v79.25s1.26,5.13,1.57,7.86,1.88,7.17-.31,13.66-2.83,15-4.08,15.37h.21c-1.26-.34-1.89-8.88-4.08-15.37s-.63-10.93-.32-13.66,1.57-7.86,1.57-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd128" }} />
                        <path
                            d="M217.82,267.94v79.25s1.25,5.13,1.56,7.86,1.88,7.17-.31,13.66-2.81,15-4.06,15.37h.2c-1.25-.34-1.87-8.88-4.06-15.37s-.63-10.93-.31-13.66,1.56-7.86,1.56-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd129" }} />
                        <path
                            d="M217.81,267.94v79.25s1.25,5.13,1.56,7.86,1.87,7.17-.31,13.66-2.81,15-4.06,15.37h.21c-1.25-.34-1.87-8.88-4.05-15.37s-.62-10.93-.31-13.66,1.55-7.86,1.55-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd12a" }} />
                        <path
                            d="M217.79,267.94v79.25s1.25,5.13,1.56,7.86,1.86,7.17-.31,13.66-2.8,15-4,15.37h.21c-1.25-.34-1.87-8.88-4-15.37s-.62-10.93-.31-13.66,1.55-7.86,1.55-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd12b" }} />
                        <path
                            d="M217.78,267.94v79.25s1.24,5.13,1.55,7.86,1.85,7.17-.31,13.66-2.79,15-4,15.37h.21c-1.25-.34-1.86-8.88-4-15.37s-.62-10.93-.31-13.66,1.55-7.86,1.55-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd12c" }} />
                        <path
                            d="M217.77,267.94v79.25s1.23,5.13,1.54,7.86,1.85,7.17-.31,13.66-2.77,15-4,15.37h.2c-1.23-.34-1.85-8.88-4-15.37s-.62-10.93-.31-13.66,1.54-7.86,1.54-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd22d" }} />
                        <path
                            d="M217.76,267.94v79.25s1.23,5.13,1.53,7.86,1.85,7.17-.3,13.66-2.77,15-4,15.37h.21c-1.23-.34-1.85-8.88-4-15.37s-.61-10.93-.31-13.66,1.54-7.86,1.54-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd22e" }} />
                        <path
                            d="M217.75,267.94v79.25s1.22,5.13,1.53,7.86,1.83,7.17-.31,13.66-2.76,15-4,15.38h.21c-1.23-.35-1.84-8.88-4-15.38s-.61-10.93-.3-13.66,1.53-7.86,1.53-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd22f" }} />
                        <path
                            d="M217.73,267.94v79.25s1.23,5.13,1.53,7.86,1.83,7.17-.31,13.66-2.74,15-4,15.37h.2c-1.22-.34-1.83-8.88-4-15.37s-.61-10.93-.3-13.66,1.52-7.86,1.52-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd230" }} />
                        <path
                            d="M217.72,267.94v79.25s1.22,5.13,1.52,7.86,1.82,7.17-.3,13.66-2.74,15-4,15.37h.21c-1.22-.34-1.83-8.88-4-15.37s-.6-10.93-.3-13.66,1.52-7.86,1.52-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd231" }} />
                        <path
                            d="M217.71,267.94v79.25s1.21,5.13,1.52,7.86,1.81,7.17-.31,13.66-2.73,15-3.94,15.37h.2c-1.21-.34-1.81-8.88-3.93-15.37s-.61-10.93-.31-13.66,1.52-7.86,1.52-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd232" }} />
                        <path
                            d="M217.7,267.94v79.25s1.2,5.13,1.51,7.86,1.81,7.17-.31,13.66-2.71,15-3.92,15.37h.2c-1.21-.34-1.81-8.88-3.92-15.37s-.61-10.93-.31-13.66,1.51-7.86,1.51-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd333" }} />
                        <path
                            d="M217.68,267.94v79.25s1.21,5.13,1.51,7.86,1.8,7.17-.3,13.66-2.71,15-3.91,15.37h.2c-1.21-.34-1.81-8.88-3.91-15.37s-.6-10.93-.3-13.66,1.5-7.86,1.5-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd334" }} />
                        <path
                            d="M217.67,267.94v79.25s1.2,5.13,1.5,7.86,1.8,7.17-.3,13.66-2.7,15-3.89,15.37h.19c-1.19-.34-1.79-8.88-3.89-15.37s-.6-10.93-.3-13.66,1.5-7.86,1.5-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd335" }} />
                        <path
                            d="M217.66,267.94v79.25s1.19,5.13,1.49,7.86,1.79,7.17-.3,13.66-2.68,15-3.88,15.37h.2c-1.2-.34-1.79-8.88-3.88-15.37s-.6-10.93-.3-13.66,1.49-7.86,1.49-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd336" }} />
                        <path
                            d="M217.65,267.94v79.25s1.19,5.13,1.48,7.86,1.79,7.17-.29,13.66-2.68,15-3.87,15.37h.2c-1.19-.34-1.79-8.88-3.87-15.37s-.6-10.93-.3-13.66,1.49-7.86,1.49-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd337" }} />
                        <path
                            d="M217.63,267.94v79.25s1.19,5.13,1.49,7.86,1.77,7.17-.3,13.66-2.67,15-3.85,15.37h.19c-1.18-.34-1.78-8.88-3.85-15.37s-.59-10.93-.3-13.66,1.48-7.86,1.48-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd438" }} />
                        <path
                            d="M217.62,267.94v79.25s1.19,5.13,1.48,7.86,1.77,7.17-.29,13.66-2.66,15-3.84,15.37h.19c-1.18-.34-1.77-8.88-3.84-15.37s-.59-10.93-.29-13.66,1.47-7.86,1.47-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd439" }} />
                        <path
                            d="M217.61,267.94v79.25s1.18,5.13,1.47,7.86,1.77,7.17-.29,13.66-2.65,15-3.83,15.37h.2c-1.18-.34-1.77-8.88-3.83-15.37s-.59-10.93-.29-13.66,1.47-7.86,1.47-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd43a" }} />
                        <path
                            d="M217.6,267.94v79.25s1.17,5.13,1.46,7.86,1.76,7.17-.29,13.66-2.64,15-3.81,15.37h.19c-1.17-.34-1.76-8.88-3.81-15.37s-.58-10.93-.29-13.66,1.46-7.86,1.46-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd43b" }} />
                        <path
                            d="M217.58,267.94v79.25s1.17,5.13,1.47,7.86,1.75,7.17-.3,13.66-2.63,15-3.79,15.37h.19c-1.17-.34-1.75-8.88-3.8-15.37s-.58-10.93-.29-13.66,1.46-7.86,1.46-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd43c" }} />
                        <path
                            d="M217.57,267.94v79.25s1.17,5.13,1.46,7.86,1.74,7.17-.29,13.66-2.62,15-3.79,15.37h.2c-1.17-.34-1.75-8.88-3.79-15.37s-.58-10.93-.29-13.66,1.46-7.86,1.46-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd53d" }} />
                        <path
                            d="M217.56,267.94v79.25s1.16,5.13,1.45,7.86,1.74,7.17-.29,13.66-2.61,15-3.77,15.37h.19c-1.16-.34-1.74-8.88-3.77-15.37s-.58-10.93-.29-13.66,1.45-7.86,1.45-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd53e" }} />
                        <path
                            d="M217.55,267.94v79.25s1.15,5.13,1.44,7.86,1.73,7.17-.29,13.66-2.6,15-3.75,15.37h.19c-1.16-.34-1.73-8.88-3.76-15.37s-.57-10.93-.28-13.66,1.44-7.86,1.44-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd53f" }} />
                        <path
                            d="M217.54,267.94v79.25s1.15,5.13,1.43,7.86,1.73,7.17-.28,13.66-2.59,15-3.75,15.37h.2c-1.15-.34-1.73-8.88-3.74-15.37s-.58-10.93-.29-13.66,1.44-7.86,1.44-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd540" }} />
                        <path
                            d="M217.52,267.94v79.25s1.15,5.13,1.44,7.86,1.72,7.17-.29,13.66-2.58,15-3.73,15.37h.19c-1.14-.34-1.72-8.88-3.72-15.37s-.58-10.93-.29-13.66,1.43-7.86,1.43-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd541" }} />
                        <path
                            d="M217.51,267.94v79.25s1.14,5.13,1.43,7.86,1.71,7.17-.29,13.66-2.57,15-3.71,15.37h.19c-1.14-.34-1.71-8.88-3.71-15.37s-.57-10.93-.29-13.66,1.43-7.86,1.43-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd542" }} />
                        <path
                            d="M217.5,267.94v79.25s1.14,5.13,1.42,7.86,1.71,7.17-.28,13.66-2.57,15-3.7,15.37h.19c-1.14-.34-1.71-8.88-3.7-15.37s-.57-10.93-.29-13.66,1.43-7.86,1.43-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd643" }} />
                        <path
                            d="M217.49,267.94v79.25s1.13,5.13,1.41,7.86,1.7,7.17-.28,13.66-2.55,15-3.69,15.37h.19c-1.13-.34-1.7-8.88-3.68-15.37s-.57-10.93-.29-13.66,1.42-7.86,1.42-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd644" }} />
                        <path
                            d="M217.47,267.94v79.25s1.13,5.13,1.42,7.86,1.69,7.17-.29,13.66-2.54,15-3.67,15.37h.19c-1.13-.34-1.69-8.88-3.67-15.37s-.56-10.93-.28-13.66,1.41-7.86,1.41-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd645" }} />
                        <path
                            d="M217.46,267.94v79.25s1.13,5.13,1.41,7.86,1.68,7.17-.28,13.66-2.54,15-3.66,15.37h.19c-1.13-.34-1.69-8.88-3.66-15.37s-.56-10.93-.28-13.66,1.4-7.86,1.4-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd646" }} />
                        <path
                            d="M217.45,267.94v79.25s1.12,5.13,1.4,7.86,1.68,7.17-.28,13.66-2.52,15-3.64,15.37h.18c-1.12-.34-1.68-8.88-3.64-15.37s-.56-10.93-.28-13.66,1.4-7.86,1.4-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd647" }} />
                        <path
                            d="M217.44,267.94v79.25s1.11,5.13,1.39,7.86,1.68,7.17-.28,13.66-2.51,15-3.62,15.37h.18c-1.12-.34-1.67-8.88-3.63-15.37s-.55-10.93-.28-13.66,1.4-7.86,1.4-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd748" }} />
                        <path
                            d="M217.42,267.94v79.25s1.12,5.13,1.4,7.86,1.66,7.17-.28,13.66-2.51,15-3.62,15.37h.19c-1.11-.34-1.67-8.88-3.61-15.37s-.56-10.93-.28-13.66,1.39-7.86,1.39-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd749" }} />
                        <path
                            d="M217.41,267.94v79.25s1.11,5.13,1.39,7.86,1.66,7.17-.28,13.66-2.49,15-3.6,15.37h.18c-1.1-.34-1.66-8.88-3.6-15.37s-.55-10.93-.27-13.66,1.38-7.86,1.38-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd74a" }} />
                        <path
                            d="M217.4,267.94v79.25s1.1,5.13,1.38,7.86,1.65,7.17-.28,13.66-2.48,15-3.58,15.37h.18c-1.1-.34-1.65-8.88-3.58-15.37s-.56-10.93-.28-13.66,1.38-7.86,1.38-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd74b" }} />
                        <path
                            d="M217.39,267.94v79.25s1.1,5.13,1.37,7.86,1.65,7.17-.27,13.66-2.48,15-3.58,15.37h.19c-1.1-.34-1.65-8.88-3.57-15.37s-.55-10.93-.28-13.66,1.37-7.86,1.37-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd74c" }} />
                        <path
                            d="M217.37,267.94v79.25s1.1,5.13,1.37,7.86,1.64,7.17-.27,13.66-2.46,15-3.56,15.37h.18c-1.09-.34-1.64-8.88-3.55-15.37s-.55-10.93-.28-13.66,1.37-7.86,1.37-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd84d" }} />
                        <path
                            d="M217.36,267.94v79.25s1.09,5.13,1.36,7.86,1.64,7.17-.27,13.66-2.45,15-3.54,15.37h.18c-1.09-.34-1.63-8.88-3.54-15.37s-.55-10.93-.28-13.66,1.37-7.86,1.37-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd84e" }} />
                        <path
                            d="M217.35,267.94v79.25s1.09,5.13,1.36,7.86,1.62,7.17-.27,13.66-2.45,15-3.53,15.37h.18c-1.09-.34-1.63-8.88-3.53-15.37s-.54-10.93-.27-13.66,1.35-7.86,1.35-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd84f" }} />
                        <path
                            d="M217.34,267.94v79.25s1.08,5.13,1.35,7.86,1.62,7.17-.27,13.66-2.44,15-3.52,15.37h.18c-1.08-.34-1.62-8.88-3.51-15.37s-.54-10.93-.27-13.66,1.35-7.86,1.35-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd850" }} />
                        <path
                            d="M217.32,267.94v79.25s1.08,5.13,1.35,7.86,1.62,7.17-.27,13.66-2.42,15-3.5,15.37h.18c-1.08-.34-1.62-8.88-3.5-15.37s-.54-10.93-.27-13.66,1.35-7.86,1.35-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd851" }} />
                        <path
                            d="M217.31,267.94v79.25s1.08,5.13,1.34,7.86,1.61,7.17-.27,13.66-2.41,15-3.48,15.37h.18c-1.08-.34-1.61-8.88-3.49-15.37s-.53-10.93-.27-13.66,1.34-7.86,1.34-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd852" }} />
                        <path
                            d="M217.3,267.94v79.25s1.07,5.13,1.34,7.86,1.6,7.17-.27,13.66-2.41,15-3.47,15.37h.17c-1.07-.34-1.6-8.88-3.47-15.37s-.53-10.93-.27-13.66,1.34-7.86,1.34-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd953" }} />
                        <path
                            d="M217.29,267.94v79.25s1.06,5.13,1.33,7.86,1.59,7.17-.27,13.66-2.39,15-3.46,15.37h.18c-1.06-.34-1.6-8.88-3.46-15.37s-.53-10.93-.27-13.66,1.33-7.86,1.33-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd954" }} />
                        <path
                            d="M217.27,267.94v79.25s1.07,5.13,1.33,7.86,1.59,7.17-.27,13.66-2.38,15-3.44,15.37h.18c-1.07-.34-1.59-8.88-3.45-15.37s-.53-10.93-.26-13.66,1.32-7.86,1.32-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd955" }} />
                        <path
                            d="M217.26,267.94v79.25s1.06,5.13,1.32,7.86,1.58,7.17-.26,13.66-2.38,15-3.43,15.37h.17c-1.05-.34-1.58-8.88-3.43-15.37s-.53-10.93-.26-13.66,1.32-7.86,1.32-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd956" }} />
                        <path
                            d="M217.25,267.94v79.25s1.05,5.13,1.31,7.86,1.58,7.17-.26,13.66-2.37,15-3.42,15.37h.18c-1.05-.34-1.58-8.88-3.42-15.37s-.52-10.93-.26-13.66,1.31-7.86,1.31-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffd957" }} />
                        <path
                            d="M217.24,267.94v79.25s1,5.13,1.31,7.86,1.57,7.17-.26,13.66-2.36,15-3.41,15.37h.18c-1.05-.34-1.57-8.88-3.4-15.37s-.53-10.93-.27-13.66,1.31-7.86,1.31-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffda58" }} />
                        <path
                            d="M217.23,267.94v79.25s1,5.13,1.3,7.86,1.56,7.17-.26,13.66-2.35,15-3.39,15.37h.18c-1.05-.34-1.57-8.88-3.39-15.37s-.52-10.93-.27-13.66,1.31-7.86,1.31-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffda59" }} />
                        <path
                            d="M217.21,267.94v79.25s1,5.13,1.3,7.86,1.56,7.17-.26,13.66-2.34,15-3.37,15.37h.17c-1-.34-1.56-8.88-3.37-15.37s-.52-10.93-.26-13.66,1.29-7.86,1.29-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffda5a" }} />
                        <path
                            d="M217.2,267.94v79.25s1,5.13,1.29,7.86,1.55,7.17-.26,13.66-2.32,15-3.35,15.37h.17c-1-.34-1.55-8.88-3.36-15.37s-.52-10.93-.26-13.66,1.29-7.86,1.29-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffda5b" }} />
                        <path
                            d="M217.19,267.94v79.25s1,5.13,1.29,7.86,1.54,7.17-.26,13.66-2.32,15-3.35,15.37h.18c-1-.34-1.55-8.87-3.35-15.37s-.52-10.93-.26-13.66,1.29-7.86,1.29-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffda5c" }} />
                        <path
                            d="M217.18,267.94v79.25s1,5.13,1.28,7.86,1.53,7.17-.26,13.66-2.31,15-3.33,15.37H215c-1-.34-1.54-8.88-3.33-15.37s-.51-10.93-.26-13.66,1.28-7.86,1.28-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdb5d" }} />
                        <path
                            d="M217.16,267.94v79.25s1,5.13,1.28,7.86,1.53,7.17-.26,13.66-2.29,15-3.31,15.37H215c-1-.34-1.53-8.88-3.32-15.37s-.51-10.93-.26-13.66,1.28-7.86,1.28-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdb5e" }} />
                        <path
                            d="M217.15,267.94v79.25s1,5.13,1.27,7.86,1.52,7.17-.25,13.66-2.29,15-3.31,15.37H215c-1-.34-1.52-8.88-3.3-15.37s-.51-10.93-.25-13.66,1.27-7.86,1.27-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdb5f" }} />
                        <path
                            d="M217.14,267.94v79.25s1,5.13,1.27,7.86,1.51,7.17-.26,13.66-2.28,15-3.29,15.37H215c-1-.34-1.52-8.88-3.29-15.37s-.5-10.93-.25-13.66,1.26-7.86,1.26-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdb60" }} />
                        <path
                            d="M217.13,267.94v79.25s1,5.13,1.26,7.86,1.51,7.17-.26,13.66-2.27,15-3.27,15.37H215c-1-.34-1.51-8.88-3.28-15.37s-.5-10.93-.25-13.66,1.26-7.86,1.26-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdb61" }} />
                        <path
                            d="M217.11,267.94v79.25s1,5.13,1.26,7.86,1.5,7.17-.25,13.66-2.26,15-3.26,15.37H215c-1-.34-1.5-8.88-3.26-15.37s-.5-10.93-.25-13.66,1.26-7.86,1.26-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdb62" }} />
                        <path
                            d="M217.1,267.94v79.25s1,5.13,1.25,7.86,1.5,7.17-.25,13.66-2.25,15-3.25,15.37H215c-1-.34-1.5-8.88-3.25-15.37s-.5-10.93-.25-13.66,1.25-7.86,1.25-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdc63" }} />
                        <path
                            d="M217.09,267.94v79.25s1,5.13,1.24,7.86,1.49,7.17-.25,13.66-2.23,15-3.23,15.37H215c-1-.34-1.49-8.88-3.23-15.37s-.5-10.93-.25-13.66,1.24-7.86,1.24-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdc64" }} />
                        <path
                            d="M217.08,267.94v79.25s1,5.13,1.23,7.86,1.49,7.17-.24,13.66-2.23,15-3.22,15.37H215c-1-.34-1.48-8.88-3.22-15.37s-.49-10.93-.24-13.66,1.23-7.86,1.23-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdc65" }} />
                        <path
                            d="M217.06,267.94v79.25s1,5.13,1.24,7.86,1.47,7.17-.25,13.66-2.22,15-3.21,15.37H215c-1-.34-1.48-8.88-3.2-15.37s-.5-10.93-.25-13.66,1.23-7.86,1.23-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdc66" }} />
                        <path
                            d="M217.05,267.94v79.25s1,5.13,1.23,7.86,1.47,7.17-.24,13.66-2.22,15-3.19,15.37H215c-1-.34-1.47-8.88-3.19-15.37s-.49-10.93-.25-13.66,1.23-7.86,1.23-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdc67" }} />
                        <path
                            d="M217,267.94v79.25s1,5.13,1.22,7.86,1.47,7.17-.24,13.66-2.2,15-3.18,15.37H215c-1-.34-1.46-8.88-3.17-15.37s-.49-10.93-.25-13.66,1.22-7.86,1.22-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdd68" }} />
                        <path
                            d="M217,267.94v79.25s1,5.13,1.21,7.86,1.46,7.17-.24,13.66-2.19,15-3.16,15.37H215c-1-.34-1.46-8.88-3.16-15.37s-.49-10.93-.25-13.66,1.22-7.86,1.22-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdd69" }} />
                        <path
                            d="M217,267.94v79.25s1,5.13,1.22,7.86,1.45,7.17-.24,13.66-2.19,15-3.15,15.37H215c-1-.34-1.45-8.88-3.15-15.37s-.48-10.93-.24-13.66,1.21-7.86,1.21-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdd6a" }} />
                        <path
                            d="M217,267.94v79.25s1,5.13,1.21,7.86,1.44,7.17-.24,13.66-2.17,15-3.14,15.37H215c-1-.34-1.44-8.88-3.13-15.37s-.48-10.93-.24-13.66,1.2-7.86,1.2-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdd6b" }} />
                        <path
                            d="M217,267.94v79.25s1,5.13,1.2,7.86,1.44,7.17-.24,13.66-2.16,15-3.12,15.37H215c-1-.34-1.44-8.88-3.12-15.37s-.48-10.93-.24-13.66,1.2-7.86,1.2-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdd6c" }} />
                        <path
                            d="M217,267.94v79.25s1,5.13,1.19,7.86,1.44,7.17-.24,13.66-2.15,15-3.1,15.37H215c-1-.34-1.43-8.88-3.11-15.37s-.47-10.93-.24-13.66,1.2-7.86,1.2-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffde6d" }} />
                        <path
                            d="M217,267.94v79.25s1,5.13,1.19,7.86,1.43,7.17-.23,13.66-2.15,15-3.09,15.37H215c-.95-.34-1.42-8.88-3.09-15.37s-.47-10.93-.24-13.66,1.19-7.86,1.19-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffde6e" }} />
                        <path
                            d="M217,267.94v79.25s1,5.13,1.19,7.86,1.42,7.17-.24,13.66-2.13,15-3.08,15.37H215c-.95-.34-1.42-8.88-3.08-15.37s-.47-10.93-.23-13.66,1.18-7.86,1.18-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffde6f" }} />
                        <path
                            d="M216.94,267.94v79.25s.94,5.13,1.18,7.86,1.41,7.17-.24,13.66-2.12,15-3.06,15.37H215c-.95-.34-1.42-8.88-3.07-15.37s-.47-10.93-.23-13.66,1.17-7.86,1.17-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffde70" }} />
                        <path
                            d="M216.93,267.94v79.25s.94,5.13,1.17,7.86,1.41,7.17-.23,13.66-2.12,15-3.05,15.37H215c-.94-.34-1.41-8.88-3.06-15.37s-.46-10.93-.23-13.66,1.17-7.86,1.17-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffde71" }} />
                        <path
                            d="M216.92,267.94v79.25s.93,5.13,1.16,7.86,1.4,7.17-.23,13.66-2.1,15-3,15.37H215c-.93-.34-1.4-8.88-3-15.37s-.47-10.93-.24-13.66,1.17-7.86,1.17-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffde72" }} />
                        <path
                            d="M216.9,267.94v79.25s.93,5.13,1.17,7.86,1.39,7.17-.24,13.66-2.09,15-3,15.37H215c-.93-.34-1.4-8.88-3-15.37s-.47-10.93-.24-13.66,1.17-7.86,1.17-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdf73" }} />
                        <path
                            d="M216.89,267.94v79.25s.93,5.13,1.16,7.86,1.39,7.17-.23,13.66-2.08,15-3,15.37H215c-.92-.34-1.38-8.88-3-15.37s-.47-10.93-.23-13.66,1.15-7.86,1.15-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdf74" }} />
                        <path
                            d="M216.88,267.94v79.25s.92,5.13,1.15,7.86,1.38,7.17-.23,13.66-2.07,15-3,15.37H215c-.92-.34-1.38-8.88-3-15.37s-.46-10.93-.23-13.66,1.15-7.86,1.15-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdf75" }} />
                        <path
                            d="M216.87,267.94v79.25s.91,5.13,1.14,7.86,1.38,7.17-.23,13.66-2.06,15-3,15.37H215c-.91-.34-1.37-8.88-3-15.37s-.46-10.93-.23-13.66,1.14-7.86,1.14-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdf76" }} />
                        <path
                            d="M216.85,267.94v79.25s.92,5.13,1.15,7.86,1.36,7.17-.23,13.66-2.06,15-3,15.37H215c-.91-.34-1.36-8.88-3-15.37s-.46-10.93-.23-13.66,1.14-7.86,1.14-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffdf77" }} />
                        <path
                            d="M216.84,267.94v79.25s.91,5.13,1.14,7.86,1.36,7.17-.23,13.66-2,15-2.95,15.37H215c-.91-.34-1.36-8.88-2.95-15.37s-.45-10.93-.23-13.66,1.14-7.86,1.14-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe078" }} />
                        <path
                            d="M216.83,267.94v79.25s.9,5.13,1.13,7.86,1.35,7.17-.23,13.66-2,15-2.93,15.37H215c-.91-.34-1.36-8.88-2.94-15.37s-.45-10.93-.23-13.66,1.13-7.86,1.13-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe079" }} />
                        <path
                            d="M216.82,267.94v79.25s.9,5.13,1.12,7.86,1.35,7.17-.22,13.66-2,15-2.93,15.37h.15c-.9-.34-1.35-8.88-2.92-15.37s-.45-10.93-.23-13.66,1.13-7.86,1.13-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe07a" }} />
                        <path
                            d="M216.8,267.94v79.25s.9,5.13,1.12,7.86,1.34,7.17-.22,13.66-2,15-2.91,15.37h.15c-.9-.34-1.34-8.88-2.91-15.37s-.44-10.93-.22-13.66,1.11-7.86,1.11-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe07b" }} />
                        <path
                            d="M216.79,267.94v79.25s.89,5.13,1.11,7.86,1.34,7.17-.22,13.66-2,15-2.89,15.37h.15c-.9-.34-1.34-8.88-2.9-15.37s-.44-10.93-.22-13.66,1.11-7.86,1.11-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe07c" }} />
                        <path
                            d="M216.78,267.94v79.25s.89,5.13,1.11,7.86,1.33,7.17-.23,13.66-2,15-2.87,15.37h.14c-.89-.34-1.33-8.88-2.88-15.37s-.44-10.93-.22-13.66,1.11-7.86,1.11-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe17d" }} />
                        <path
                            d="M216.77,267.94v79.25s.88,5.13,1.1,7.86,1.32,7.17-.22,13.66-2,15-2.87,15.37h.15c-.88-.34-1.32-8.88-2.86-15.37s-.45-10.93-.23-13.66,1.11-7.86,1.11-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe17e" }} />
                        <path
                            d="M216.75,267.94v79.25s.88,5.13,1.1,7.86,1.32,7.17-.22,13.66-2,15-2.85,15.37h.15c-.88-.34-1.32-8.88-2.86-15.37s-.43-10.93-.22-13.66,1.1-7.86,1.1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe17f" }} />
                        <path
                            d="M216.74,267.94v79.25s.88,5.13,1.09,7.86,1.31,7.17-.21,13.66-2,15-2.84,15.37h.14c-.87-.34-1.31-8.88-2.83-15.37s-.44-10.93-.22-13.66,1.09-7.86,1.09-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe180" }} />
                        <path
                            d="M216.73,267.94v79.25s.87,5.13,1.09,7.86,1.3,7.17-.22,13.66-2,15-2.83,15.37h.15c-.87-.34-1.3-8.88-2.82-15.37s-.44-10.93-.22-13.66,1.08-7.86,1.08-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe181" }} />
                        <path
                            d="M216.72,267.94v79.25s.86,5.13,1.08,7.86,1.29,7.17-.22,13.66-1.94,15-2.81,15.37h.15c-.87-.34-1.3-8.88-2.81-15.37s-.44-10.93-.22-13.66,1.08-7.86,1.08-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe182" }} />
                        <path
                            d="M216.71,267.94v79.25s.86,5.13,1.07,7.86,1.29,7.17-.21,13.66-1.94,15-2.8,15.37h.14c-.86-.34-1.29-8.88-2.79-15.37s-.43-10.93-.22-13.66,1.08-7.86,1.08-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe283" }} />
                        <path
                            d="M216.69,267.94v79.25s.86,5.13,1.07,7.86,1.28,7.17-.21,13.66-1.93,15-2.78,15.37h.14c-.85-.34-1.28-8.88-2.78-15.37s-.43-10.93-.22-13.66,1.07-7.86,1.07-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe284" }} />
                        <path
                            d="M216.68,267.94v79.25s.85,5.13,1.07,7.86,1.27,7.17-.22,13.66-1.92,15-2.77,15.37h.15c-.86-.34-1.28-8.88-2.77-15.37s-.43-10.93-.22-13.66,1.07-7.86,1.07-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe285" }} />
                        <path
                            d="M216.67,267.94v79.25s.85,5.13,1.06,7.86,1.27,7.17-.21,13.66-1.91,15-2.76,15.37h.15c-.85-.34-1.28-8.88-2.76-15.37s-.42-10.93-.21-13.66,1.06-7.86,1.06-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe286" }} />
                        <path
                            d="M216.65,267.94v79.25s.85,5.13,1.06,7.86,1.26,7.17-.21,13.66-1.9,15-2.74,15.37h.14c-.84-.34-1.26-8.88-2.74-15.37s-.42-10.93-.21-13.66,1.05-7.86,1.05-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe287" }} />
                        <path
                            d="M216.64,267.94v79.25s.84,5.13,1.05,7.86,1.26,7.17-.21,13.66-1.89,15-2.72,15.37h.14c-.84-.34-1.26-8.88-2.73-15.37s-.42-10.93-.21-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe388" }} />
                        <path
                            d="M216.63,267.94v79.25s.83,5.13,1,7.86,1.25,7.17-.21,13.66-1.87,15-2.7,15.37h.14c-.84-.34-1.26-8.88-2.72-15.37s-.41-10.93-.2-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe389" }} />
                        <path
                            d="M216.62,267.94v79.25s.83,5.13,1,7.86,1.24,7.17-.21,13.66-1.87,15-2.7,15.37h.14c-.83-.34-1.24-8.88-2.69-15.37s-.42-10.93-.21-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe38a" }} />
                        <path
                            d="M216.6,267.94v79.25s.83,5.13,1,7.86,1.23,7.17-.21,13.66-1.86,15-2.68,15.37h.14c-.83-.34-1.24-8.88-2.69-15.37s-.41-10.93-.2-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe38b" }} />
                        <path
                            d="M216.59,267.94v79.25s.82,5.13,1,7.86,1.23,7.17-.21,13.66-1.84,15-2.66,15.37h.13c-.82-.34-1.23-8.88-2.66-15.37s-.42-10.93-.21-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe38c" }} />
                        <path
                            d="M216.58,267.94v79.25s.82,5.13,1,7.86,1.23,7.17-.2,13.66-1.84,15-2.66,15.37h.14c-.82-.34-1.22-8.88-2.65-15.37s-.41-10.93-.21-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe48d" }} />
                        <path
                            d="M216.57,267.94v79.25s.81,5.13,1,7.86,1.21,7.17-.21,13.66-1.83,15-2.64,15.37h.14c-.82-.34-1.22-8.88-2.64-15.37s-.41-10.93-.21-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe48e" }} />
                        <path
                            d="M216.56,267.94v79.25s.81,5.13,1,7.86,1.21,7.17-.2,13.66-1.82,15-2.63,15.37h.14c-.82-.34-1.22-8.88-2.63-15.37s-.41-10.93-.2-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe48f" }} />
                        <path
                            d="M216.54,267.94v79.25s.81,5.13,1,7.86,1.2,7.17-.2,13.66-1.81,15-2.61,15.37h.13c-.8-.34-1.21-8.88-2.61-15.37s-.4-10.93-.2-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe490" }} />
                        <path
                            d="M216.53,267.94v79.25s.8,5.13,1,7.86,1.2,7.17-.2,13.66-1.8,15-2.6,15.37h.14c-.8-.34-1.2-8.88-2.6-15.37s-.4-10.93-.2-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe491" }} />
                        <path
                            d="M216.52,267.94v79.25s.8,5.13,1,7.86,1.2,7.17-.19,13.66-1.79,15-2.59,15.37h.13c-.79-.34-1.19-8.88-2.58-15.37s-.4-10.93-.2-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe492" }} />
                        <path
                            d="M216.51,267.94v79.25s.79,5.13,1,7.86,1.18,7.17-.2,13.66-1.78,15-2.57,15.37h.13c-.79-.34-1.19-8.88-2.57-15.37s-.39-10.93-.2-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe593" }} />
                        <path
                            d="M216.49,267.94v79.25s.79,5.13,1,7.86,1.18,7.17-.2,13.66-1.77,15-2.55,15.37h.13c-.79-.34-1.18-8.88-2.56-15.37s-.39-10.93-.2-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe594" }} />
                        <path
                            d="M216.48,267.94v79.25s.78,5.13,1,7.86,1.17,7.17-.2,13.66-1.76,15-2.54,15.37h.13c-.78-.34-1.17-8.88-2.54-15.37s-.39-10.93-.19-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe595" }} />
                        <path
                            d="M216.47,267.94v79.25s.78,5.13,1,7.86,1.17,7.17-.19,13.66-1.75,15-2.53,15.37h.13c-.78-.34-1.17-8.88-2.52-15.37s-.39-10.93-.2-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe596" }} />
                        <path
                            d="M216.46,267.94v79.25s.77,5.13,1,7.86,1.16,7.17-.19,13.66-1.74,15-2.51,15.37h.13c-.77-.34-1.16-8.88-2.52-15.37s-.38-10.93-.19-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe597" }} />
                        <path
                            d="M216.45,267.94v79.25s.77,5.13,1,7.86,1.15,7.17-.19,13.66-1.73,15-2.5,15.37h.12c-.77-.34-1.15-8.88-2.49-15.37s-.39-10.93-.2-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe698" }} />
                        <path
                            d="M216.43,267.94v79.25s.77,5.13,1,7.86,1.15,7.17-.19,13.66-1.72,15-2.49,15.37h.13c-.76-.34-1.14-8.88-2.48-15.37s-.38-10.93-.19-13.66,1-7.86,1-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe699" }} />
                        <path
                            d="M216.42,267.94v79.25s.76,5.13,1,7.86,1.14,7.17-.19,13.66-1.71,15-2.47,15.37h.13c-.76-.34-1.14-8.88-2.47-15.37s-.38-10.93-.19-13.66.95-7.86.95-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe69a" }} />
                        <path
                            d="M216.41,267.94v79.25s.75,5.13.94,7.86,1.14,7.17-.19,13.66-1.7,15-2.45,15.37h.12c-.75-.34-1.13-8.88-2.45-15.37s-.38-10.93-.19-13.66.94-7.86.94-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe69b" }} />
                        <path
                            d="M216.4,267.94v79.25s.75,5.13.94,7.86,1.12,7.17-.19,13.66-1.69,15-2.44,15.37h.12c-.75-.34-1.13-8.88-2.44-15.37s-.38-10.93-.19-13.66.94-7.86.94-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe69c" }} />
                        <path
                            d="M216.38,267.94v79.25s.75,5.13.94,7.86,1.12,7.17-.19,13.66-1.68,15-2.43,15.37h.13c-.75-.34-1.12-8.88-2.43-15.37s-.37-10.93-.19-13.66.93-7.86.93-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe79d" }} />
                        <path
                            d="M216.37,267.94v79.25s.74,5.13.93,7.86,1.11,7.17-.19,13.66-1.67,15-2.41,15.37h.12c-.74-.34-1.11-8.88-2.41-15.37s-.37-10.93-.19-13.66.93-7.86.93-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe79e" }} />
                        <path
                            d="M216.36,267.94v79.25s.74,5.13.92,7.86,1.11,7.17-.18,13.66-1.67,15-2.4,15.37h.12c-.74-.34-1.11-8.88-2.4-15.37s-.37-10.93-.19-13.66.93-7.86.93-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe79f" }} />
                        <path
                            d="M216.35,267.94v79.25s.73,5.13.91,7.86,1.1,7.17-.18,13.66-1.65,15-2.39,15.37h.13c-.74-.34-1.11-8.88-2.39-15.37s-.37-10.93-.19-13.66.92-7.86.92-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe7a0" }} />
                        <path
                            d="M216.33,267.94v79.25s.73,5.13.92,7.86,1.09,7.17-.19,13.66-1.64,15-2.37,15.37h.12c-.73-.34-1.09-8.88-2.37-15.37s-.36-10.93-.18-13.66.91-7.86.91-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe7a1" }} />
                        <path
                            d="M216.32,267.94v79.25s.73,5.13.91,7.86,1.09,7.17-.18,13.66-1.64,15-2.36,15.37h.12c-.73-.34-1.09-8.88-2.36-15.37s-.36-10.93-.18-13.66.91-7.86.91-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe7a2" }} />
                        <path
                            d="M216.31,267.94v79.25s.72,5.13.9,7.86,1.08,7.17-.18,13.66-1.62,15-2.34,15.37h.12c-.72-.34-1.09-8.88-2.35-15.37s-.36-10.93-.18-13.66.9-7.86.9-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe8a3" }} />
                        <path
                            d="M216.29,267.94v79.25s.72,5.13.9,7.86,1.08,7.17-.18,13.66-1.61,15-2.33,15.37h.12c-.71-.34-1.07-8.88-2.33-15.37s-.35-10.93-.18-13.66.9-7.86.9-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe8a4" }} />
                        <path
                            d="M216.28,267.94v79.25s.72,5.13.9,7.86,1.06,7.17-.18,13.66-1.61,15-2.32,15.37h.12c-.71-.34-1.07-8.88-2.31-15.37s-.36-10.93-.18-13.66.89-7.86.89-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe8a5" }} />
                        <path
                            d="M216.27,267.94v79.25s.71,5.13.89,7.86,1.06,7.17-.18,13.66-1.59,15-2.3,15.37h.12c-.71-.34-1.07-8.88-2.3-15.37s-.36-10.93-.18-13.66.88-7.86.88-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe8a6" }} />
                        <path
                            d="M216.26,267.94v79.25s.7,5.13.88,7.86,1.05,7.17-.18,13.66-1.58,15-2.28,15.37h.11c-.7-.34-1-8.88-2.28-15.37s-.36-10.93-.18-13.66.88-7.86.88-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe8a7" }} />
                        <path
                            d="M216.25,267.94v79.25s.7,5.13.87,7.86,1,7.17-.17,13.66-1.58,15-2.28,15.37h.12c-.7-.34-1-8.88-2.27-15.37s-.35-10.93-.18-13.66.88-7.86.88-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe9a8" }} />
                        <path
                            d="M216.23,267.94v79.25s.7,5.13.87,7.86,1,7.17-.17,13.66-1.56,15-2.26,15.37h.12c-.7-.34-1-8.88-2.26-15.37s-.35-10.93-.18-13.66.87-7.86.87-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe9a9" }} />
                        <path
                            d="M216.22,267.94v79.25s.69,5.13.87,7.86,1,7.17-.18,13.66-1.55,15-2.24,15.37h.11c-.69-.34-1-8.88-2.24-15.37s-.35-10.93-.17-13.66.86-7.86.86-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe9aa" }} />
                        <path
                            d="M216.21,267.94v79.25s.69,5.13.86,7.86,1,7.17-.17,13.66-1.55,15-2.23,15.37h.11c-.69-.34-1-8.88-2.23-15.37s-.34-10.93-.17-13.66.86-7.86.86-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe9ab" }} />
                        <path
                            d="M216.2,267.94v79.25s.68,5.13.85,7.86,1,7.17-.17,13.66-1.54,15-2.22,15.37h.12c-.69-.34-1-8.88-2.22-15.37s-.34-10.93-.17-13.66.85-7.86.85-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffe9ac" }} />
                        <path
                            d="M216.18,267.94v79.25s.68,5.13.85,7.86,1,7.17-.17,13.66-1.52,15-2.2,15.37h.11c-.67-.34-1-8.88-2.2-15.37s-.34-10.93-.17-13.66.85-7.86.85-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffeaad" }} />
                        <path
                            d="M216.17,267.94v79.25s.68,5.13.85,7.86,1,7.17-.17,13.66-1.52,15-2.19,15.37h.11c-.68-.34-1-8.88-2.19-15.37s-.34-10.93-.17-13.66.84-7.86.84-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffeaae" }} />
                        <path
                            d="M216.16,267.94v79.25s.67,5.13.84,7.86,1,7.17-.17,13.66-1.51,15-2.17,15.37h.11c-.67-.34-1-8.88-2.18-15.37s-.33-10.93-.16-13.66.83-7.86.83-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffeaaf" }} />
                        <path
                            d="M216.15,267.94v79.25s.66,5.13.83,7.86,1,7.17-.17,13.66-1.49,15-2.16,15.37h.11c-.66-.34-1-8.88-2.16-15.37s-.33-10.93-.16-13.66.83-7.86.83-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffeab0" }} />
                        <path
                            d="M216.13,267.94v79.25s.67,5.13.83,7.86,1,7.17-.16,13.66-1.49,15-2.15,15.37h.11c-.66-.34-1-8.88-2.15-15.37s-.33-10.93-.16-13.66.82-7.86.82-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffeab1" }} />
                        <path
                            d="M216.12,267.94v79.25s.66,5.13.82,7.86,1,7.17-.16,13.66-1.48,15-2.13,15.37h.11c-.66-.34-1-8.88-2.14-15.37s-.32-10.93-.16-13.66.82-7.86.82-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffeab2" }} />
                        <path
                            d="M216.11,267.94v79.25s.65,5.13.81,7.86,1,7.17-.16,13.66-1.47,15-2.12,15.37h.11c-.65-.34-1-8.88-2.11-15.37s-.33-10.93-.17-13.66.82-7.86.82-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffebb3" }} />
                        <path
                            d="M216.1,267.94v79.25s.65,5.13.81,7.86,1,7.17-.16,13.66-1.46,15-2.11,15.37h.11c-.65-.34-1-8.88-2.1-15.37s-.33-10.93-.17-13.66.81-7.86.81-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffebb4" }} />
                        <path
                            d="M216.09,267.94v79.25s.64,5.13.8,7.86,1,7.17-.16,13.66-1.45,15-2.09,15.37h.11c-.65-.34-1-8.88-2.09-15.37s-.32-10.93-.16-13.66.8-7.86.8-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffebb5" }} />
                        <path
                            d="M216.07,267.94v79.25s.64,5.13.8,7.86,1,7.17-.16,13.66-1.44,15-2.07,15.37h.1c-.64-.34-1-8.88-2.07-15.37s-.32-10.93-.16-13.66.8-7.86.8-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffebb6" }} />
                        <path
                            d="M216.06,267.94v79.25s.64,5.13.79,7.86,1,7.17-.15,13.66-1.43,15-2.07,15.37h.11c-.64-.34-1-8.88-2.06-15.37s-.32-10.93-.16-13.66.79-7.86.79-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffebb7" }} />
                        <path
                            d="M216.05,267.94v79.25s.63,5.13.79,7.86.94,7.17-.16,13.66-1.42,15-2.05,15.37h.11c-.63-.34-1-8.88-2.05-15.37s-.31-10.93-.16-13.66.79-7.86.79-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffecb8" }} />
                        <path
                            d="M216,267.94v79.25s.62,5.13.78,7.86.94,7.17-.16,13.66-1.41,15-2,15.37h.1c-.62-.34-.94-8.88-2-15.37s-.31-10.93-.16-13.66.79-7.86.79-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffecb9" }} />
                        <path
                            d="M216,267.94v79.25s.63,5.13.78,7.86a49.91,49.91,0,0,1-.15,13.66c-1.09,6.49-1.4,15-2,15.37h.1c-.62-.34-.93-8.88-2-15.37s-.31-10.93-.15-13.66.77-7.86.77-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffecba" }} />
                        <path
                            d="M216,267.94v79.25s.62,5.13.77,7.86a49.91,49.91,0,0,1-.15,13.66c-1.08,6.49-1.39,15-2,15.37h.11c-.62-.34-.93-8.88-2-15.37a49.91,49.91,0,0,1-.15-13.66c.15-2.73.77-7.86.77-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffecbb" }} />
                        <path
                            d="M216,267.94v79.25s.61,5.13.77,7.86.91,7.17-.16,13.66-1.38,15-2,15.37h.11c-.62-.34-.92-8.88-2-15.37s-.31-10.93-.16-13.66.77-7.86.77-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffecbc" }} />
                        <path
                            d="M216,267.94v79.25s.6,5.13.76,7.86.91,7.17-.15,13.66-1.37,15-2,15.37h.1c-.61-.34-.91-8.88-2-15.37s-.3-10.93-.15-13.66.76-7.86.76-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffedbd" }} />
                        <path
                            d="M216,267.94v79.25s.6,5.13.75,7.86.91,7.17-.15,13.66-1.36,15-2,15.37h.1c-.61-.34-.91-8.88-2-15.37a50.75,50.75,0,0,1-.15-13.66c.15-2.73.75-7.86.75-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffedbe" }} />
                        <path
                            d="M216,267.94v79.25s.6,5.13.75,7.86a51.62,51.62,0,0,1-.15,13.66c-1.05,6.49-1.35,15-1.95,15.37h.11c-.61-.34-.9-8.88-1.95-15.37a51.62,51.62,0,0,1-.15-13.66c.15-2.73.75-7.86.75-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffedbf" }} />
                        <path
                            d="M216,267.94v79.25s.59,5.13.74,7.86a51.94,51.94,0,0,1-.14,13.66c-1.05,6.49-1.34,15-1.94,15.37h.1c-.59-.34-.89-8.88-1.93-15.37a51.62,51.62,0,0,1-.15-13.66c.15-2.73.74-7.86.74-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffedc0" }} />
                        <path
                            d="M215.94,267.94v79.25s.59,5.13.74,7.86a53,53,0,0,1-.15,13.66c-1,6.49-1.33,15-1.92,15.37h.1c-.59-.34-.89-8.88-1.92-15.37a52.52,52.52,0,0,1-.15-13.66c.15-2.73.74-7.86.74-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffedc1" }} />
                        <path
                            d="M215.92,267.94v79.25s.59,5.13.74,7.86a53,53,0,0,1-.15,13.66c-1,6.49-1.32,15-1.9,15.37h.09c-.58-.34-.88-8.88-1.9-15.37a52.52,52.52,0,0,1-.15-13.66c.15-2.73.73-7.86.73-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffedc2" }} />
                        <path
                            d="M215.91,267.94v79.25s.59,5.13.73,7.86a53.32,53.32,0,0,1-.14,13.66c-1,6.49-1.32,15-1.9,15.37h.1c-.58-.34-.87-8.88-1.89-15.37a53.45,53.45,0,0,1-.15-13.66c.15-2.73.73-7.86.73-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffeec3" }} />
                        <path
                            d="M215.9,267.94v79.25s.58,5.13.72,7.86a53.32,53.32,0,0,1-.14,13.66c-1,6.49-1.3,15-1.88,15.37h.1c-.58-.34-.87-8.88-1.88-15.37a53.93,53.93,0,0,1-.15-13.66c.15-2.73.73-7.86.73-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffeec4" }} />
                        <path
                            d="M215.89,267.94v79.25s.57,5.13.72,7.86a54.42,54.42,0,0,1-.15,13.66c-1,6.49-1.29,15-1.86,15.37h.09c-.57-.34-.86-8.88-1.86-15.37a53.8,53.8,0,0,1-.14-13.66c.14-2.73.71-7.86.71-7.86V267.94"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#ffeec5" }} />
                        <path d="M211.35,108.18V266.92c0,2.07,1.73,9.22,3.87,9.22s3.87-7.15,3.87-9.22V108.18a3.87,3.87,0,0,0-7.74,0Z"
                            transform="translate(-31.03 -18.52)"
                            style={{ fill: "#ffca05", stroke: "#ffca05", strokeLinecap: "round", strokeLinejoin: "round" }} />
                    </g>
                    <g id="Vertebrae_Background">
                        <path d="M218.14,389.89h-1.49a2,2,0,0,0-1.34-.16h-.44a2,2,0,0,0-1.34.16H212a1.81,1.81,0,0,1-1.34,0c-.21-.15-.41-.23-.57-.34a1.48,1.48,0,0,0-.32,1c0,.81.59,1.14,1.19,1.63a1,1,0,0,1,.74,1c0,.33-.15.82.3,1.15.15.16.59,0,.89.16a1.12,1.12,0,0,1,.6,1.15c0,.32-.15.81,0,1.14.15.49.59.49.59,1.15,0,.49-.15.65,0,1a1.23,1.23,0,0,0,.6.65.47.47,0,0,0,.37.16.46.46,0,0,0,.37-.16,1.23,1.23,0,0,0,.6-.65c.15-.33,0-.49,0-1,0-.66.45-.66.59-1.15.15-.33,0-.82,0-1.14a1.12,1.12,0,0,1,.6-1.15c.3-.16.74,0,.89-.16.45-.33.3-.82.3-1.15a1,1,0,0,1,.75-1c.59-.49,1.19-.81,1.19-1.63a1.48,1.48,0,0,0-.33-1c-.16.11-.36.19-.56.34A1.84,1.84,0,0,1,218.14,389.89Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M221.31,379.28c-1.05,2.89-10,2.89-12.25-.11-2.62-3.52-1.63-6-9.92-.72a3.75,3.75,0,0,0,2.32,1.63c1.19.33,1.64,1.47,2.24,2.62.44,1.15.74,2.62,2.08,2.94a19.45,19.45,0,0,0,2.53.66,2.54,2.54,0,0,1,1.49,2.61c0,.66.45.66.89,1a1.84,1.84,0,0,0,1.35,0h1.48a2,2,0,0,1,1.34-.16h.45a2,2,0,0,1,1.34.16h1.49a1.81,1.81,0,0,0,1.34,0c.45-.32.9-.32.9-1a2.53,2.53,0,0,1,1.48-2.61,19.57,19.57,0,0,0,2.54-.66c1.34-.32,1.63-1.8,2.08-2.94.6-1.15,1-2.29,2.23-2.62a3.79,3.79,0,0,0,2.33-1.63C226.46,375.39,223.2,373.17,221.31,379.28Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M234.81,369.91c-5.32-3.65-9-3.14-12.87,2.81-1.53,2.36-13.05,2.63-14,0-2-5.55-4.94-5.78-12.55-2.77,0,.49.74,1,1,1.47a8,8,0,0,0,1,1.15,5.59,5.59,0,0,1,1.49,2.78v1.31c0,.49-.15.82,0,1.14a2,2,0,0,0,.21.66c8.29-5.28,7.3-2.8,9.92.72,2.23,3,11.2,3,12.25.11,1.89-6.11,5.15-3.89,9.73-.83a1.76,1.76,0,0,0,.2-.66c.15-.32,0-.65,0-1.14v-1.31a5.67,5.67,0,0,1,1.49-2.78,6.6,6.6,0,0,0,1-1.15c.3-.49,1-1,1-1.47v0Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M235.27,362.75a.88.88,0,0,1,0-.16c-6.24-4.57-9.29-5.29-12.09-.66-2.41,4-14.34,4.22-16.21-.24-2.65-6.3-7.33.3-11.81,1.5a5.22,5.22,0,0,1,.33.54A12.68,12.68,0,0,1,196,367a5.24,5.24,0,0,1-.14,1.47,5.52,5.52,0,0,0-.45,1.47c7.61-3,10.51-2.78,12.55,2.77,1,2.64,12.5,2.37,14,0,3.85-6,7.55-6.46,12.87-2.81h0a5.67,5.67,0,0,0-.44-1.44,4.9,4.9,0,0,1-.15-1.47,12.27,12.27,0,0,1,.45-3.27C234.82,363.4,235.12,363.07,235.27,362.75Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M220.29,352.53c-1.84,3.17-8.46,3.2-10.34.06-4.73-7.92-5.79-4.77-16.53,2.31a17.28,17.28,0,0,0,.15,2.78,7.39,7.39,0,0,0,.75,2.61c.15.49.29,1,.44,1.48,0,.32.15.65.15,1a4.37,4.37,0,0,0,.27.44c4.48-1.2,9.16-7.8,11.81-1.5,1.87,4.46,13.8,4.24,16.21.24,2.8-4.63,5.85-3.91,12.09.66a7.72,7.72,0,0,0,.12-.82l.45-1.48a7.38,7.38,0,0,0,.74-2.61,17.28,17.28,0,0,0,.15-2.78C226.69,346.72,225,344.48,220.29,352.53Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M237.5,348.52a19.31,19.31,0,0,0,.15-2.94,5.76,5.76,0,0,0-1.34-3.44c-.45-.82-1.19-2.12-2.24-2.29s-1.63.66-2.23,1.47c-.3.49-.45.17-.89.17-.45-.17-1.35,0-1.49-.49-.3-.33-.15-1-.3-1.47-.15-.33-.3-.82-.75-1a2.11,2.11,0,0,0-1.93.49l-11.32-3.21L203.7,339a2.13,2.13,0,0,0-1.94-.49c-.45.17-.59.66-.74,1-.15.49,0,1.14-.3,1.47-.15.49-1,.32-1.49.49-.44,0-.59.32-.89-.17-.6-.81-1.19-1.63-2.23-1.47s-1.79,1.47-2.24,2.29a5.76,5.76,0,0,0-1.34,3.44,19.31,19.31,0,0,0,.15,2.94c.15,1.14.3,2.45.45,3.6a18.73,18.73,0,0,1,.29,2.78c10.74-7.08,11.8-10.23,16.53-2.31,1.88,3.14,8.5,3.11,10.34-.06,4.69-8,6.4-5.81,16.46,2.37a17.5,17.5,0,0,1,.3-2.78C237.2,351,237.35,349.66,237.5,348.52Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M214.2,341.43h.33c.64,0,.8-.35,1.12-.89.17-.35.17-.88.33-1.24.48-.53,1.77-.35,2.42-.17a4,4,0,0,1,1.77,1.24c.32.7.16,1.06.32,1.59a2.62,2.62,0,0,0,2.58,1.77,3.88,3.88,0,0,0,2.42-1.06,5,5,0,0,0,1.94-3.19c0-.53.16-.71-.16-1.06a.9.9,0,0,0-.65-.18c-.48-.36-.64-.89-.16-1.24.8-.71,1.94,0,2.58.18a3.41,3.41,0,0,0,3.55-.89,18.31,18.31,0,0,0,1.45-2,5.38,5.38,0,0,0,.16-1.59,3.42,3.42,0,0,0-2.1-2.84,3.35,3.35,0,0,0-2.9,0c-.32.36-.8.53-1.13.89-.48.18-1.45.53-1.77,0a3.23,3.23,0,0,1,0-1.24,3.71,3.71,0,0,1,.64-1.42c.33-.71,0-1.06-.16-1.77a1.94,1.94,0,0,0-1.13-1.42c-.8-.18-1.77.89-2.25,1.42H205.28c-.49-.53-1.46-1.6-2.26-1.42a1.94,1.94,0,0,0-1.13,1.42c-.16.71-.48,1.06-.16,1.77a3.71,3.71,0,0,1,.64,1.42c0,.35.17.88,0,1.24-.32.53-1.29.18-1.77,0-.32-.36-.81-.53-1.13-.89a3.35,3.35,0,0,0-2.9,0,3.42,3.42,0,0,0-2.1,2.84,5.38,5.38,0,0,0,.16,1.59,19.78,19.78,0,0,0,1.45,2,3.41,3.41,0,0,0,3.55.89c.65-.18,1.78-.89,2.58-.18.49.35.33.89-.16,1.24a.88.88,0,0,0-.64.18c-.33.35-.17.53-.17,1.06a5,5,0,0,0,1.94,3.19,3.9,3.9,0,0,0,2.42,1.06,2.6,2.6,0,0,0,2.58-1.77c.16-.53,0-.89.32-1.59a4,4,0,0,1,1.78-1.24c.64-.18,1.93-.36,2.42.17.16.36.16.89.32,1.24.32.53.48.89,1.13.89h0Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M215.17,328.49c.32-.7.16-1.94,1.29-1.41,1,.53,1.29,2.12,2.26,2.66a4.91,4.91,0,0,0,2.74,0c.65-.18,1.45-1.25,1.94-1.78.48-.7,1.29-1.41,1.45-2.3,0-.89-1.29-3,.32-3.19.48,0,1.13.36,1.45.36a6.61,6.61,0,0,0,1.78.35,1.14,1.14,0,0,0,1.29,0c.32-.18.64-.71,1-.89,1-.53,2.1-.35,2.42-1.59.16-.53.16-1.06.33-1.6a6.26,6.26,0,0,0-.17-1.77,2.74,2.74,0,0,0-2.9-1.24,5.83,5.83,0,0,1-2.42.36c-1.13-.18-1.45-1.6-1.93-2.48s-1-2.31-1.94-2.66a1.74,1.74,0,0,0-2.1.71H206.73a1.73,1.73,0,0,0-2.1-.71c-1,.35-1.45,1.77-1.93,2.66s-.81,2.3-1.94,2.48a5.83,5.83,0,0,1-2.42-.36,2.74,2.74,0,0,0-2.9,1.24,6.64,6.64,0,0,0-.16,1.77c.16.54.16,1.07.32,1.6.32,1.24,1.45,1.06,2.42,1.59.32.18.64.71,1,.89a1.15,1.15,0,0,0,1.3,0,6.61,6.61,0,0,0,1.77-.35c.32,0,1-.36,1.45-.36,1.61.18.32,2.3.32,3.19.16.89,1,1.6,1.45,2.3.49.53,1.29,1.6,1.94,1.78a4.91,4.91,0,0,0,2.74,0c1-.54,1.29-2.13,2.26-2.66,1.13-.53,1,.71,1.29,1.41a1.78,1.78,0,0,0,.8,1.07c.33,0,.81-.53.65-.53Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M213.56,316.62c.48,0,1.61.18,2.26-.35.32-.36.16-1.06.8-1.24.49-.18,1,.53,1.3.88.48.36,1,.89,1.61.89a3.64,3.64,0,0,0,1.29-.18,4.36,4.36,0,0,0,2.09-2.48,9.3,9.3,0,0,0,1.13-2.3c.16-.53-.16-.71-.48-1.06a3.89,3.89,0,0,1-1.13-1.6c-.32-1.06,1.13-1.59,1.94-1.59s1.61.35,2.42.35c1,.18,1.93.18,2.9.36.48.17.8.17,1.29.35a1.59,1.59,0,0,0,1.29.18,13.09,13.09,0,0,0,1.45-1.42,4.82,4.82,0,0,0,1.13-1.6,3.16,3.16,0,0,0-.65-2.65c-1.45-1.6-3.71-1.07-5.64-.89-.65,0-1.94.18-2.58-.35-.81-.71-1-2.31-1.61-3.19-.33-.53-1-1.6-1.62-1.77-.32,0-1.29.35-1.29.17H207.21c0,.18-1-.17-1.29-.17-.64.17-1.29,1.24-1.61,1.77-.64.88-.81,2.48-1.61,3.19-.65.53-1.94.35-2.58.35-1.94-.18-4.19-.71-5.65.89a3.18,3.18,0,0,0-.64,2.65,4.67,4.67,0,0,0,1.13,1.6,12.27,12.27,0,0,0,1.45,1.42,1.6,1.6,0,0,0,1.29-.18c.48-.18.81-.18,1.29-.35,1-.18,1.93-.18,2.9-.36.81,0,1.61-.35,2.42-.35s2.26.53,1.94,1.59a4,4,0,0,1-1.13,1.6c-.33.35-.65.53-.49,1.06a10.26,10.26,0,0,0,1.13,2.3,4.38,4.38,0,0,0,2.1,2.48,3.61,3.61,0,0,0,1.29.18c.65,0,1.13-.53,1.61-.89.32-.35.81-1.06,1.29-.88.65.18.49.88.81,1.24.64.53,1.77.35,2.26.35"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M214.2,300.5H215a1.6,1.6,0,0,0,.32-1.24c0-.35-.32-.89-.32-1.24.32-1.06,1.61,1.24,1.78,1.59.48.89,1.28,3.19,2.41,2.48.65-.17,1.13-.88,1.45-1.24l1.3-1.41c.8-.89,1.45-1.78.8-3.19-.32-.89-1.45-1.78-1.29-2.84s1.94-1.24,2.58-1.24c1,0,1.78.71,2.74.71a9.7,9.7,0,0,0,3.23-.35c.81-.54,1.94-.89,2.26-2.13.16-.89-.32-2.3-1.29-2.48-.49,0-.81.18-1.29.18a4.05,4.05,0,0,1-1.29-.53,8.22,8.22,0,0,0-1.78-.89l-1.45-.53c-1-.53-1-1.6-1.61-2.66a5.09,5.09,0,0,0-1.94-2.3,1.6,1.6,0,0,0-1-.36c-.32,0-.64.36-1,.36H209c-.33,0-.65-.36-1-.36a1.63,1.63,0,0,0-1,.36,5.07,5.07,0,0,0-1.93,2.3c-.65,1.06-.65,2.13-1.62,2.66l-1.45.53a8.16,8.16,0,0,0-1.77.89,4.15,4.15,0,0,1-1.29.53c-.48,0-.81-.18-1.29-.18-1,.18-1.46,1.59-1.29,2.48.32,1.24,1.45,1.6,2.25,2.13a9.7,9.7,0,0,0,3.23.35c1,0,1.77-.71,2.74-.71.65,0,2.42.18,2.58,1.24s-1,1.95-1.29,2.84c-.64,1.41,0,2.3.81,3.19l1.29,1.41c.32.36.81,1.07,1.45,1.24,1.13.71,1.94-1.59,2.42-2.48.16-.35,1.45-2.65,1.77-1.59,0,.35-.32.88-.32,1.24a1.6,1.6,0,0,0,.32,1.24h.54Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M220.46,266.47c3.42-.47,3.42,3.81,2.85,6.67,1.71.71,6.46,0,6.46,3.33.19,4-4,.71-5.51.24-.95-.24-3-.24-3.23,1.18-.38,1.67,1.9,2.38,1.9,4.29,0,1.42-1.33,4.28-2.66,4.28-1.91.24-2.67-3.09-4-4-.19.72.32,3.81-.89,3.57l-.5-.08c-1.53.08-.64-2.77-.83-3.49-1.33,1-2.09,4.29-4,4-1.34,0-2.67-2.86-2.67-4.28,0-1.91,2.29-2.62,1.9-4.29-.18-1.42-2.28-1.42-3.23-1.18-1.52.47-5.7,3.8-5.51-.24,0-3.33,4.75-2.62,6.46-3.33-.57-2.86-.57-7.14,2.86-6.67Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M221.6,253.29c1,1.34,2.28.67,3.23,1.34,1.9.89.38,1.57-.19,2.91-.76,1.34.38,1.79.38,3.58,0,3.58-2.28.67-3.61,1.34s1,2.91.76,4.7c-.38,2.46-1.9,3.13-3.43,3.8-1.9.67-2.28,1.79-2.47,4,0,1.12.57,2.91-.76,3.43l-.57-.07c-1.27-.45-.89-2.24-.89-3.36-.19-2.24-.57-3.36-2.47-4-1.52-.67-3.05-1.34-3.43-3.8-.19-1.79,2.1-4,.76-4.7s-3.61,2.24-3.61-1.34c0-1.79,1.14-2.24.38-3.58-.57-1.34-2.09-2-.19-2.91.95-.67,2.28,0,3.23-1.34Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M221.6,245.16c.76-.59,1.71.59,2.66.59,1.71,0,2.09-1,2.85,1.18.95,2.17,1.15,5.31-1.9,5.12-1.9-.2-3.61-1.77-3.61,1.57.19,2,1,3.55-.95,4.92-2.1,1.58-3.81,1.19-4.19,4.53a5.8,5.8,0,0,0,0,2.56c0,.79.76,3.94-1.14,4.33H215c-1.9-.39-1.14-3.54-1.14-4.33a5.8,5.8,0,0,0,0-2.56c-.38-3.34-2.09-2.95-4.18-4.53-1.91-1.37-1.15-3-1-4.92,0-3.34-1.71-1.77-3.61-1.57-3,.19-2.85-3-1.9-5.12.76-2.17,1.14-1.18,2.85-1.18.95,0,1.91-1.18,2.67-.59Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M222.17,232c2.09,2-.38,3.32.38,4.43.57.66,1.52-.45,1.9-.67,1.33-.44,1.71-.22,2.66.67,1.9,1.54.57,3.76-1,5.31-1.52,1.33-.95.22-2.47-.22a1.39,1.39,0,0,0-2.09.44c-.58,1.11.38,2.44,0,3.54-.58,1.11-1.72,1.33-2.67,1.77-1.9.89-1.9,2.88-2.09,5.54-.19,2,1.52,9.52-1.33,9.52h-.7c-2.85,0-1.14-7.53-1.33-9.52-.19-2.66-.19-4.65-2.09-5.54-.95-.44-2.1-.66-2.67-1.77-.37-1.1.57-2.43,0-3.54a1.38,1.38,0,0,0-2.09-.44c-1.52.44-.95,1.55-2.47.22-1.52-1.55-2.85-3.77-.95-5.31.95-.89,1.33-1.11,2.66-.67.38.22,1.33,1.33,1.9.67.76-1.11-1.71-2.44.38-4.43Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M220.84,221.7v-.37c3,0,.37,3.68,2.85,3.13.76-.19,1.33-1.29,2.09-1.11a2.67,2.67,0,0,1,1.33,2.39l-.19,1.84c-.38.74-.95.92-1.9,1.29-1.33.18-2.66.18-3.23,1.65-.19.92.38,1.29-.19,2.21a9.28,9.28,0,0,1-2.66,1.65,4.3,4.3,0,0,0-2.67,4.23c0,.92,1.33,4-.76,4h-.7c-2.09,0-.76-3.12-.76-4a4.31,4.31,0,0,0-2.66-4.23,9.28,9.28,0,0,1-2.66-1.65c-.57-.92,0-1.29-.19-2.21-.57-1.47-1.9-1.47-3.24-1.65-.94-.37-1.52-.55-1.9-1.29l-.19-1.84a2.66,2.66,0,0,1,1.34-2.39c.76-.18,1.33.92,2.09,1.11,2.47.55-.19-3.13,2.85-3.13v.37Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M221.21,210c2.1.43.39,2.15,1,3,.76,1.07,2.09-.43,3-.43,1.71,0,3,2.36,2.47,4.29-.76,1.93-2.47,1.07-3.8,1.07-.76.22-1.33,0-1.9,1.51-.38,1.28.19,1.93-.95,3.21-1.72,1.94-3.62,1.29-4.38,4.3-.57,2.14,1.4,9.44-1.27,9.44H215c-2.66,0-.76-7.3-1.33-9.44-.76-3-2.66-2.36-4.37-4.3-1.15-1.28-.57-1.93-1-3.21-.58-1.51-1.15-1.29-1.91-1.51-1.33,0-3,.86-3.8-1.07-.57-1.93.76-4.29,2.47-4.29.95,0,2.29,1.5,3,.43.57-.86-1.15-2.58,1-3Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M220.65,199.83c.76.55.57,1.1.95,1.84.76,1.47.76.91,2.28.73,1.9-.37,2.47.18,2.66,1.65.19,2.4-.76,2.95-2.66,3.31-2.85.55-1.14,1.84-2.47,3.31-1.53,1.66-3.62,1.29-4.38,3.86-.57,1.66.57,8.09-1.9,7.9h.06c-2.47.19-1.33-6.24-1.9-7.9-.76-2.57-2.85-2.21-4.37-3.86-1.33-1.47.38-2.76-2.48-3.31-1.9-.36-2.85-.91-2.66-3.31.19-1.47.76-2,2.66-1.65,1.53.18,1.53.74,2.29-.73.38-.74.18-1.29,1-1.84Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M221.6,190c1.14.19.57,1.11,1,1.84.76,1.47.95.74,2.66.37,1.9-.19,2.66,2,1.9,3.67-.76,2.21-2.85.74-4.37,1.48-1.15.36-1,1.28-1.15,2.2-.18,1.47-.18,1.84-1.71,2.57a7.26,7.26,0,0,0-3.42,4.6,28.84,28.84,0,0,0-.19,4c0,.92,1.39,2.7-.7,2.82h-.5c-1.65.12-1-1.9-1-2.82a28.84,28.84,0,0,0-.19-4,7.26,7.26,0,0,0-3.42-4.6c-1.53-.73-1.53-1.1-1.72-2.57-.18-.92,0-1.84-1.14-2.2-1.52-.74-3.61.73-4.37-1.48-.76-1.65,0-3.86,1.9-3.67,1.71.37,1.9,1.1,2.66-.37.38-.73-.19-1.65.95-1.84Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M221.21,181.18c1.53.19,2.29,1.47,1.53,2.76.95,0,2.09-.73,2.85-.37.95.37,2.09,2.58,1.33,3.5-1.52,1.65-4-1.29-4.94,2.2-.38,1.29,0,1.66-1.52,2-1.71.37-2.29-.18-3.24,1.66a8.3,8.3,0,0,0-.57,3.86,1.3,1.3,0,0,1-1.33,1.47H215c-1.26-.43-1.33-.92-1.33-1.47a8.3,8.3,0,0,0-.57-3.86c-.95-1.84-1.52-1.29-3.23-1.66-1.52-.36-1.14-.73-1.52-2-.95-3.49-3.42-.55-4.95-2.2-.76-.92.38-3.13,1.33-3.5.76-.36,1.91.37,2.86.37a1.78,1.78,0,0,1,1.52-2.76Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M222,173.46c-.19.92,4.56-.36,4.75-.18.77.55.19,3.31-.38,3.68-1.14.91-2.85-.19-3.8.73-1.71,1.29-.19,2.94-2.28,4-1.52.92-2.48,1.29-3.24,2.94-.38,1.29-.95,2-.95,3.31.19.74.76,1.29-.19,1.66h-1.46c-1-.37-.38-.92-.19-1.66,0-1.28-.57-2-1-3.31-.76-1.65-1.71-2-3.23-2.94-2.09-1.1-.57-2.75-2.28-4-1-.92-2.67.18-3.81-.73-.57-.37-1.14-3.13-.38-3.68.19-.18,4.95,1.1,4.76.18Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M222.17,166.12c1.14-.69,1.14.41,1.71.69,1.14.27,1.71-.42,2.66.41a2.35,2.35,0,0,1,.19,2.48c-.76.82-2.09.55-2.66,1.24-.76.82.57,2.07-1.52,2.75-1.14.28-2.67-.13-3.81.56s-2,.91-2.15,1.88c0,.28-.32,1.84-1.09,2l-.77-.07c-.62,0-1.12-1.6-1.12-1.86-.19-1-.89-1.37-2-1.92s-2.67-.28-3.81-.56c-2.09-.68-.76-1.93-1.52-2.75-.57-.69-1.9-.42-2.66-1.24a2.35,2.35,0,0,1,.19-2.48c.95-.83,1.52-.14,2.66-.41.57-.28.57-1.38,1.71-.69Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M225.4,159.15c-.19-.37,0-.55.76-.73,1.14-.19,1.52.92,1.71,2,.57,3.49-2.28,2.21-4.18,3.12s-.76,2.39-1.33,3.68c-.58,1.66-2.67,1.47-4,1.66-1.71.18-1.9.55-1.71,2.2a2,2,0,0,1-1.14,2h-.7a2,2,0,0,1-1.14-2c.19-1.65,0-2-1.71-2.2-1.33-.19-3.43,0-4-1.66-.57-1.29.57-2.76-1.33-3.68s-4.75.37-4.18-3.12c.19-1.1.57-2.21,1.71-2,.76.18,1,.36.76.73Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M225.08,153.88c1.78.49,3.3-1,4.82-.24.76.49,1.71,2.27.95,3.06s-9.57-.12-5.26,2.82c-1.27,1.23-4.31,1-6.09,2-1.52.73-2.53,4.41-3.8,4.41h-1.08c-1.27,0-2.28-3.68-3.8-4.41-1.78-1-4.82-.74-6.09-2,4.31-2.94-4.31-2-5.07-2.7-1.78-1.53,0-2.69.76-3.18,1.52-.74,3,.73,4.82.24l.95-.24c3-2.94,3.68-.43,7.29-.43a33.93,33.93,0,0,0,4.94,0c1.65-.25,3.24-2,6.22-.18Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M222.8,146a6.59,6.59,0,0,1,3,.59c1,.6,2.26,1.54,2.47,2.84a2.53,2.53,0,0,1-1.18,2.6,1.47,1.47,0,0,1-.43.35c-.32.12-.32,0-.54,0-.43-.12-.53.24-.64.47s-.43.36-.86.48a3.46,3.46,0,0,0-2.58,1.41c-.11.24-.22.59-.43.71a1,1,0,0,1-.75.24c-.65,0-.86-.59-1.4-.71a2.82,2.82,0,0,0-1.29-.47,7.22,7.22,0,0,0-1.61,0h-3.44a7.22,7.22,0,0,0-1.61,0,2.78,2.78,0,0,0-1.29.47c-.54.12-.76.71-1.4.71a.93.93,0,0,1-.75-.24c-.22-.12-.33-.47-.43-.71a3.45,3.45,0,0,0-2.58-1.41c-.43-.12-.65-.12-.87-.48s-.21-.59-.64-.47c-.22,0-.22.12-.54,0a1.62,1.62,0,0,1-.43-.35,2.53,2.53,0,0,1-1.18-2.6c.21-1.3,1.5-2.25,2.47-2.84a6.62,6.62,0,0,1,3-.59Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M214.85,146.82a15.49,15.49,0,0,1,2.36,0c.22.12.43.12.65.36s.32.23.53.35a6.74,6.74,0,0,1,1.4.59,3.16,3.16,0,0,0,1.83,0,3,3,0,0,0,1.29-.83,4,4,0,0,0,.75-.59c.32-.12.54-.47.75-.47a1.46,1.46,0,0,1,1.19.24,4.86,4.86,0,0,0,1.29.71c.53.11.86-.12,1-.71a3,3,0,0,0,.1-1.66c-.1-.59-.32-1.3-.86-1.53a1.87,1.87,0,0,0-.86-.12c-.21-.12-.53-.12-.64-.24-.54-.23-.54-1.06-1-1.41a2.85,2.85,0,0,0-2.15-.71H207.21a2.85,2.85,0,0,0-2.15.71c-.43.35-.43,1.18-1,1.41-.1.12-.43.12-.64.24a1.89,1.89,0,0,0-.86.12c-.54.23-.75.94-.86,1.53a2.86,2.86,0,0,0,.11,1.66c.1.59.43.82,1,.71a4.86,4.86,0,0,0,1.29-.71,1.46,1.46,0,0,1,1.19-.24c.21,0,.43.35.75.47a4.35,4.35,0,0,0,.75.59,3.11,3.11,0,0,0,1.29.83,3.16,3.16,0,0,0,1.83,0,7,7,0,0,1,1.4-.59c.21-.12.32-.24.53-.35s.44-.24.65-.36a15.62,15.62,0,0,1,2.37,0"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M215.06,141.15c.43,0,.54.36.75.59a1.3,1.3,0,0,0,1.29.24,1.44,1.44,0,0,0,.65-.24c0-.12.11-.12.11-.23s.21-.12.32-.12a1.4,1.4,0,0,1,.64-.24,2,2,0,0,1,.76.59c.85.83,1.72.71,2.79.47a6.53,6.53,0,0,0,1.61-.7c.43-.12,1.08-.24,1.19-.83s-.11-1.06.54-1c.32.12.64.36,1,0s.11-1.18,0-1.65a1.09,1.09,0,0,0-.43-.59c-.1-.12-.32-.12-.43-.12a1.28,1.28,0,0,1-1-.35,5.82,5.82,0,0,1-.43-1.18,3.49,3.49,0,0,0,0-1.07c-.1-.35-.32-.94-.75-.71l-17.2-.23c-.43-.24-1.08.59-1.18.94a3.49,3.49,0,0,0,0,1.07,5.32,5.32,0,0,1-.44,1.18,1.24,1.24,0,0,1-1,.35.59.59,0,0,0-.43.12,1.14,1.14,0,0,0-.43.59c-.11.47-.43,1.3,0,1.65s.64.12,1,0c.65-.11.43.48.54,1s.76.71,1.19.83a6.53,6.53,0,0,0,1.61.7c1.07.24,1.93.36,2.79-.47a2,2,0,0,1,.76-.59,1.4,1.4,0,0,1,.64.24c.11,0,.22.12.32.12s.11.11.11.23a1.44,1.44,0,0,0,.65.24,1.28,1.28,0,0,0,1.28-.24c.22-.23.33-.59.76-.59"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M215.06,135.6c.54,0,.32.35.54.71a1.54,1.54,0,0,0,1.18.47,1.62,1.62,0,0,0,.75-.12c.22-.12.11-.23.22-.35s.43-.71.64-.59.44.35.65.35.22.12.43.24.75.12,1,.12a5.73,5.73,0,0,0,1.5-.48c.22-.12.43-.35.65-.47a3,3,0,0,1,.75-.59c.43-.36.54-1.3,1.18-1.18a1.42,1.42,0,0,0,.65.23c.21,0,.43-.11.65-.11.32-.24.42-.24.53-.6a2.11,2.11,0,0,0,.11-.82,1,1,0,0,0-1.08-.71.92.92,0,0,1-1-.95,1.52,1.52,0,0,0-.22-1.06,1.66,1.66,0,0,0-1-.59c-.21,0-.43.12-.53,0s-.43,0-.54-.12H207.54c-.11.12-.33.12-.54.12s-.32,0-.54,0a1.72,1.72,0,0,0-1,.59,1.58,1.58,0,0,0-.21,1.06.92.92,0,0,1-1,.95,1,1,0,0,0-1.07.71,2.31,2.31,0,0,0,.1.82c.11.36.22.36.54.6.22,0,.43.11.65.11a1.38,1.38,0,0,0,.64-.23c.65-.12.75.82,1.18,1.18a3.26,3.26,0,0,1,.76.59c.21.12.43.35.64.47a5.69,5.69,0,0,0,1.51.48c.21,0,.64-.12,1-.12s.33-.12.43-.24.43-.35.65-.35.53.35.64.59,0,.23.22.35a1.64,1.64,0,0,0,.75.12,1.54,1.54,0,0,0,1.18-.47c.22-.36,0-.71.54-.71"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M214.85,129.46c0,.12.21.12.32.35s0,.47.43.47c.1,0,.53,0,.64-.11s.22-.36.43-.48c.43-.23,1,.12,1.4.36a2.16,2.16,0,0,0,1.18.47,5.68,5.68,0,0,0,3.12-1,2.56,2.56,0,0,1,.86-.23c.22-.12.32-.12.43-.24a2,2,0,0,0,.86-1.06c.11-.36.11-.47.43-.24.22,0,.33.24.54.24.54,0,.75-.36.75-.95s0-1.06-.43-1.3-1,0-1.29-.59.11-.82.11-1.3a1,1,0,0,0-.32-.94c-.65-.83-1.51-.47-2.37-.83H207.75c-.86.36-1.72,0-2.37.83a1,1,0,0,0-.32.94c0,.48.32.83.11,1.3s-.75.36-1.29.59-.43.83-.43,1.3.21.95.75.95c.22,0,.32-.24.54-.24.32-.23.32-.11.43.24a2,2,0,0,0,.86,1.06c.11.12.21.12.43.24a2.5,2.5,0,0,1,.86.23,5.68,5.68,0,0,0,3.12,1,2.16,2.16,0,0,0,1.18-.47c.43-.24,1-.59,1.4-.36.21.12.21.36.43.48s.54.11.64.11c.43,0,.33-.23.43-.47s.33-.23.33-.35"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M214.74,122.72a1.15,1.15,0,0,1,.11.59c.1.36.53.59.85.71.76.12,1-1.06,1.62-.59a3.23,3.23,0,0,0,.86.59c.21.12.53.24.75.36a4.77,4.77,0,0,0,1.83.12c.32-.12.53-.24.86-.36a2.49,2.49,0,0,0,1-.35,17.87,17.87,0,0,0,1.51-1.42,1.81,1.81,0,0,0,.75-.83,1.12,1.12,0,0,0-.32-.82c-.22-.24-.65-.59-.43-1.07s.43-.11.54.12c.64.47,1.07,1.18,1.82,1.42a1,1,0,0,0,1-.36c.22-.35.43-.59.65-.94s.11-.59-.22-1a.56.56,0,0,0-.64-.35,4.94,4.94,0,0,1-1.72-1,2.18,2.18,0,0,1-.86-.58c-.43-.24-.54-.48-.32-1,0-.35.1-.47-.11-.83-.11-.12-.22-.23-.43-.47a5.87,5.87,0,0,0-1.5-.59,10.85,10.85,0,0,1-1.94-.36h-11a10.91,10.91,0,0,1-1.93.36,5.8,5.8,0,0,0-1.51.59c-.21.24-.32.35-.43.47-.21.36-.11.47-.11.83.22.47.11.71-.32,1a2.34,2.34,0,0,1-.86.58,4.94,4.94,0,0,1-1.72,1,.58.58,0,0,0-.65.35c-.32.36-.43.59-.21,1s.43.59.64.94a1,1,0,0,0,1,.36c.76-.24,1.19-1,1.83-1.42.11-.23.32-.47.54-.12s-.22.83-.43,1.07a1.09,1.09,0,0,0-.33.82,1.77,1.77,0,0,0,.76.83,19.48,19.48,0,0,0,1.5,1.42,2.6,2.6,0,0,0,1,.35c.32.12.54.24.86.36a4.77,4.77,0,0,0,1.83-.12c.21-.12.54-.24.75-.36a3.67,3.67,0,0,0,.86-.59c.65-.47.86.71,1.61.59.33-.12.76-.35.86-.71a1.15,1.15,0,0,1,.11-.59"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                        <path d="M214.85,114.57a1.75,1.75,0,0,0,1.07.24c.65,0,1-.35,1.51-.59a2.8,2.8,0,0,1,1.72-.36,14,14,0,0,1,2.15,0c.43.12.64.48,1.07.59a1.35,1.35,0,0,0,1,0,1.56,1.56,0,0,0,.75-.94,1.78,1.78,0,0,1,.32-1.06c.65-.59,1.51.11,2.15.35a3.42,3.42,0,0,0,1.72.59c.54,0,.86,0,1.19-.47a1.67,1.67,0,0,0,.53-.71,2.57,2.57,0,0,0,.54-1.54,3,3,0,0,0-.21-1.06,6.5,6.5,0,0,0-.33-.83c-.21-.47-.53-.7-.86-.59s-.53.36-.86.48a9,9,0,0,1-1.71-.12c-.54-.12-1.4-.24-1.51-.83,0-.35.43-.94.22-1.3a6.54,6.54,0,0,0-2.26-.35c-.32.12-.65.23-1.08.35s-.53.36-1,.36-.64.11-1,.11a2.7,2.7,0,0,0-1,.12h-.65c-.53-.23-1.18,0-1.61-.47-.32-.24-.43-.47-.75-.59s-.43,0-.65,0h-1.07c-.22,0-.43-.12-.65,0s-.43.35-.75.59c-.43.47-1.07.24-1.61.47h-.64a2.72,2.72,0,0,0-1-.12c-.33,0-.65-.11-1-.11s-.64-.24-1-.36-.75-.24-1.07-.35a6.54,6.54,0,0,0-2.26.35c-.22.36.22,1,.22,1.3-.11.59-1,.71-1.51.83a9.05,9.05,0,0,1-1.72.12c-.32-.12-.54-.36-.86-.48s-.65.12-.86.59a5.37,5.37,0,0,0-.32.83,3,3,0,0,0-.22,1.06,2.64,2.64,0,0,0,.54,1.54,1.68,1.68,0,0,0,.54.71c.32.47.64.47,1.18.47a3.38,3.38,0,0,0,1.72-.59c.65-.24,1.51-.94,2.15-.35a1.71,1.71,0,0,1,.32,1.06,1.61,1.61,0,0,0,.76.94,1.33,1.33,0,0,0,1,0c.43-.11.65-.47,1.08-.59a14,14,0,0,1,2.15,0,2.83,2.83,0,0,1,1.72.36c.54.24.86.59,1.5.59a1.8,1.8,0,0,0,1.08-.24"
                            transform="translate(-31.03 -18.52)" className="spinal-path-background" />
                    </g>
                    <g id="Vertebrae">
                        <path id="coccygeal_vertebrae"
                            d="M218.14,389.89h-1.49a2,2,0,0,0-1.34-.16h-.44a2,2,0,0,0-1.34.16H212a1.81,1.81,0,0,1-1.34,0c-.21-.15-.41-.23-.57-.34a1.48,1.48,0,0,0-.32,1c0,.81.59,1.14,1.19,1.63a1,1,0,0,1,.74,1c0,.33-.15.82.3,1.15.15.16.59,0,.89.16a1.12,1.12,0,0,1,.6,1.15c0,.32-.15.81,0,1.14.15.49.59.49.59,1.15,0,.49-.15.65,0,1a1.23,1.23,0,0,0,.6.65.47.47,0,0,0,.37.16.46.46,0,0,0,.37-.16,1.23,1.23,0,0,0,.6-.65c.15-.33,0-.49,0-1,0-.66.45-.66.59-1.15.15-.33,0-.82,0-1.14a1.12,1.12,0,0,1,.6-1.15c.3-.16.74,0,.89-.16.45-.33.3-.82.3-1.15a1,1,0,0,1,.75-1c.59-.49,1.19-.81,1.19-1.63a1.48,1.48,0,0,0-.33-1c-.16.11-.36.19-.56.34A1.84,1.84,0,0,1,218.14,389.89Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-disabled" />
                        <path id="V_S5"
                            d="M221.31,379.28c-1.05,2.89-10,2.89-12.25-.11-2.62-3.52-1.63-6-9.92-.72a3.75,3.75,0,0,0,2.32,1.63c1.19.33,1.64,1.47,2.24,2.62.44,1.15.74,2.62,2.08,2.94a19.45,19.45,0,0,0,2.53.66,2.54,2.54,0,0,1,1.49,2.61c0,.66.45.66.89,1a1.84,1.84,0,0,0,1.35,0h1.48a2,2,0,0,1,1.34-.16h.45a2,2,0,0,1,1.34.16h1.49a1.81,1.81,0,0,0,1.34,0c.45-.32.9-.32.9-1a2.53,2.53,0,0,1,1.48-2.61,19.57,19.57,0,0,0,2.54-.66c1.34-.32,1.63-1.8,2.08-2.94.6-1.15,1-2.29,2.23-2.62a3.79,3.79,0,0,0,2.33-1.63C226.46,375.39,223.2,373.17,221.31,379.28Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-disabled" />
                        <path id="V_S4"
                            d="M234.81,369.91c-5.32-3.65-9-3.14-12.87,2.81-1.53,2.36-13.05,2.63-14,0-2-5.55-4.94-5.78-12.55-2.77,0,.49.74,1,1,1.47a8,8,0,0,0,1,1.15,5.59,5.59,0,0,1,1.49,2.78v1.31c0,.49-.15.82,0,1.14a2,2,0,0,0,.21.66c8.29-5.28,7.3-2.8,9.92.72,2.23,3,11.2,3,12.25.11,1.89-6.11,5.15-3.89,9.73-.83a1.76,1.76,0,0,0,.2-.66c.15-.32,0-.65,0-1.14v-1.31a5.67,5.67,0,0,1,1.49-2.78,6.6,6.6,0,0,0,1-1.15c.3-.49,1-1,1-1.47v0Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-disabled" />
                        <path id="V_S3"
                            d="M235.27,362.75a.88.88,0,0,1,0-.16c-6.24-4.57-9.29-5.29-12.09-.66-2.41,4-14.34,4.22-16.21-.24-2.65-6.3-7.33.3-11.81,1.5a5.22,5.22,0,0,1,.33.54A12.68,12.68,0,0,1,196,367a5.24,5.24,0,0,1-.14,1.47,5.52,5.52,0,0,0-.45,1.47c7.61-3,10.51-2.78,12.55,2.77,1,2.64,12.5,2.37,14,0,3.85-6,7.55-6.46,12.87-2.81h0a5.67,5.67,0,0,0-.44-1.44,4.9,4.9,0,0,1-.15-1.47,12.27,12.27,0,0,1,.45-3.27C234.82,363.4,235.12,363.07,235.27,362.75Z"
                            transform="translate(-31.03 -18.52)" className="spinal-path-disabled" />
                        <SpinePath pathId="V_DLS_S1-S2"
                            d="M220.29,352.53c-1.84,3.17-8.46,3.2-10.34.06-4.73-7.92-5.79-4.77-16.53,2.31a17.28,17.28,0,0,0,.15,2.78,7.39,7.39,0,0,0,.75,2.61c.15.49.29,1,.44,1.48,0,.32.15.65.15,1a4.37,4.37,0,0,0,.27.44c4.48-1.2,9.16-7.8,11.81-1.5,1.87,4.46,13.8,4.24,16.21.24,2.8-4.63,5.85-3.91,12.09.66a7.72,7.72,0,0,0,.12-.82l.45-1.48a7.38,7.38,0,0,0,.74-2.61,17.28,17.28,0,0,0,.15-2.78C226.69,346.72,225,344.48,220.29,352.53Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_L5-S1"
                            d="M236.31,342.14c-.45-.82-1.19-2.12-2.24-2.29s-1.63.66-2.23,1.47c-.3.49-.45.17-.89.17-.45-.17-1.35,0-1.49-.49-.3-.33-.15-1-.3-1.47-.15-.33-.3-.82-.75-1a2.2,2.2,0,0,0-1,0c.17.26.07.46.07.92a5,5,0,0,1-1.94,3.19,3.88,3.88,0,0,1-2.42,1.06,2.62,2.62,0,0,1-2.58-1.77c-.16-.53,0-.89-.32-1.59a4,4,0,0,0-1.77-1.24c-.65-.18-1.94-.36-2.42.17-.16.36-.16.89-.33,1.24-.32.54-.48.89-1.12.89h-.38c-.65,0-.81-.36-1.13-.89-.16-.35-.16-.88-.32-1.24-.49-.53-1.78-.35-2.42-.17a4,4,0,0,0-1.78,1.24c-.32.7-.16,1.06-.32,1.59a2.6,2.6,0,0,1-2.58,1.77,3.9,3.9,0,0,1-2.42-1.06,5,5,0,0,1-1.94-3.19c0-.16,0-.28,0-.39-.08.15-.14.3-.2.44-.15.49,0,1.14-.3,1.47-.15.49-1,.32-1.49.49-.44,0-.59.32-.89-.17-.6-.81-1.19-1.63-2.23-1.47s-1.79,1.47-2.24,2.29a5.76,5.76,0,0,0-1.34,3.44,19.31,19.31,0,0,0,.15,2.94c.15,1.14.3,2.45.45,3.6a18.73,18.73,0,0,1,.29,2.78c10.74-7.08,11.8-10.23,16.53-2.31,1.88,3.14,8.5,3.11,10.34-.06,4.69-8,6.4-5.81,16.46,2.37a17.5,17.5,0,0,1,.3-2.78c.15-1.15.3-2.46.45-3.6a19.31,19.31,0,0,0,.15-2.94A5.76,5.76,0,0,0,236.31,342.14Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_L4-L5"
                            d="M232.1,329.91a3.35,3.35,0,0,0-2.9,0c-.32.36-.8.53-1.13.89-.48.18-1.45.53-1.77,0a3.23,3.23,0,0,1,0-1.24,3.71,3.71,0,0,1,.64-1.42c.33-.71,0-1.06-.16-1.77a1.94,1.94,0,0,0-1.13-1.42,1.26,1.26,0,0,0-.88.2,2.78,2.78,0,0,1,.08.51c-.16.89-1,1.6-1.45,2.3-.49.53-1.29,1.6-1.94,1.78a4.91,4.91,0,0,1-2.74,0c-1-.54-1.29-2.13-2.26-2.66-1.13-.53-1,.71-1.29,1.41L215,329c.16,0-.32.53-.65.53a1.78,1.78,0,0,1-.8-1.07c-.32-.7-.16-1.94-1.29-1.41-1,.53-1.29,2.12-2.26,2.66a4.91,4.91,0,0,1-2.74,0c-.65-.18-1.45-1.25-1.94-1.78-.48-.7-1.29-1.41-1.45-2.3a2.78,2.78,0,0,1,.08-.51,1.26,1.26,0,0,0-.88-.2,1.94,1.94,0,0,0-1.13,1.42c-.16.71-.48,1.06-.16,1.77a3.71,3.71,0,0,1,.64,1.42c0,.35.17.88,0,1.24-.32.53-1.29.18-1.77,0-.32-.36-.81-.53-1.13-.89a3.35,3.35,0,0,0-2.9,0,3.42,3.42,0,0,0-2.1,2.84,5.38,5.38,0,0,0,.16,1.59,19.78,19.78,0,0,0,1.45,2,3.41,3.41,0,0,0,3.55.89c.65-.18,1.78-.89,2.58-.18.49.35.33.89-.16,1.24a.88.88,0,0,0-.64.18c-.33.35-.17.53-.17,1.06a5,5,0,0,0,1.94,3.19,3.9,3.9,0,0,0,2.42,1.06,2.6,2.6,0,0,0,2.58-1.77c.16-.53,0-.89.32-1.59a4,4,0,0,1,1.78-1.24c.64-.18,1.93-.36,2.42.17.16.36.16.89.32,1.24.32.53.48.89,1.13.89h.38c.64,0,.8-.35,1.12-.89.17-.35.17-.88.33-1.24.48-.53,1.77-.35,2.42-.17a4,4,0,0,1,1.77,1.24c.32.7.16,1.06.32,1.59a2.62,2.62,0,0,0,2.58,1.77,3.88,3.88,0,0,0,2.42-1.06,5,5,0,0,0,1.94-3.19c0-.53.16-.71-.16-1.06a.9.9,0,0,0-.65-.18c-.48-.36-.64-.89-.16-1.24.81-.71,1.94,0,2.58.18a3.41,3.41,0,0,0,3.55-.89,18.31,18.31,0,0,0,1.45-2,5.38,5.38,0,0,0,.16-1.59A3.42,3.42,0,0,0,232.1,329.91Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_L3-L4"
                            d="M230.33,316.09a5.83,5.83,0,0,1-2.42.36c-1.13-.18-1.45-1.6-1.93-2.48s-1-2.31-1.94-2.66l0,0a.63.63,0,0,1,0,.55,9.3,9.3,0,0,1-1.13,2.3,4.36,4.36,0,0,1-2.09,2.48,3.64,3.64,0,0,1-1.29.18c-.65,0-1.13-.53-1.61-.89-.33-.35-.81-1.06-1.3-.88-.64.18-.48.88-.8,1.24a1.84,1.84,0,0,1-1,.35h.27l-.47,0H214l-.45,0h.26a1.78,1.78,0,0,1-1-.35c-.32-.36-.16-1.06-.81-1.24-.48-.18-1,.53-1.29.88-.48.36-1,.89-1.61.89a3.61,3.61,0,0,1-1.29-.18,4.38,4.38,0,0,1-2.1-2.48,10.26,10.26,0,0,1-1.13-2.3.66.66,0,0,1,.05-.56l-.05,0c-1,.35-1.45,1.77-1.93,2.66s-.81,2.3-1.94,2.48a5.83,5.83,0,0,1-2.42-.36,2.74,2.74,0,0,0-2.9,1.24,6.64,6.64,0,0,0-.16,1.77c.16.54.16,1.07.32,1.6.32,1.24,1.45,1.06,2.42,1.59.32.18.64.71,1,.89a1.15,1.15,0,0,0,1.3,0,6.61,6.61,0,0,0,1.77-.35c.32,0,1-.36,1.45-.36,1.61.18.32,2.3.32,3.19.16.89,1,1.6,1.45,2.3.49.53,1.29,1.6,1.94,1.78a4.91,4.91,0,0,0,2.74,0c1-.54,1.29-2.13,2.26-2.66,1.13-.53,1,.71,1.29,1.41a1.78,1.78,0,0,0,.8,1.07c.33,0,.81-.53.65-.53l.22-.54c.32-.7.16-1.94,1.29-1.41,1,.53,1.29,2.12,2.26,2.66a4.91,4.91,0,0,0,2.74,0c.65-.18,1.45-1.25,1.94-1.78.48-.7,1.29-1.41,1.45-2.3,0-.89-1.29-3,.32-3.19.48,0,1.13.36,1.45.36a6.61,6.61,0,0,0,1.78.35,1.14,1.14,0,0,0,1.29,0c.32-.18.64-.71,1-.89,1-.53,2.1-.35,2.42-1.59.16-.53.16-1.06.33-1.6a6.26,6.26,0,0,0-.17-1.77A2.74,2.74,0,0,0,230.33,316.09Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_L2-L3"
                            d="M234.2,303.16c-1.45-1.6-3.71-1.07-5.64-.89-.65,0-1.94.18-2.58-.35-.81-.71-1-2.31-1.62-3.19a5,5,0,0,0-1.38-1.67,3,3,0,0,1-1,2.38l-1.3,1.41c-.32.36-.8,1.07-1.45,1.24-1.13.71-1.93-1.59-2.41-2.48-.17-.35-1.46-2.65-1.78-1.59,0,.35.32.89.32,1.24a1.6,1.6,0,0,1-.32,1.24h-1.35a1.6,1.6,0,0,1-.32-1.24c0-.36.32-.89.32-1.24-.32-1.06-1.61,1.24-1.77,1.59-.48.89-1.29,3.19-2.42,2.48-.64-.17-1.13-.88-1.45-1.24l-1.29-1.41a2.93,2.93,0,0,1-1-2.38,5.18,5.18,0,0,0-1.38,1.67c-.64.88-.81,2.48-1.61,3.19-.65.53-1.94.35-2.58.35-1.94-.18-4.2-.71-5.65.89a3.18,3.18,0,0,0-.64,2.65,4.67,4.67,0,0,0,1.13,1.6,12.27,12.27,0,0,0,1.45,1.42,1.6,1.6,0,0,0,1.29-.18c.48-.18.81-.18,1.29-.35,1-.18,1.93-.18,2.9-.36.81,0,1.61-.35,2.42-.35s2.26.53,1.94,1.59a4,4,0,0,1-1.13,1.6c-.33.35-.65.53-.49,1.06a10.26,10.26,0,0,0,1.13,2.3,4.38,4.38,0,0,0,2.1,2.48,3.61,3.61,0,0,0,1.29.18c.65,0,1.13-.53,1.61-.89.32-.35.81-1.06,1.29-.88.65.18.49.88.81,1.24a1.78,1.78,0,0,0,1,.35h-.26l.45,0h.64l.47,0h-.27a1.84,1.84,0,0,0,1-.35c.32-.36.16-1.06.8-1.24.49-.18,1,.53,1.3.88.48.36,1,.89,1.61.89a3.64,3.64,0,0,0,1.29-.18,4.36,4.36,0,0,0,2.09-2.48,9.3,9.3,0,0,0,1.13-2.3c.16-.53-.16-.71-.48-1.06a3.89,3.89,0,0,1-1.13-1.6c-.32-1.06,1.13-1.59,1.93-1.59s1.62.35,2.43.35c1,.18,1.93.18,2.9.36.48.17.8.17,1.29.35a1.59,1.59,0,0,0,1.29.18,13.09,13.09,0,0,0,1.45-1.42,4.82,4.82,0,0,0,1.13-1.6A3.16,3.16,0,0,0,234.2,303.16Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_L1-L2"
                            d="M231,287.92c-.49,0-.81.18-1.29.18a4.05,4.05,0,0,1-1.29-.53,8.22,8.22,0,0,0-1.78-.89l-1.45-.53c-1-.53-1-1.6-1.61-2.66a10.51,10.51,0,0,0-.65-1.07c-.13,1.48-1.39,4-2.64,4-1.91.24-2.67-3.09-4-4-.19.72.32,3.81-.88,3.57l-.51-.08c-1.53.08-.64-2.77-.83-3.49-1.33,1-2.09,4.29-4,4-1.34,0-2.66-2.86-2.66-4.28a2.42,2.42,0,0,1,.4-1.32,1.49,1.49,0,0,0-.75.33,5.15,5.15,0,0,0-1.94,2.3c-.64,1.06-.64,2.13-1.61,2.66l-1.45.53a8.16,8.16,0,0,0-1.77.89,4.15,4.15,0,0,1-1.29.53c-.48,0-.81-.18-1.29-.18-1,.18-1.46,1.59-1.29,2.48.32,1.24,1.45,1.6,2.25,2.13a9.7,9.7,0,0,0,3.23.35c1,0,1.77-.71,2.74-.71.65,0,2.42.18,2.58,1.24s-1,1.95-1.29,2.84c-.64,1.41,0,2.3.81,3.19l1.29,1.41c.32.36.81,1.07,1.45,1.24,1.13.71,1.94-1.59,2.42-2.48.16-.35,1.45-2.65,1.77-1.59,0,.35-.32.88-.32,1.24a1.6,1.6,0,0,0,.32,1.24H215a1.6,1.6,0,0,0,.32-1.24c0-.35-.32-.89-.32-1.24.32-1.06,1.61,1.24,1.78,1.59.48.89,1.28,3.19,2.41,2.48.65-.17,1.13-.88,1.45-1.24l1.3-1.41c.8-.89,1.45-1.78.8-3.19-.32-.89-1.45-1.78-1.29-2.84s1.94-1.24,2.58-1.24c1,0,1.78.71,2.74.71a9.7,9.7,0,0,0,3.23-.35c.81-.54,1.94-.89,2.26-2.13C232.43,289.51,232,288.1,231,287.92Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T12-L1"
                            d="M223.31,273.14c.45-2.27.54-5.41-1.14-6.39a2.8,2.8,0,0,1,0,.41c-.38,2.46-1.9,3.13-3.43,3.8-1.9.67-2.28,1.79-2.47,4,0,1.12.57,2.91-.76,3.43l-.57-.07c-1.27-.45-.89-2.24-.89-3.36-.19-2.24-.57-3.36-2.47-4-1.52-.67-3.05-1.34-3.43-3.8a2.8,2.8,0,0,1,0-.41c-1.67,1-1.59,4.13-1.14,6.39-1.71.71-6.46,0-6.46,3.33-.19,4,4,.71,5.51.24.95-.24,3.05-.24,3.23,1.18.39,1.67-1.89,2.38-1.89,4.29,0,1.42,1.32,4.28,2.66,4.28,1.9.24,2.66-3.09,4-4,.19.72-.7,3.57.83,3.49l.51.08c1.2.24.69-2.85.88-3.57,1.33,1,2.09,4.29,4,4,1.33,0,2.66-2.86,2.66-4.28,0-1.91-2.28-2.62-1.9-4.29.19-1.42,2.28-1.42,3.23-1.18,1.52.47,5.71,3.8,5.51-.24C229.77,273.14,225,273.85,223.31,273.14Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T11-T12"
                            d="M224.83,254.63c-1-.67-2.27,0-3.22-1.33,0,.11,0,.2,0,.32.19,2,1,3.55-.95,4.92-2.1,1.58-3.81,1.19-4.19,4.53a5.8,5.8,0,0,0,0,2.56c0,.79.76,3.94-1.14,4.33H215c-1.9-.39-1.14-3.54-1.14-4.33a5.8,5.8,0,0,0,0-2.56c-.38-3.34-2.09-2.95-4.18-4.53-1.91-1.37-1.15-3-1-4.92,0-.12,0-.21,0-.32-1,1.32-2.27.66-3.22,1.33-1.9.89-.38,1.57.19,2.91.76,1.34-.38,1.79-.38,3.58,0,3.58,2.28.67,3.61,1.34s-.95,2.91-.76,4.7c.38,2.46,1.91,3.13,3.43,3.8,1.9.67,2.28,1.79,2.47,4,0,1.12-.38,2.91.89,3.36l.57.07c1.33-.52.76-2.31.76-3.43.19-2.24.57-3.36,2.47-4,1.53-.67,3-1.34,3.43-3.8.19-1.79-2.09-4-.76-4.7s3.61,2.24,3.61-1.34c0-1.79-1.14-2.24-.38-3.58C225.21,256.2,226.73,255.52,224.83,254.63Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T10-T11"
                            d="M224.26,245.75c-.92,0-1.84-1.09-2.58-.63a2.83,2.83,0,0,1-.08.4c-.57,1.11-1.72,1.33-2.67,1.77-1.9.89-1.9,2.88-2.09,5.54-.19,2,1.52,9.52-1.33,9.52h-.7c-2.85,0-1.14-7.53-1.33-9.52-.19-2.66-.19-4.65-2.09-5.54-.95-.44-2.1-.66-2.67-1.77a1.89,1.89,0,0,1-.08-.4c-.74-.45-1.66.63-2.58.63-1.71,0-2.09-1-2.85,1.18-1,2.16-1.14,5.31,1.9,5.12,1.9-.2,3.61-1.77,3.61,1.57-.19,2-.95,3.55,1,4.92,2.09,1.58,3.8,1.19,4.18,4.53a5.8,5.8,0,0,1,0,2.56c0,.79-.76,3.94,1.14,4.33h.32c1.9-.39,1.14-3.54,1.14-4.33a5.8,5.8,0,0,1,0-2.56c.38-3.34,2.09-2.95,4.19-4.53,1.9-1.37,1.14-3,.95-4.92,0-3.34,1.71-1.77,3.61-1.57,3,.19,2.85-3,1.9-5.12C226.35,244.76,226,245.75,224.26,245.75Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T9-T10"
                            d="M227.11,236.45c-1-.89-1.33-1.11-2.66-.67-.38.22-1.33,1.33-1.9.67-.76-1.11,1.71-2.44-.38-4.43h-.32a1.6,1.6,0,0,1-.25.71,9.28,9.28,0,0,1-2.66,1.65,4.3,4.3,0,0,0-2.67,4.23c0,.92,1.33,4-.76,4h-.7c-2.09,0-.76-3.12-.76-4a4.31,4.31,0,0,0-2.66-4.23,9.28,9.28,0,0,1-2.66-1.65,1.48,1.48,0,0,1-.25-.71h-.33c-2.09,2,.38,3.32-.38,4.43-.57.66-1.52-.45-1.9-.67-1.33-.44-1.71-.22-2.66.67-1.9,1.54-.57,3.76.95,5.31,1.52,1.33,1,.22,2.47-.22a1.38,1.38,0,0,1,2.09.44c.57,1.11-.37,2.44,0,3.54.57,1.11,1.72,1.33,2.67,1.77,1.9.89,1.9,2.88,2.09,5.54.19,2-1.52,9.52,1.33,9.52h.7c2.85,0,1.14-7.53,1.33-9.52.19-2.66.19-4.65,2.09-5.54.95-.44,2.1-.66,2.67-1.77.38-1.1-.57-2.43,0-3.54a1.39,1.39,0,0,1,2.09-.44c1.52.44.95,1.55,2.47.22C227.68,240.21,229,238,227.11,236.45Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T8-T9"
                            d="M225.78,223.35c-.76-.18-1.33.92-2.09,1.11-2.18.48-.38-2.31-2-3a2.75,2.75,0,0,1-.66,1.14c-1.72,1.94-3.62,1.29-4.38,4.3-.57,2.14,1.4,9.44-1.27,9.44H215c-2.66,0-.76-7.3-1.33-9.44-.76-3-2.66-2.36-4.37-4.3a2.68,2.68,0,0,1-.67-1.14c-1.61.68.18,3.46-2,3-.76-.19-1.33-1.29-2.09-1.11a2.66,2.66,0,0,0-1.34,2.39l.19,1.84c.38.74,1,.92,1.9,1.29,1.34.18,2.67.18,3.24,1.65.19.92-.38,1.29.19,2.21a9.28,9.28,0,0,0,2.66,1.65,4.31,4.31,0,0,1,2.66,4.23c0,.92-1.33,4,.76,4h.7c2.09,0,.76-3.12.76-4a4.3,4.3,0,0,1,2.67-4.23,9.28,9.28,0,0,0,2.66-1.65c.57-.92,0-1.29.19-2.21.57-1.47,1.9-1.47,3.23-1.65.95-.37,1.52-.55,1.9-1.29l.19-1.84A2.67,2.67,0,0,0,225.78,223.35Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T7-T8"
                            d="M225.21,212.54c-1,0-2.28,1.5-3,.43-.51-.77.78-2.21-.4-2.82a2.57,2.57,0,0,1-.36.52c-1.53,1.66-3.62,1.29-4.38,3.86-.57,1.65.56,8-1.87,7.9-2.43.12-1.3-6.25-1.87-7.9-.76-2.57-2.85-2.21-4.37-3.86a2,2,0,0,1-.36-.52c-1.19.61.1,2-.4,2.82-.76,1.07-2.1-.43-3-.43-1.71,0-3,2.36-2.47,4.29.76,1.93,2.47,1.07,3.8,1.07.76.22,1.33,0,1.91,1.51.38,1.28-.2,1.93,1,3.21,1.71,1.94,3.61,1.29,4.37,4.3.57,2.14-1.33,9.44,1.33,9.44h.38c2.67,0,.7-7.3,1.27-9.44.76-3,2.66-2.36,4.38-4.3,1.14-1.28.57-1.93.95-3.21.57-1.51,1.14-1.29,1.9-1.51,1.33,0,3,.86,3.8-1.07C228.25,214.9,226.92,212.54,225.21,212.54Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T6-T7"
                            d="M223.88,202.4c-1.52.18-1.52.74-2.28-.73a3.41,3.41,0,0,1-.26-.73c-.19.48-.56.79-1.46,1.22a7.26,7.26,0,0,0-3.42,4.6,28.84,28.84,0,0,0-.19,4c0,.92,1.39,2.7-.7,2.82h-.5c-1.65.12-1-1.9-1-2.82a28.84,28.84,0,0,0-.19-4,7.26,7.26,0,0,0-3.42-4.6c-.9-.43-1.27-.74-1.46-1.22a4,4,0,0,1-.25.73c-.76,1.47-.76.91-2.29.73-1.9-.37-2.47.18-2.66,1.65-.19,2.4.76,2.95,2.66,3.31,2.86.55,1.15,1.84,2.48,3.31,1.52,1.65,3.61,1.29,4.37,3.86.57,1.65-.56,8,1.87,7.9,2.43.12,1.3-6.25,1.87-7.9.76-2.57,2.85-2.2,4.38-3.86,1.33-1.47-.38-2.76,2.47-3.31,1.9-.36,2.85-.91,2.66-3.31C226.35,202.58,225.78,202,223.88,202.4Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T5-T6"
                            d="M225.21,192.24c-1.71.37-1.9,1.1-2.66-.37-.36-.68.1-1.52-.76-1.78-.12.65-.2.93-1.33,1.2-1.72.37-2.29-.18-3.24,1.66a8.3,8.3,0,0,0-.57,3.86,1.3,1.3,0,0,1-1.33,1.47H215c-1.26-.43-1.33-.92-1.33-1.47a8.3,8.3,0,0,0-.57-3.86c-.95-1.84-1.52-1.29-3.23-1.66-1.14-.27-1.21-.55-1.34-1.2-.86.26-.4,1.09-.76,1.78-.76,1.47-1,.74-2.66.37-1.9-.19-2.66,2-1.9,3.67.76,2.21,2.85.74,4.37,1.48,1.14.36,1,1.28,1.14,2.2.19,1.47.19,1.84,1.72,2.57a7.26,7.26,0,0,1,3.42,4.6,28.84,28.84,0,0,1,.19,4c0,.92-.63,2.94,1,2.82h.5c2.09-.12.7-1.9.7-2.82a28.84,28.84,0,0,1,.19-4,7.26,7.26,0,0,1,3.42-4.6c1.53-.73,1.53-1.1,1.71-2.57.19-.92,0-1.84,1.15-2.2,1.52-.74,3.61.73,4.37-1.48C227.87,194.26,227.11,192.05,225.21,192.24Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T4-T5"
                            d="M225.59,183.57c-.76-.36-1.9.37-2.85.37a1.78,1.78,0,0,0-1.52-2.76H221a2.58,2.58,0,0,1-.73.55c-1.53.92-2.48,1.29-3.24,2.94-.38,1.29-.95,2-.95,3.31.19.74.76,1.29-.19,1.66h-1.46c-1-.37-.38-.92-.19-1.66,0-1.28-.57-2-1-3.31-.76-1.65-1.71-2-3.23-2.94a2.58,2.58,0,0,1-.73-.55h-.22a1.78,1.78,0,0,0-1.52,2.76c-1,0-2.1-.73-2.86-.37-.95.37-2.09,2.58-1.33,3.5,1.53,1.65,4-1.29,4.95,2.2.38,1.29,0,1.66,1.52,2,1.71.37,2.28-.18,3.23,1.66a8.3,8.3,0,0,1,.57,3.86c0,.55.07,1,1.33,1.47h.32a1.3,1.3,0,0,0,1.33-1.47,8.3,8.3,0,0,1,.57-3.86c.95-1.84,1.52-1.29,3.24-1.66,1.52-.36,1.14-.73,1.52-2,1-3.49,3.42-.55,4.94-2.2C227.68,186.15,226.54,183.94,225.59,183.57Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T3-T4"
                            d="M226.73,173.28c-.16-.15-3.53.73-4.5.47-1.09.15-2.45-.13-3.49.5s-2,.91-2.15,1.88c0,.28-.32,1.84-1.09,2l-.77-.07c-.62,0-1.12-1.6-1.12-1.86-.19-1-.89-1.37-2-1.92s-2.4-.35-3.49-.5c-1,.25-4.34-.62-4.5-.47-.76.55-.19,3.31.38,3.68,1.14.91,2.86-.19,3.81.73,1.71,1.29.19,2.94,2.28,4,1.52.92,2.47,1.29,3.23,2.94.38,1.29,1,2,1,3.31-.19.74-.76,1.29.19,1.66h1.46c1-.37.38-.92.19-1.66,0-1.28.57-2,.95-3.31.76-1.65,1.71-2,3.24-2.94,2.09-1.1.57-2.75,2.28-4,.95-.92,2.66.18,3.8-.73C226.92,176.59,227.49,173.83,226.73,173.28Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T2-T3"
                            d="M223.88,166.81c-.5-.25-.57-1.13-1.35-.87a2.89,2.89,0,0,1-.17,1.3c-.58,1.66-2.67,1.47-4,1.66-1.71.18-1.9.55-1.71,2.2a2,2,0,0,1-1.14,2h-.7a2,2,0,0,1-1.14-2c.19-1.65,0-2-1.71-2.2-1.33-.19-3.43,0-4-1.66a2.89,2.89,0,0,1-.17-1.3c-.79-.26-.85.62-1.35.87-1.14.27-1.71-.42-2.66.41a2.35,2.35,0,0,0-.19,2.48c.76.82,2.09.55,2.66,1.24.76.82-.57,2.07,1.52,2.75,1.14.28,2.67-.13,3.81.56s1.84,1,2,1.92c0,.26.5,1.89,1.12,1.86l.77.07c.77-.13,1.09-1.69,1.09-2,.19-1,1-1.33,2.15-1.88s2.67-.28,3.81-.56c2.09-.68.76-1.93,1.52-2.75.57-.69,1.9-.42,2.66-1.24a2.35,2.35,0,0,0-.19-2.48C225.59,166.39,225,167.08,223.88,166.81Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_T1-T2"
                            d="M226.16,158.42c-.76.18-.95.36-.76.73h-.3a5.66,5.66,0,0,0,.49.37c-1.27,1.23-4.31,1-6.09,2-1.52.73-2.53,4.41-3.8,4.41h-1.08c-1.27,0-2.28-3.68-3.8-4.41-1.78-1-4.82-.74-6.09-2a5.66,5.66,0,0,0,.49-.37h-.3c.19-.37,0-.55-.76-.73-1.14-.19-1.52.92-1.71,2-.57,3.49,2.28,2.21,4.18,3.12s.76,2.39,1.33,3.68c.57,1.66,2.67,1.47,4,1.66,1.71.18,1.9.55,1.71,2.2a2,2,0,0,0,1.14,2h.7a2,2,0,0,0,1.14-2c-.19-1.65,0-2,1.71-2.2,1.33-.19,3.42,0,4-1.66.57-1.29-.58-2.76,1.33-3.68s4.75.37,4.18-3.12C227.68,159.34,227.3,158.23,226.16,158.42Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_C8-T1"
                            d="M230.85,156.7c.76-.79-.19-2.57-.95-3.06-1.52-.74-3,.73-4.82.24l-.31-.6-.14,0a3.46,3.46,0,0,0-2.58,1.41c-.11.24-.22.59-.43.71a.94.94,0,0,1-.75.24c-.65,0-.86-.59-1.4-.71a2.82,2.82,0,0,0-1.29-.47,7.22,7.22,0,0,0-1.61,0h-3.44a7.22,7.22,0,0,0-1.61,0,2.78,2.78,0,0,0-1.29.47c-.54.12-.76.71-1.4.71a.93.93,0,0,1-.75-.24c-.22-.12-.33-.47-.43-.71a3.72,3.72,0,0,0-1.43-1.12l0,0-.95.24c-1.78.49-3.3-1-4.82-.24-.76.49-2.54,1.65-.76,3.18.76.74,9.38-.24,5.07,2.7,1.27,1.22,4.31,1,6.09,2,1.52.73,2.53,4.41,3.8,4.41h1.08c1.27,0,2.28-3.68,3.8-4.41,1.78-1,4.82-.73,6.09-2C221.28,156.58,230.09,157.44,230.85,156.7Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_C7-C8"
                            d="M228.28,149.42a4,4,0,0,0-1.81-2.4c-.26-.14-.49-.31-.74-.47a5.39,5.39,0,0,0-1.07-.36.69.69,0,0,0-.25,0c-.21,0-.43.35-.75.47a4,4,0,0,1-.75.59,3,3,0,0,1-1.29.83,3.16,3.16,0,0,1-1.83,0,6.74,6.74,0,0,0-1.4-.59c-.21-.12-.32-.24-.53-.35s-.43-.24-.65-.36a15.49,15.49,0,0,0-2.36,0,15.62,15.62,0,0,0-2.37,0c-.21.12-.43.12-.65.36s-.32.23-.53.35a7,7,0,0,0-1.4.59,3.16,3.16,0,0,1-1.83,0,3.11,3.11,0,0,1-1.29-.83,4.35,4.35,0,0,1-.75-.59c-.32-.12-.54-.47-.75-.47a.66.66,0,0,0-.25,0,5.12,5.12,0,0,0-1.08.37c-.24.15-.46.32-.71.45a4,4,0,0,0-1.83,2.41,2.53,2.53,0,0,0,1.18,2.6,1.62,1.62,0,0,0,.43.35c.32.12.32,0,.54,0,.43-.12.54.24.64.47s.44.36.87.48a3.45,3.45,0,0,1,2.58,1.41c.1.24.21.59.43.71a.93.93,0,0,0,.75.24c.64,0,.86-.59,1.4-.71a2.78,2.78,0,0,1,1.29-.47,7.22,7.22,0,0,1,1.61,0h3.44a7.22,7.22,0,0,1,1.61,0,2.82,2.82,0,0,1,1.29.47c.54.12.75.71,1.4.71a.94.94,0,0,0,.75-.24c.21-.12.32-.47.43-.71a3.46,3.46,0,0,1,2.58-1.41c.43-.12.65-.12.86-.48s.22-.59.65-.47c.21,0,.21.12.53,0a1.47,1.47,0,0,0,.43-.35A2.53,2.53,0,0,0,228.28,149.42Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_C6-C7"
                            d="M228,144.81c-.1-.59-.32-1.3-.86-1.53a1.87,1.87,0,0,0-.86-.12c-.21-.12-.53-.12-.64-.24-.54-.23-.54-1.06-1-1.41a1.24,1.24,0,0,0-.18-.14l-.47.14a6.53,6.53,0,0,1-1.61.7c-1.07.24-1.94.36-2.79-.47a2,2,0,0,0-.76-.59,1.4,1.4,0,0,0-.64.24c-.11,0-.22.12-.32.12s-.11.11-.11.23a1.44,1.44,0,0,1-.65.24,1.3,1.3,0,0,1-1.29-.24c-.21-.23-.32-.59-.75-.59h-.43c-.43,0-.54.36-.76.59a1.28,1.28,0,0,1-1.28.24,1.44,1.44,0,0,1-.65-.24c0-.12-.11-.12-.11-.23s-.21-.12-.32-.12a1.4,1.4,0,0,0-.64-.24,2,2,0,0,0-.76.59c-.86.83-1.72.71-2.79.47a6.53,6.53,0,0,1-1.61-.7l-.47-.14a2.2,2.2,0,0,0-.18.14c-.43.35-.43,1.18-1,1.41-.1.12-.43.12-.64.24a1.89,1.89,0,0,0-.86.12c-.54.23-.75.94-.86,1.53a2.86,2.86,0,0,0,.11,1.66c.1.59.43.82,1,.71a4.86,4.86,0,0,0,1.29-.71,1.46,1.46,0,0,1,1.19-.24c.21,0,.43.35.75.47a4.35,4.35,0,0,0,.75.59,3.11,3.11,0,0,0,1.29.83,3.16,3.16,0,0,0,1.83,0,7,7,0,0,1,1.4-.59c.21-.12.32-.24.53-.35s.44-.24.65-.36a15.62,15.62,0,0,1,2.37,0,15.49,15.49,0,0,1,2.36,0c.22.12.43.12.65.36s.32.23.53.35a6.74,6.74,0,0,1,1.4.59,3.16,3.16,0,0,0,1.83,0,3,3,0,0,0,1.29-.83,4,4,0,0,0,.75-.59c.32-.12.54-.47.75-.47a1.45,1.45,0,0,1,1.19.24,4.86,4.86,0,0,0,1.29.71c.53.11.86-.12,1-.71A3,3,0,0,0,228,144.81Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_C5-C6"
                            d="M226.67,138.08a1.09,1.09,0,0,0-.43-.59c-.1-.12-.32-.12-.43-.12a1.28,1.28,0,0,1-1-.35,5.82,5.82,0,0,1-.43-1.18,3.49,3.49,0,0,0,0-1.07c-.08-.27-.23-.68-.49-.75a3.88,3.88,0,0,1-.58.87,3,3,0,0,0-.75.59c-.22.12-.43.35-.65.47a5.73,5.73,0,0,1-1.5.48c-.22,0-.65-.12-1-.12s-.32-.12-.43-.24-.43-.35-.65-.35-.53.35-.64.59,0,.23-.22.35a1.62,1.62,0,0,1-.75.12,1.54,1.54,0,0,1-1.18-.47c-.22-.36,0-.71-.54-.71h-.43c-.54,0-.32.35-.54.71a1.54,1.54,0,0,1-1.18.47,1.67,1.67,0,0,1-.75-.12c-.21-.12-.11-.23-.21-.35s-.43-.71-.65-.59-.43.35-.65.35-.21.12-.43.24-.75.12-1,.12a5.69,5.69,0,0,1-1.51-.48c-.21-.12-.43-.35-.64-.47a3.26,3.26,0,0,0-.76-.59,4,4,0,0,1-.56-.85,2,2,0,0,0-.51.73,3.49,3.49,0,0,0,0,1.07,5.32,5.32,0,0,1-.44,1.18,1.24,1.24,0,0,1-1,.35.59.59,0,0,0-.43.12,1.14,1.14,0,0,0-.43.59c-.11.47-.43,1.3,0,1.65s.64.12,1,0c.65-.11.43.48.54,1s.76.71,1.19.83a6.53,6.53,0,0,0,1.61.7c1.07.24,1.93.36,2.79-.47a2,2,0,0,1,.76-.59,1.4,1.4,0,0,1,.64.24c.11,0,.22.12.32.12s.11.11.11.23a1.44,1.44,0,0,0,.65.24,1.28,1.28,0,0,0,1.28-.24c.22-.23.33-.59.76-.59h.43c.43,0,.54.36.75.59a1.3,1.3,0,0,0,1.29.24,1.44,1.44,0,0,0,.65-.24c0-.12.11-.12.11-.23s.21-.12.32-.12a1.4,1.4,0,0,1,.64-.24,2,2,0,0,1,.76.59c.85.83,1.72.71,2.79.47a6.53,6.53,0,0,0,1.61-.7c.43-.12,1.08-.24,1.19-.83s-.11-1.06.54-1c.32.12.64.36,1,0S226.78,138.55,226.67,138.08Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_C4-C5"
                            d="M225.38,131.7a.92.92,0,0,1-1-.95,1.52,1.52,0,0,0-.22-1.06,2.13,2.13,0,0,0-.66-.5c-.08,0-.17.07-.31.15a2.56,2.56,0,0,0-.86.23,5.67,5.67,0,0,1-3.11,1,2.19,2.19,0,0,1-1.19-.47c-.43-.24-1-.59-1.4-.36-.21.12-.21.36-.43.48s-.53.11-.64.11c-.43,0-.32-.23-.43-.47s-.32-.23-.32-.35c0,.12-.22.12-.33.35s0,.47-.43.47c-.1,0-.54,0-.64-.11s-.22-.36-.43-.48c-.43-.23-1,.12-1.4.36a2.16,2.16,0,0,1-1.18.47,5.68,5.68,0,0,1-3.12-1,2.5,2.5,0,0,0-.86-.23c-.14-.08-.23-.11-.31-.15a2.44,2.44,0,0,0-.66.5,1.58,1.58,0,0,0-.21,1.06.92.92,0,0,1-1,.95,1,1,0,0,0-1.07.71,2.31,2.31,0,0,0,.1.82c.11.36.22.36.54.6.22,0,.43.11.65.11a1.38,1.38,0,0,0,.64-.23c.65-.12.75.82,1.18,1.18a3.26,3.26,0,0,1,.76.59c.21.12.43.35.64.47a5.69,5.69,0,0,0,1.51.48c.21,0,.64-.12,1-.12s.33-.12.43-.24.43-.35.65-.35.54.35.65.59,0,.23.21.35a1.67,1.67,0,0,0,.75.12,1.54,1.54,0,0,0,1.18-.47c.22-.36,0-.71.54-.71h.43c.54,0,.32.35.54.71a1.54,1.54,0,0,0,1.18.47,1.62,1.62,0,0,0,.75-.12c.22-.12.11-.23.22-.35s.43-.71.64-.59.44.35.65.35.22.12.43.24.75.12,1,.12a5.73,5.73,0,0,0,1.5-.48c.22-.12.43-.35.65-.47a3,3,0,0,1,.75-.59c.43-.36.54-1.3,1.18-1.18a1.42,1.42,0,0,0,.65.23c.21,0,.43-.11.65-.11.32-.24.42-.24.53-.6a2.11,2.11,0,0,0,.11-.82A1,1,0,0,0,225.38,131.7Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_C3-C4"
                            d="M225.81,125.79c-.53-.23-1,0-1.29-.59s.11-.82.11-1.3a1,1,0,0,0-.32-.94,1.52,1.52,0,0,0-.44-.38,10.31,10.31,0,0,1-1.29,1.21,2.49,2.49,0,0,1-1,.35c-.33.12-.54.24-.86.36a4.77,4.77,0,0,1-1.83-.12c-.22-.12-.54-.24-.75-.36a3.23,3.23,0,0,1-.86-.59c-.65-.47-.86.71-1.62.59-.32-.12-.75-.35-.85-.71v0c-.1.36-.53.59-.86.71-.75.12-1-1.06-1.61-.59a3.67,3.67,0,0,1-.86.59c-.21.12-.54.24-.75.36a4.77,4.77,0,0,1-1.83.12c-.32-.12-.54-.24-.86-.36a2.6,2.6,0,0,1-1-.35,10.26,10.26,0,0,1-1.28-1.21,1.51,1.51,0,0,0-.43.38,1,1,0,0,0-.33.94c0,.48.33.83.11,1.3s-.75.36-1.29.59-.43.83-.43,1.3.21.95.75.95c.22,0,.32-.24.54-.24.32-.23.32-.11.43.24a2,2,0,0,0,.86,1.06c.11.12.21.12.43.24a2.5,2.5,0,0,1,.86.23,5.68,5.68,0,0,0,3.12,1,2.16,2.16,0,0,0,1.18-.47c.43-.24,1-.59,1.4-.36.21.12.21.36.43.48s.54.11.64.11c.43,0,.33-.23.43-.47s.33-.23.33-.35c0,.12.21.12.32.35s0,.47.43.47c.11,0,.54,0,.64-.11s.22-.36.43-.48c.43-.23,1,.12,1.4.36a2.19,2.19,0,0,0,1.19.47,5.67,5.67,0,0,0,3.11-1,2.56,2.56,0,0,1,.86-.23c.22-.12.32-.12.43-.24a2,2,0,0,0,.86-1.06c.11-.36.11-.47.43-.24.22,0,.33.24.54.24.54,0,.75-.36.75-.95S226.24,126,225.81,125.79Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_C2-C3"
                            d="M227.21,118.59a4.94,4.94,0,0,1-1.72-1,2.18,2.18,0,0,1-.86-.58c-.43-.24-.54-.48-.32-1,0-.35.1-.47-.11-.83-.11-.12-.22-.23-.43-.47a5.75,5.75,0,0,0-.66-.31,1.44,1.44,0,0,1-.74,0,1.57,1.57,0,0,1-.54-.3,6.12,6.12,0,0,1-1.5-.29h-1.18a2.8,2.8,0,0,0-1.72.36c-.54.24-.86.59-1.51.59a1.75,1.75,0,0,1-1.07-.24,1.8,1.8,0,0,1-1.08.24c-.64,0-1-.35-1.5-.59a2.83,2.83,0,0,0-1.72-.36h-1.19a6,6,0,0,1-1.49.29,1.62,1.62,0,0,1-.55.3,1.34,1.34,0,0,1-.74,0,5.05,5.05,0,0,0-.66.31c-.21.24-.32.35-.43.47-.21.36-.11.47-.11.83.22.47.11.71-.32,1a2.34,2.34,0,0,1-.86.58,4.94,4.94,0,0,1-1.72,1,.58.58,0,0,0-.65.35c-.32.36-.43.59-.21,1s.43.59.64.94a1,1,0,0,0,1,.36c.76-.24,1.19-1,1.83-1.42.11-.23.32-.47.54-.12s-.22.83-.43,1.07a1.09,1.09,0,0,0-.33.82,1.77,1.77,0,0,0,.76.83,19.48,19.48,0,0,0,1.5,1.42,2.6,2.6,0,0,0,1,.35c.32.12.54.24.86.36a4.77,4.77,0,0,0,1.83-.12c.21-.12.54-.24.75-.36a3.67,3.67,0,0,0,.86-.59c.65-.47.86.71,1.61.59.33-.12.76-.35.86-.71v0c.1.36.53.59.85.71.76.12,1-1.06,1.62-.59a3.23,3.23,0,0,0,.86.59c.21.12.53.24.75.36a4.77,4.77,0,0,0,1.83.12c.32-.12.53-.24.86-.36a2.49,2.49,0,0,0,1-.35,17.87,17.87,0,0,0,1.51-1.42,1.81,1.81,0,0,0,.75-.83,1.12,1.12,0,0,0-.32-.82c-.22-.24-.64-.59-.43-1.07s.43-.11.54.12c.64.47,1.07,1.18,1.82,1.42a1,1,0,0,0,1-.36c.22-.35.43-.59.65-.94s.11-.59-.22-1A.56.56,0,0,0,227.21,118.59Z"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                        <SpinePath pathId="V_DLS_C1-C2"
                            d="M214.85,114.57a1.75,1.75,0,0,0,1.07.24c.65,0,1-.35,1.51-.59a2.8,2.8,0,0,1,1.72-.36,14,14,0,0,1,2.15,0c.43.12.64.48,1.07.59a1.35,1.35,0,0,0,1,0,1.56,1.56,0,0,0,.75-.94,1.78,1.78,0,0,1,.32-1.06c.65-.59,1.51.11,2.15.35a3.42,3.42,0,0,0,1.72.59c.54,0,.86,0,1.19-.47a1.67,1.67,0,0,0,.53-.71,2.57,2.57,0,0,0,.54-1.54,3,3,0,0,0-.21-1.06,6.5,6.5,0,0,0-.33-.83c-.21-.47-.53-.7-.86-.59s-.53.36-.86.48a9,9,0,0,1-1.71-.12c-.54-.12-1.4-.24-1.51-.83,0-.35.43-.94.22-1.3a6.54,6.54,0,0,0-2.26-.35c-.32.12-.65.23-1.08.35s-.53.36-1,.36-.64.11-1,.11a2.7,2.7,0,0,0-1,.12h-.65c-.53-.23-1.18,0-1.61-.47-.32-.24-.43-.47-.75-.59s-.43,0-.65,0h-1.07c-.22,0-.43-.12-.65,0s-.43.35-.75.59c-.43.47-1.07.24-1.61.47h-.64a2.72,2.72,0,0,0-1-.12c-.33,0-.65-.11-1-.11s-.64-.24-1-.36-.75-.24-1.07-.35a6.54,6.54,0,0,0-2.26.35c-.22.36.22,1,.22,1.3-.11.59-1,.71-1.51.83a9.05,9.05,0,0,1-1.72.12c-.32-.12-.54-.36-.86-.48s-.65.12-.86.59a5.37,5.37,0,0,0-.32.83,3,3,0,0,0-.22,1.06,2.64,2.64,0,0,0,.54,1.54,1.68,1.68,0,0,0,.54.71c.32.47.64.47,1.18.47a3.38,3.38,0,0,0,1.72-.59c.65-.24,1.51-.94,2.15-.35a1.71,1.71,0,0,1,.32,1.06,1.61,1.61,0,0,0,.76.94,1.33,1.33,0,0,0,1,0c.43-.11.65-.47,1.08-.59a14,14,0,0,1,2.15,0,2.83,2.83,0,0,1,1.72.36c.54.24.86.59,1.5.59a1.8,1.8,0,0,0,1.08-.24"
                            transform="translate(-31.03 -18.52)"
                            causeStr={this.props.causeStr} selectedCauses={this.props.selectedCauses} selectCause={this.props.selectCause} deleteCause={this.props.deleteCause} />
                    </g>
                    <g id="Decoration">
                        <path
                            d="M212.58,171.63a38.05,38.05,0,0,0,.88,5.3c.1.53.94.31.81-.22-.44-1.73-1.09-3.36-1.42-5.12,0-.16-.28-.12-.27,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M216.71,171.59c-.28,1.67-.3,3.36-.59,5a.42.42,0,1,0,.83.12c.2-1.69,0-3.41,0-5.1,0-.16-.25-.2-.27,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M218.46,180.43a16.19,16.19,0,0,0-2.29,6.22.17.17,0,0,0,.33.09c.34-1,.33-2,.66-3a24.57,24.57,0,0,1,1.37-3.27c0-.05-.05-.08-.07,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.24,181c1.65,1.8,1.14,4.2,1.86,6.34a.22.22,0,0,0,.42-.06c0-2.23-.39-4.85-2.21-6.34-.05,0-.11,0-.07.06Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M217.85,189.48a9.67,9.67,0,0,0-1.29,5.43c0,.16.28.23.31,0a18.05,18.05,0,0,1,1.12-5.39c0-.09-.09-.17-.14-.08Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.46,190.35a27.07,27.07,0,0,1,1,4.6.18.18,0,0,0,.35,0,10.19,10.19,0,0,0-1.25-4.64c0-.09-.17,0-.14.08Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M217.25,199.78a14.23,14.23,0,0,0-1.12,8.26c0,.25.42.18.42-.06,0-2.78-.12-5.46.91-8.11,0-.13-.16-.21-.21-.09Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.65,200a29.35,29.35,0,0,1,.87,3.92c.08,1.42.14,2.85.34,4.26,0,.23.39.16.39,0a17.87,17.87,0,0,0-1.47-8.19c0-.07-.14,0-.13.06Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M217.75,211A7.81,7.81,0,0,0,216.5,216a.22.22,0,0,0,.43,0,12.93,12.93,0,0,1,.91-5,.05.05,0,0,0-.09-.05Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M212.62,211.61c.89,1.18.75,2.63.79,4a.2.2,0,0,0,.4,0,5.46,5.46,0,0,0-1.12-4.07s-.11,0-.07.05Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M217.53,221.47a13.94,13.94,0,0,0-1.15,6.16c0,.27.41.27.42,0a16.28,16.28,0,0,1,1-6c.08-.18-.18-.34-.27-.16Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M212.51,222.35c1.32,1.73,1.09,3.88,1.14,5.92a.21.21,0,0,0,.42,0c.18-2.06,0-4.38-1.52-6,0,0-.06,0,0,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M217.35,232.81a7.92,7.92,0,0,0-1.18,5.92c0,.28.48.21.47-.06-.07-2.06-.24-3.91.84-5.78a.08.08,0,0,0-.13-.08Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.77,233.45a7.49,7.49,0,0,1,1.06,5,.22.22,0,0,0,.44.06,6.18,6.18,0,0,0-1.34-5.19c-.07-.1-.23,0-.16.09Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M217.94,244.31c-1.3,2.16-1.32,5.12-1.34,7.56,0,.19.31.24.35,0,.45-2.55.08-5.11,1.09-7.56,0-.06-.08-.1-.1-.05Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.08,244.58a30.31,30.31,0,0,1,1.27,7.14.2.2,0,0,0,.39,0,16.27,16.27,0,0,0-1.53-7.19c0-.07-.15,0-.13.05Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M212.87,259.52c.8,1.13.67,2.55.84,3.85,0,.18.3.13.3,0a5.76,5.76,0,0,0-.95-3.95c-.08-.11-.27,0-.19.14Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M217.28,264.15a5.3,5.3,0,0,0-1.23,3.51c0,.29.42.28.44,0a6.21,6.21,0,0,1,.93-3.36c.08-.1,0-.24-.14-.15Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M212.93,269.84c1,1.48.71,3.31.93,5a.2.2,0,0,0,.39,0c0-1.76,0-3.7-1.12-5.16-.09-.12-.29,0-.2.16Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M217.51,269.42a9.51,9.51,0,0,0-1.35,4.75c0,.31.44.3.48,0a12,12,0,0,1,1.05-4.65c.07-.11-.1-.21-.18-.1Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M213.2,279.69a7.83,7.83,0,0,1,.76,3.2c0,.36.6.37.57,0a6.12,6.12,0,0,0-1.17-3.33c-.07-.09-.21,0-.16.13Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M217,279.51a5.51,5.51,0,0,0-1.13,3.75.21.21,0,0,0,.4,0c.14-.6.12-1.23.24-1.84a7.39,7.39,0,0,1,.65-1.81c0-.11-.1-.2-.16-.1Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.34,166.27c1.29,1.07,1.17,2.64,1.26,4.16a.2.2,0,0,0,.4,0c-.05-1.53-.24-3.3-1.53-4.3-.09-.08-.23.06-.13.14Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M217.68,166.15a3.78,3.78,0,0,0-1.09,2,5,5,0,0,0-.31,2.48.19.19,0,0,0,.37,0c0-1.3.15-3.33,1.13-4.3.06-.07,0-.15-.1-.1Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M209.82,159.85a7.51,7.51,0,0,1,2.23,2.79.12.12,0,1,0,.2-.12,6,6,0,0,0-2.34-2.84c-.1-.06-.19.1-.09.17Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M220.43,159.73a7.12,7.12,0,0,0-2.65,3c-.06.15.19.25.27.11a8.9,8.9,0,0,1,2.44-3s0-.1-.06-.07Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M205.79,354.24c-1.2-1.8-1.5-4.9.74-5.72l1.34.49c-1-1.8-4.17-1.64-4.77.49a3.4,3.4,0,0,0,.6,3.11,10.09,10.09,0,0,0,1.19,1.14,13.3,13.3,0,0,1,1.49.82"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#fff" }} />
                        <path
                            d="M203.4,363.4c0-.33-.3-.49-.3-.65a.68.68,0,0,1-.14-.49,1.39,1.39,0,0,1,.14-.82c.3-.49,1.05-2,1.79-1.47l.47.25a3.56,3.56,0,0,1,.42.89,3,3,0,0,1,0,2.29c-.29.82-1.19.49-1.78.33Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#fff" }} />
                        <path
                            d="M204,372.56c-.6-.49.29-1.47.74-1.8a1.12,1.12,0,0,1,1.64.33l.2.54a1.83,1.83,0,0,1-.65,1.25,1.51,1.51,0,0,1-1.78,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#fff" }} />
                        <path
                            d="M206.1,375.78a1.11,1.11,0,0,0-.46-.11c-.45,0-1,.16-1.19.65-.45,1,1.34,2,2.08,1.8a1.15,1.15,0,0,0,.3-2.13Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#fff" }} />
                        <path
                            d="M208.1,349a2.94,2.94,0,0,0-4.79-.36A3.48,3.48,0,0,0,203,352a5.77,5.77,0,0,0,3.47,3c.41.15.66-.41.4-.69-.64-.67-1.53-.92-2.2-1.57a3.2,3.2,0,0,1-1-3.11c.38-2.06,3.31-1.92,4.32-.54a.09.09,0,0,0,.16-.1Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M206,354.21c-.92-1.74-1.38-4.52.8-5.48.25-.11.07-.55-.19-.45-2.48,1-2.06,4.2-.74,6a.07.07,0,0,0,.13-.07Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M203.7,359c1.7.22,2.41,2.65,2,4-.27,1-1.31.4-1.79.08a2.86,2.86,0,0,1-1-1.73c-.13-.38-.73-.44-.82,0a2.53,2.53,0,0,0,1.38,2.55c.55.36,1.94.8,2.46.14,1.3-1.62-.14-5.14-2.24-5.32-.16,0-.16.23,0,.25Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M205.1,359.86c-.73-.43-1.34.4-1.71.93a2.48,2.48,0,0,0-.56,1.22c-.07.64.28.91.44,1.47a.3.3,0,0,0,.58-.08c0-.71-.77-1.12-.34-1.93.24-.45.76-1.72,1.46-1.39.15.07.28-.14.13-.22Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M205,368.54a3.64,3.64,0,0,1,1.48,3.15,1.2,1.2,0,0,1-2.11.67,3,3,0,0,1-.19-2.66.31.31,0,0,0-.57-.24c-1.16,1.85.28,5.14,2.67,3.71a2.24,2.24,0,0,0,.6-2.53,4.33,4.33,0,0,0-1.76-2.26c-.09-.06-.21.09-.12.16Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M206.58,371.07a1.28,1.28,0,0,0-2-.44c-.55.38-1.65,1.72-.62,2.22a.34.34,0,0,0,.46-.46c-.24-.47.11-.88.44-1.23a1,1,0,0,1,1.6,0c0,.05.13,0,.1-.05Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M207.3,376.28c-.73-.56-2.07-1.39-2.82-.33-.62.85.05,1.68.81,2.14a1.69,1.69,0,0,0,2.29-.17,1.43,1.43,0,0,0-.51-2.25c-.4-.14-.55.41-.27.62a.82.82,0,0,1,.17,1.3c-.36.4-1,.15-1.36,0s-1.07-.81-.62-1.36,1.66-.09,2.26.18a0,0,0,1,0,.05-.08Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.72,347.41c.91,1.4.39,2.89.46,4.44a1.75,1.75,0,0,0,1.37,1.65,1.87,1.87,0,0,0,1.94-1.27c.57-1.22-.19-2.55,0-3.8,0-.35-.45-.51-.54-.15a5.39,5.39,0,0,0,.05,2.26,3,3,0,0,1-.19,1.63,1.11,1.11,0,0,1-2.11-.13,9.49,9.49,0,0,1-.14-2.77,3.37,3.37,0,0,0-.7-1.93c-.06-.08-.18,0-.13.07Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.3,357.86a5.29,5.29,0,0,1,.66,3,5.57,5.57,0,0,0,.23,1.62,1.81,1.81,0,0,0,3.54.25c.69-1.71-.38-3.42-.07-5.19,0-.2-.25-.29-.31-.09a5.36,5.36,0,0,0,0,2.64,4.36,4.36,0,0,1,.06,2.21c-.31,1-1.39,1.86-2.39,1s-.84-2.35-.86-3.37a4.06,4.06,0,0,0-.81-2.14,0,0,0,0,0-.07,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M213.17,367.49c0,1-.38,2.16.08,3.08a1.88,1.88,0,0,0,1.89,1.07c1.62-.37,1.92-2.94,2.12-4.27,0-.2-.27-.3-.32-.09-.3,1.21-.47,2.73-1.36,3.67s-1.9,0-2.18-.83a9.63,9.63,0,0,1-.11-2.63.06.06,0,1,0-.12,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M213,373.72c.21.54,0,1,.08,1.49a5.53,5.53,0,0,0,.39,1.19,2.73,2.73,0,0,0,1.69,1.55,1.52,1.52,0,0,0,1.67-.88c.5-.83.24-2,.17-2.88a.22.22,0,0,0-.43,0c0,.64,0,1.27,0,1.91a1.24,1.24,0,0,1-2.15.91,4,4,0,0,1-1-1.7c-.19-.56,0-1.09-.28-1.64,0-.05-.13,0-.11.05Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M206.32,384.81c1.84-.91,2.26,1.8,3.55,2.42a2.16,2.16,0,0,0,2.37-.71c.9-.95-.56-2.56.38-3.27a4.92,4.92,0,0,0,1.26-1.42c.07-.12,0-.36,0-.45a1.58,1.58,0,0,1,1.19-1.95c.18-.05.16-.36-.05-.34a1.65,1.65,0,0,0-1.71,1.42,1.41,1.41,0,0,0,0,.5c.09,1-.74,1.62-1.43,2.11a.85.85,0,0,0-.37.69c0,1,1.53,1.61-.18,2.8-1.39,1-2.07-.61-2.75-1.4s-1.41-1.24-2.46-.7c-.19.1,0,.4.18.3Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M216,379.32c1.25.89,0,1.83.59,2.73.26.41.61.4.75,1.05a1.21,1.21,0,0,0,.5.82c.57.48.55,1.25,1.17,1.63s1.68-.05,2.25-.45c.33-.23,0-.78-.32-.55s-1.57.94-1.85.14a2.36,2.36,0,0,0-.27-.68,5,5,0,0,0-.78-.65c-.32-.24-.17-.86-.48-1.17s-.79-.3-.64-1a3.09,3.09,0,0,0,0-1,1.48,1.48,0,0,0-.87-1.06c-.07,0-.13.06-.07.11Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212,393.71a11.47,11.47,0,0,0,2.55.22c1.16-.08,2.26-.17,3.42-.16a.28.28,0,0,0,0-.56,22.38,22.38,0,0,0-2.59.17c-.69.09-1.33.27-2,.3-.45,0-.9-.07-1.34-.08-.06,0-.08.1,0,.11Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M213.79,392.21a4.81,4.81,0,0,0,2.42.31.21.21,0,0,0,0-.42,9,9,0,0,1-2.37,0c-.08,0-.11.09-.05.13Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M214.17,394.19a1.76,1.76,0,0,0,2,.08c.25-.12,0-.5-.22-.38a1.61,1.61,0,0,1-1.6.06c-.14-.1-.29.12-.18.24Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M206.06,345c-1.08.26-2.22-.89-3.06-1.42a3.37,3.37,0,0,1-1.72-2.9.41.41,0,0,0-.82,0,3.47,3.47,0,0,0,1.9,3.27c1,.56,2.56,1.8,3.77,1.23.1-.05,0-.2-.07-.18Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M224.4,354.24c1.19-1.8,1.48-4.9-.75-5.72l-1.34.49c1-1.8,4.17-1.64,4.77.49a3.4,3.4,0,0,1-.6,3.11,9.37,9.37,0,0,1-1.19,1.14,13.3,13.3,0,0,0-1.49.82"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#fff" }} />
                        <path
                            d="M226.78,363.4c0-.33.3-.49.3-.65a.68.68,0,0,0,.14-.49,1.39,1.39,0,0,0-.14-.82c-.3-.49-1.05-2-1.79-1.47l-.47.25a3.56,3.56,0,0,0-.42.89,3,3,0,0,0,0,2.29c.29.82,1.19.49,1.78.33Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#fff" }} />
                        <path
                            d="M226.18,372.56c.6-.49-.29-1.47-.74-1.8a1.12,1.12,0,0,0-1.64.33l-.2.54a1.83,1.83,0,0,0,.65,1.25,1.51,1.51,0,0,0,1.78,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#fff" }} />
                        <path
                            d="M224.08,375.78a1.11,1.11,0,0,1,.46-.11c.45,0,1.05.16,1.2.65.44,1-1.34,2-2.09,1.8a1.15,1.15,0,0,1-.3-2.13Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#fff" }} />
                        <path
                            d="M222.24,349.06c1-1.41,3.53-1.45,4.25.3a3,3,0,0,1-.7,3.12c-.73.76-1.72,1-2.43,1.8-.26.28,0,.84.4.69,2.45-.94,4.92-3.6,3.17-6.3-1.13-1.74-3.89-1.38-4.85.29a.09.09,0,0,0,.16.1Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M224.31,354.28c1.32-1.8,1.75-5-.74-6-.26-.1-.44.34-.19.45,2.18,1,1.72,3.74.8,5.48a.07.07,0,0,0,.13.07Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M226.48,358.7c-1.9.16-3.63,3.59-2.37,5.16.56.7,1.67.51,2.38.14a2.6,2.6,0,0,0,1.59-2.67.43.43,0,0,0-.82,0c-.39,1.12-.91,2-2.23,2.21-1.08.14-.62-2.2-.5-2.6a2.82,2.82,0,0,1,1.95-2c.16,0,.17-.27,0-.25Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M225.21,360.08c.67-.32,1.17.85,1.41,1.29a1.45,1.45,0,0,1,0,1.3c-.09.29-.27.4-.3.73s.5.39.59.08a3.73,3.73,0,0,1,.37-.75,1.36,1.36,0,0,0,.06-.72,2.43,2.43,0,0,0-.55-1.22c-.37-.54-1-1.36-1.72-.94a.13.13,0,0,0,.13.23Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M225.09,368.38c-1.5,1-2.69,3.22-1.23,4.74a1.85,1.85,0,0,0,2.6-.28,3,3,0,0,0,.14-3.38.31.31,0,0,0-.57.24,3.45,3.45,0,0,1,0,2.43,1.18,1.18,0,0,1-2.21-.24c-.45-1.18.57-2.65,1.43-3.35.09-.07,0-.22-.12-.16Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M223.7,371.12a1,1,0,0,1,1.53,0c.36.35.76.82.51,1.31a.34.34,0,0,0,.46.46c1.05-.51-.09-1.83-.62-2.22a1.28,1.28,0,0,0-2,.44c0,.07.08.1.11.05Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M222.93,376.36c.69-.31,1.58-.78,2.26-.18s-.23,1.14-.62,1.36a1.14,1.14,0,0,1-1.36,0,.81.81,0,0,1,.17-1.3c.28-.21.13-.76-.27-.62a1.43,1.43,0,0,0-.57,2.17,1.63,1.63,0,0,0,2.24.31c.84-.41,1.43-1.19,1-2.1a1.42,1.42,0,0,0-1.26-.6,2.87,2.87,0,0,0-1.64.83s0,.11.05.08Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M224.05,345.17c1.23.58,2.74-.69,3.77-1.23a3.42,3.42,0,0,0,1.89-3.27.41.41,0,0,0-.81,0,3.2,3.2,0,0,1-1.42,2.69c-.84.59-2.26,1.9-3.36,1.63-.1,0-.17.13-.07.18Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M209.56,341.37c1.38-.22,1.41,2.9,2.08,3.66s2.22.87,3,.93a6.42,6.42,0,0,0,3.95-.73c1-.65,1-4.12,1.8-4.21.44,0,.45-.74,0-.7-1,.08-1.3.6-1.5,1.54-.3,1.39,1.19,2.22-1.64,3.22a7.24,7.24,0,0,1-3.55-.13c-2-.3-1.89-1.8-2.69-3.27a1.3,1.3,0,0,0-1.57-.73c-.28.06-.16.46.11.42Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.66,291.31a5,5,0,0,1,1,4,14.31,14.31,0,0,0-.26,3.26.28.28,0,0,0,.56,0c.3-2.66.78-5.21-1.21-7.29,0,0-.1,0-.07.05Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M215.76,291.77a16.24,16.24,0,0,0-.92,6.25.27.27,0,0,0,.54,0,33.6,33.6,0,0,1,.7-6.16.17.17,0,0,0-.32-.09Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212,305.18c1.87,1.19,1.45,3.87,1.09,5.71-.32,1.59-1.53,2.76-.89,4.4.16.4.81.22.64-.17-.52-1.28.59-3.15.79-4.5a13.21,13.21,0,0,0,.13-2.43A3.46,3.46,0,0,0,212.1,305a.09.09,0,1,0-.09.15Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M215.65,304.86a10,10,0,0,0-.92,5.05c.11,1.85,1.38,3.48,1.15,5.3,0,.43.58.44.71.09.56-1.51-.39-2.31-.84-3.72a9.27,9.27,0,0,1,.14-6.62c.06-.14-.18-.23-.24-.1Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.63,320.05c.57.73.37,2.47.41,3.31.07,1.17-.4,2.35-.35,3.54a.33.33,0,0,0,.65,0,16.92,16.92,0,0,0,.15-4.14c-.13-.88-.06-2.16-.74-2.83-.07-.08-.18,0-.12.12Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M215.49,318.37a6.55,6.55,0,0,0-.11,3.72c.52,1.53-.27,2.87,0,4.37.09.44.79.26.68-.18a15,15,0,0,1,.08-3.28,5.24,5.24,0,0,0-.56-1.5,6.31,6.31,0,0,1,.08-3.08c0-.13-.18-.19-.21-.05Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M212.46,331.9c.82,1.91-.08,3.34-.55,5.13-.26,1,.49,2.2.82,3.06a.3.3,0,0,0,.59-.08,1.85,1.85,0,0,0-.22-1.17c-.62-1.35-.27-2.38,0-3.71a4.45,4.45,0,0,0-.51-3.31c0-.1-.18,0-.14.08Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M215.27,331.15a15.44,15.44,0,0,0,.22,4.24,8.22,8.22,0,0,1-.18,2.92c-.08.5,0,1.15-.05,1.61a.35.35,0,0,0,.68.18,14.57,14.57,0,0,0,.31-3.25,7.17,7.17,0,0,0-.27-2.21,15.68,15.68,0,0,1-.38-3.49.17.17,0,0,0-.33,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M211.42,286.82a5.44,5.44,0,0,0,3,1.73,4.07,4.07,0,0,0,3.63-1.33.27.27,0,0,0-.38-.38,4,4,0,0,1-2.87,1.18,4.24,4.24,0,0,1-3.08-1.48c-.19-.18-.48.1-.29.28Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M211.54,301.05a3.07,3.07,0,0,0,2.07,1.59,3.1,3.1,0,0,0,3-.89c.23-.19-.08-.59-.32-.42a3.77,3.77,0,0,1-2.25.9A2.84,2.84,0,0,1,211.6,301s-.09,0-.06,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M209.63,115.13c-.23.36-.77.7-.79,1.17a1.51,1.51,0,0,0,.67,1.43,3.18,3.18,0,0,0,2.09.55c1.15-.09,1.71-.4,2.66.33.27.21.62-.25.37-.47a2.74,2.74,0,0,0-2.26-.69,1.68,1.68,0,0,0-.47.14,2.41,2.41,0,0,1-1.86-.19c-1.24-.58-.69-1.41-.3-2.21,0-.06-.06-.12-.11-.06Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M219.38,115.1a1.71,1.71,0,0,1-.93,2.48c-.46.17-1.1-.35-1.61-.34a1.8,1.8,0,0,0-1.76,1c-.12.39.47.54.6.17.28-.79,1.46-.63,2-.42a1.54,1.54,0,0,0,1.56-.36,2.06,2.06,0,0,0,.3-2.67.11.11,0,0,0-.18.11Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M213.24,119.06c0,.31-.49.71-.66,1a2.4,2.4,0,0,0-.39,1.18,4.64,4.64,0,0,0,.51,2.22.25.25,0,0,0,.45-.06c.16-.7-.34-1.44-.38-2.16a2.46,2.46,0,0,1,.51-1.54.73.73,0,0,0,.15-.65c0-.11-.18-.07-.19,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M216.16,119.55c.49.22.54.9.64,1.36a2.89,2.89,0,0,1-.39,1.9.3.3,0,0,0,.52.3,2.77,2.77,0,0,0,.34-2.33c-.16-.6-.34-1.3-1-1.52-.17-.06-.29.22-.13.29Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M214.48,119.73a7.11,7.11,0,0,0-.06,2.94c.05.28.48.16.43-.12a7.88,7.88,0,0,1-.07-2.74c0-.2-.26-.29-.3-.08Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M215.1,119.51A3.44,3.44,0,0,0,215,121a8.59,8.59,0,0,1-.25,1.75c0,.23.35.28.4.06a6.73,6.73,0,0,0,.18-1.42,10.87,10.87,0,0,1-.09-1.81.07.07,0,0,0-.14,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M211.33,110.79c0,.76-.11,1.83.58,2.35.47.35.62.56,1.21.49.4,0,.84-.89,1.32-.27a1.52,1.52,0,0,0,2.17.23,2.29,2.29,0,0,0,.76-2.52.28.28,0,0,0-.53.15,1.89,1.89,0,0,1-.33,1.77,1.13,1.13,0,0,1-1.67.07c-.21-.25-.39-.51-.75-.51a1.2,1.2,0,0,0-.78.41c-.74.67-1.54-.46-1.7-1a5.23,5.23,0,0,1-.13-1.19c0-.09-.14-.09-.15,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M208.31,107.7c.67-.26,1,1,1.37,1.32a2.92,2.92,0,0,0,1.7.61,1.88,1.88,0,0,0,1.31-.42,2.28,2.28,0,0,0,.36-1.61.25.25,0,0,0-.5,0c0,.79-.17,1.24-1,1.41a2.11,2.11,0,0,1-2.15-1c-.26-.56-.62-.76-1.18-.49-.1,0,0,.22.07.18Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M215.82,107.28c.24.85.45,2.3,1.56,2.44a1.81,1.81,0,0,0,1.45-.45,8.3,8.3,0,0,1,2.2-1.56c.22-.09.22-.49-.06-.45a3.27,3.27,0,0,0-1.9,1c-.6.55-1.15,1.21-2,.77-.42-.2-.84-1.43-1-1.85-.05-.12-.24-.08-.2.06Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M213.15,125.74a6,6,0,0,0-.57,1.94,2.82,2.82,0,0,0,.31,1.79.27.27,0,0,0,.5-.2,2,2,0,0,0-.18-.42,2,2,0,0,1-.17-.93,5.17,5.17,0,0,1,.29-2.1.1.1,0,0,0-.18-.08Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M216.65,125.79c0,1,.77,2.32.16,3.32-.1.18.11.41.29.29.46-.3.38-.92.35-1.4,0-.78-.45-1.44-.53-2.2,0-.18-.28-.18-.27,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M214.93,129.36a2.86,2.86,0,0,0,.16-1,3,3,0,0,1,0-.9l-.2.11c.5.19,0,1.35-.11,1.65a.18.18,0,0,0,.28.21c.47-.4.65-1.93-.08-2.17a.16.16,0,0,0-.2.11c-.18.62.15,1.28,0,1.91a.09.09,0,0,0,.17.05Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M212.93,132a4,4,0,0,0-1.31,3.57c0,.28.47.16.43-.12a3.85,3.85,0,0,1,1-3.28c.11-.11,0-.27-.17-.17Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M213.9,132.65a2.41,2.41,0,0,0-.15,1.5c.09.58,0,1.32.45,1.78.22.24.56,0,.51-.29-.09-.47-.19-1-.31-1.42a2.25,2.25,0,0,1-.1-1.4c.1-.23-.28-.38-.4-.17Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M214.88,132.66a3.58,3.58,0,0,0,.15,3.08c.18.32.65,0,.49-.28a3.46,3.46,0,0,1-.28-2.59c.1-.24-.23-.45-.36-.21Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M215.93,132.55c.08.27,0,.55.09.82a4.16,4.16,0,0,0,.38.83c.32.61.88,1,1,1.7,0,.31.51.22.51-.06a1.75,1.75,0,0,0-.63-1.3,4.29,4.29,0,0,1-.73-.92c-.22-.36-.19-.8-.42-1.15-.07-.09-.23,0-.19.08Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M214.59,141a6,6,0,0,0,.33-1.17c0-.11,0-.22,0-.33a.92.92,0,0,1,0-.16s0-.07,0-.11,0-.11-.08-.06c.2.29,0,.81,0,1.13a1,1,0,0,0,.36.84.22.22,0,0,0,.32-.24,6.09,6.09,0,0,1-.17-.85,4.53,4.53,0,0,0,0-.64c0-.25-.18-.68-.51-.68s-.32.33-.34.53,0,.26,0,.39a5,5,0,0,1-.3,1.26.18.18,0,0,0,.35.09Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M216,137.91a8.38,8.38,0,0,0,.91,1.32,3.1,3.1,0,0,1,1,1.65c.08.4.7.23.61-.17a2.48,2.48,0,0,0-.82-1.44,6.84,6.84,0,0,1-1-.73c-.23-.22-.36-.55-.57-.79s-.29,0-.21.16Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M213.48,137.77c-.95.75-2.69,1.71-1.88,3.17.12.23.54.14.51-.14a2.14,2.14,0,0,1,.44-1.72c.34-.41.73-.76,1.08-1.16a.11.11,0,0,0-.15-.15Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M215.09,149.92c.23.93-.8,2.13-1.61,2.4-.37.12-.21.7.16.57,1-.36,2.1-1.91,1.6-3,0-.09-.18,0-.15.07Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M215.63,150.23c-.17,1.08.44,2.77,1.69,2.9.33,0,.39-.49.08-.56a2.46,2.46,0,0,1-1.62-2.32.08.08,0,0,0-.15,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path
                            d="M214.64,143.13c-.33,1.11-.64,2.7-1.9,3.12a.23.23,0,0,0,.12.44c1.42-.39,1.72-2.3,2-3.5,0-.14-.17-.19-.2-.06Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                        <path d="M215.5,143.37a3.55,3.55,0,0,0,.95,3.44c.26.32.73-.15.45-.45a3.76,3.76,0,0,1-1.2-3c0-.13-.17-.14-.2,0Z"
                            transform="translate(-31.03 -18.52)" style={{ fill: "#333" }} />
                    </g>
                </svg>
                <ReactTooltip id='spineSvgs' className="small-font" place="right" />
            </div>
        )
    }
}

export default SpinalNerves;