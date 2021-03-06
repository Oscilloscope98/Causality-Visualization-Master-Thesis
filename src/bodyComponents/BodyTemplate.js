import React from 'react';
import bodyTemplatePNG from '../figures/body_components/body_template_new.png'
import BodyPath from './BodyPath'
import ReactTooltip from 'react-tooltip';
import '../style.css';

class BodyTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: ''
        };
    }

    handleClick = (event) => {
        for (const attr of event.target.attributes) {
            if (attr.name === "id") {
                var tempSymName = attr.value.replaceAll('_', ' '); //change name style
                this.props.clickCallBack(tempSymName);
            }
            continue;
        }
    }

    render() {
        return (
            <div className='svg-image-container'>
                <img src={bodyTemplatePNG} alt='' />
                <svg className='front-back-body'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2699.9 2909.13">
                    <defs>
                        <pattern id="stripedBKGSelected" patternUnits="userSpaceOnUse" width="20" height="50" patternTransform="rotate(45)">
                            <line x1="0" y="0" x2="0" y2="50" stroke="rgba(0,0,255,1)" strokeWidth="8" />
                            <rect width="100%" height="100%" fill="rgba(255,0,0,0.2)"/>
                        </pattern>
                        <pattern id="stripedBKGNonSelected" patternUnits="userSpaceOnUse" width="20" height="50" patternTransform="rotate(45)">
                            <line x1="0" y="0" x2="0" y2="50" stroke="rgba(0,0,255,1)" strokeWidth="8" />
                        </pattern>
                    </defs>
                    <g id="F_Head">
                        <BodyPath pathId="F_Headache" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M918.74,130.16C884.59,36.08,785.67,44.42,785.67,44.42c-82.17.81-128.7,62.08-133.79,85.74-5.1,20.1-3.6,49.79-.44,81.63,1.41,11.83,13.16,25.48,20.73,51.47a502.67,502.67,0,0,1,13.05,57.84h0a210.36,210.36,0,0,0,57,20,14.46,14.46,0,0,1-.09-1.45c0-10.53,17.82-13.67,20.29-14.79s5.83-6.73,23.81-6.73,21.35,5.6,23.81,6.73,20.29,4.26,20.29,14.79a12,12,0,0,1-.08,1.33h0a209.14,209.14,0,0,0,59.47-21.55c.37-3,.68-5.79.91-8.21,1.53-16.31.14-24.57,6.71-52.43s17.62-35.6,21.38-47S934.16,170.82,918.74,130.16ZM884.67,211.8h0c0,21.67-21.73,39.24-48.55,39.24-26,0-33.24-7.31-49.82-7.31S760.63,251,737.12,251c-26.81,0-48.54-17.57-48.54-39.24h-.14V163.32c0-41.42,42.81-80.37,97.81-80.37s98.42,39,98.42,80.37Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Forehead_Headache" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M836.07,172.54c26.82,0,48.55,17.57,48.55,39.25h0V163.32c0-41.42-43.42-80.37-98.42-80.37v97.71C802.83,180.66,810,172.54,836.07,172.54Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Forehead_Headache" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M688.44,163.32V211.8h.14c0-21.68,21.73-39.25,48.54-39.25,23.51,0,32.55,8.12,49.13,8.12V83C731.25,83,688.44,121.9,688.44,163.32Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Eye_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M836.07,251c26.82,0,48.55-17.57,48.55-39.25s-21.73-39.25-48.55-39.25c-26,0-33.24,8.12-49.82,8.12v63.07C802.83,243.73,810,251,836.07,251Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Eye_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M737.12,172.54c-26.81,0-48.54,17.57-48.54,39.25S710.31,251,737.12,251c23.51,0,32.55-7.31,49.13-7.31V180.66C769.67,180.66,760.63,172.54,737.12,172.54Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Ear_Discomfort_Or_L_Tinnitus" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M918.74,211.79c-3.76,11.44-14.81,19.18-21.38,47s-5.18,36.12-6.71,52.43c0,0,2.75.55,8.81,0s10.47-5,12.12-17.07c9.91-16.53,30.29-34.7,27-62.79S918.74,211.79,918.74,211.79Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Ear_Discomfort_Or_R_Tinnitus" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M685.21,321.05s-7.89-.52-10.86-6.84c-9.48-22.11-45.81-26.81-38.7-70.66-9.48-20.16-7.9-38.62,15.79-31.76,1.41,11.83,13.16,25.48,20.73,51.47a487.36,487.36,0,0,1,11.52,49.15C684.24,315.42,684.74,318.3,685.21,321.05Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Jaw_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M815.91,422.64c35-16.4,61.26-45.55,64.58-53.79,2.83-7,7.1-32,9.25-49.38A209.14,209.14,0,0,1,830.27,341c-1,10.41-13.33,24.13-20.21,26.92-7.17,2.92-11.3,4.71-23.81,4.71v54.57C796.22,427.27,806.27,427.16,815.91,422.64Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Jaw_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M742.24,341.14a210.36,210.36,0,0,1-57-20c1.36,8.06,2.4,15,3.34,20.75,2.75,16.78,27.36,60.26,78.4,81.68a47.65,47.65,0,0,0,18.3,3.68h1V372.65c-12.51,0-16.64-1.79-23.81-4.71C755.58,365.16,743.33,351.53,742.24,341.14Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="Mouth_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M786.25,372.65c-12.51,0-16.64-1.79-23.81-4.71s-20.29-17.71-20.29-28.25S760,326,762.44,324.9s5.83-6.73,23.81-6.73,21.35,5.6,23.81,6.73,20.29,4.26,20.29,14.79S817.24,365,810.06,367.94,798.76,372.65,786.25,372.65Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_Head">
                        <BodyPath pathId="B_Headache" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2273.81,267.14c2.28-7.38,20.88-70.27,6.38-108.49-34.12-94-137.88-83.76-138.07-83.74h0c-82.18.81-123.7,65.08-128.79,88.74-5.08,20,4.86,68.87,8.06,100.72a5.71,5.71,0,0,0,.1.85c15.47,12,23.77,32,27.31,55.88,82-43.88,101.39-95.42,101.39-95.42s19.36,51.54,96.61,97.95c.86-4.31,1.91-8.65,3.2-12.92,6.87-22.8,24.11-43.22,24.2-43.28A.26.26,0,0,1,2273.81,267.14Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Back_Headache" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2048.8,321.1c2.32,15.68,1.51,33.63,1.47,51.07,29.14-10.35,63.34-16.32,99.92-16.32V228.68a.62.62,0,0,0-1.19-.27C2143.75,239.59,2119.65,283.2,2048.8,321.1Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Back_Headache" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2150.19,228.75v127.1c33.88,0,65.72,5.13,93.38,14.11,1.09-6.84-.51-25.66,3.34-45.25a7,7,0,0,1,.2-.89c-.27-.16-.12-.09-.31-.19-66.59-40-90.17-83.82-95.4-95.15A.63.63,0,0,0,2150.19,228.75Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Ear_Discomfort_Or_L_Tinnitus" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1998.15,293.44c4,9.24,9.27,9.44,11.24,28.83,2.3,22.76,40.06,27.3,40.62,50.07,0,.89,0,2,.06,3.28.1-.86.1-1.77.16-2.74,3-46.29-3.14-88.62-29.67-108.38C1997.52,258.23,1988.79,271.6,1998.15,293.44Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Ear_Discomfort_Or_R_Tinnitus" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2301.61,278c-3-25.46-23.58-13.08-27.41-10.54-.09.06-16.62,20.15-23.49,42.95-8.72,28.92-7.56,61.91-7,61.86h0C2258.21,368.68,2304.9,306,2301.61,278Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="F_Neck">
                        <BodyPath pathId="F_L_Neck_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M786.43,507s20-66.35,39.21-89.32h0c30.09-16.77,51.85-41.36,54.85-48.81-5,23.46-24.81,80.53,87.46,120.85,3.3,1.25,6.33,2.46,9.14,3.62,0,0-124.23,0-190.84,13.65"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Neck_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M786.43,507s-19-66.7-39.22-93.52h0c-35.08-21.31-53.59-52.43-57.91-68.3,2.66,17-.68,70.16.05,90.68,0,0-5.53-3.16-17.37,16.58-23.7,3.16-15.8,20.54-26.07,21.32-19.25.95-41,9.09-62,19.58,0,0,135.73,0,202.34,13.65"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="Pharyngeal_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M786.43,507s-19-66.7-39.22-93.52A149.7,149.7,0,0,0,767,423.53a47.65,47.65,0,0,0,18.3,3.68c10.29.06,20.69.1,30.65-4.57,3.33-1.55,6.57-3.23,9.73-5C806.41,440.62,786.43,507,786.43,507Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_Neck">
                        <BodyPath pathId="B_L_Neck_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2150.19,355.85h0c-36.58,0-70.78,6-99.92,16.32,0,12.4,0,65.71.79,87.88a.24.24,0,0,1-.07.18c-1.53,1.57-28,28.8-43.24,39.36,42.07-8.67,90.27-13.6,141.5-13.6h.94Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Neck_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2150.19,355.85V486c62.12.08,118.82,10,166.43,22.46-46-15.85-46.3-17.9-65.9-47.85-12.95-20.38-7.57-86.8-7.15-90.64C2215.91,361,2184.07,355.85,2150.19,355.85Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="F_Shoulder">
                        <BodyPath pathId="L_Collarbone_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M786.53,568.05s42.33-24.56,259.33-33.87c-4-1.4-8.52-3.13-14-5.4-23.34-10.51-10.45-17.16-54.76-35.46,0,0-124.23,0-190.84,13.65V567.9Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Collarbone_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M583.9,493.32c-26.19,13.1-51.13,29.86-68.32,40.86,218,8.89,266.69,31.67,270.67,33.72V507c-66.61-13.65-202.34-13.65-202.34-13.65Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Shoulder_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1194.49,686.05c-11.6-77.76-36.21-99.5-53.31-108.62s-27.36-6.84-31.92-8-14.25-14.25-30.78-22.81c-12.72-6.58-19.37-7.75-32.62-12.46-31.7,1.36-59.67,3.05-84.33,4.94,106.41,72.35,98.64,194.43,98.64,194.43,24.87,41.67,129.12,23.93,129.12,23.93-.67-6.16-1.58-12.51-2.81-18.9C1186.48,738.58,1201.87,735.5,1194.49,686.05ZM1151.9,681c-20.53,12.81-49.94,2.74-65.68-22.5s-11.87-56.08,8.66-68.89,49.94-2.74,65.69,22.5S1172.44,668.17,1151.9,681Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Shoulder_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M515.58,534.18c-3.49,2.23-6.66,4.23-9.45,5.91-37.12-4.74-32.39,18.16-42.65,19.74-104.25,25.27-97.93,161.9-89.25,173.75,3.08,4.19,4.57,13.45,5.08,23.9,0,0,100.27,0,126.73-41.68,0,0,0-104.33,104.83-176.19C583.4,537.52,551.83,535.66,515.58,534.18Zm-32.3,121.3c-15.74,25.24-45.15,35.31-65.68,22.5s-24.41-43.66-8.67-68.89,45.16-35.31,65.69-22.5S499,630.24,483.28,655.48Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Front_Axle_Discomfort_Or_L_Shoulder_Impingement" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1151.9,681c-20.53,12.81-49.94,2.74-65.68-22.5s-11.87-56.08,8.66-68.89,49.94-2.74,65.69,22.5S1172.44,668.17,1151.9,681Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Front_Axle_Discomfort_Or_R_Shoulder_Impingement" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M483.28,655.48c-15.74,25.24-45.15,35.31-65.68,22.5s-24.41-43.66-8.67-68.89,45.16-35.31,65.69-22.5S499,630.24,483.28,655.48Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_Shoulder">
                        <BodyPath pathId="B_L_Shoulder_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1999.18,503.88c-26.39,1-93.44,43.8-117,62.42a.27.27,0,0,1-.15.05c-47.73,0-55.9,29.31-61.76,31.11-87.41,19.44-90.46,135.74-81.77,147.59s2,98.39-1.14,103.92a114.52,114.52,0,0,0-7.4,14.45s.9-.93,2.62-2.51c7.84-7.19,32.78-27.7,67.19-33.08,39.45-6.18,55.58-21.52,61.65-48,0-178.11,112.82-259.52,140.34-276.74A8.08,8.08,0,0,1,1999.18,503.88ZM1853.08,685.1c-15.75,25.23-45.16,35.31-65.69,22.5s-24.41-43.66-8.66-68.9,45.16-35.3,65.69-22.49S1868.83,659.86,1853.08,685.1Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Shoulder_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2558.05,843.64c-12.05-20.54-10.8-58-5.07-76.34,0-.12,0-.25.17-.29,1.84-.6,11.53-24.6,4.67-70.57-11.61-77.76-33.09-81.41-50.19-90.53A181.52,181.52,0,0,0,2470.87,591c-4.57-1.14-8.76-18.7-27.11-21.79-19.57-3.3-21.63-6.05-45.46-15.94-24.82-11.16-28.17-24.59-70.9-41.08-15.41-5.38-26.57-9.07-35.08-12.25.43.23,146.63,77.4,146.63,280h.05c6.06,26.43,22.2,41.77,61.65,48,41.94,6.56,64,35.59,64,35.59C2562.88,855,2560.72,848.18,2558.05,843.64ZM2513,707.6c-20.53,12.81-49.94,2.73-65.69-22.5S2435.43,629,2456,616.21s49.94-2.74,65.69,22.49S2533.52,694.78,2513,707.6Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Front_Axle_Discomfort_Or_L_Shoulder_Impingement" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1853.08,685.1c-15.75,25.23-45.16,35.31-65.69,22.5s-24.41-43.66-8.66-68.9,45.16-35.3,65.69-22.49S1868.83,659.86,1853.08,685.1Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Front_Axle_Discomfort_Or_R_Shoulder_Impingement" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2513,707.6c-20.53,12.81-49.94,2.73-65.69-22.5S2435.43,629,2456,616.21s49.94-2.74,65.69,22.49S2533.52,694.78,2513,707.6Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="Chest">
                        <BodyPath pathId="L_Central_Chest_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M961.53,539.12c-144.14,11-175,28.93-175,28.93l-.28-.15v30.61c234.63.22,273.92,135,273.92,135S1067.94,611.47,961.53,539.12Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Central_Chest_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M786.25,567.9c-3.29-1.69-37.67-17.82-175.38-28.29C506,611.47,506,715.8,506,715.8S549.5,598.5,785.67,598.5h.58Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="Thoracidic_Dysfunction" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1041.16,777.43c-5,65.79,3.12,83.27-2.25,96.91-9.9,31-30.87,108.76-40.7,188.49-100.1-2.36-104.56-28.22-138.81-82.35C843.8,955.81,820.78,916,786.75,916s-57,39.77-72.65,64.44c-36,56.86-39.08,82.65-154.66,82.65a664.58,664.58,0,0,0-39.85-194.68c.35-23.49,4.81-35.82,5.44-96.2h0c66.91,116.82,261.22,37,261.22,37S971,884.48,1041.16,777.43Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Chest_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M786.25,598.51V809.27s229.12,93.26,273.92-75.72C1060.17,733.55,1020.88,598.73,786.25,598.51Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Chest_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M785.67,598.5C549.5,598.5,506,715.8,506,715.8c31.83,195.46,280.21,93.47,280.21,93.47V598.51Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="Back">
                        <BodyPath pathId="Upper_Back_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2292.32,499.93c-65.18,142.94-18.63,279.37,26.31,329.13-120.39-123.94-168.44-123.94-168.44-123.94s-43.44,0-165.43,123.94c45-51.36,88.28-186.19,23-329.47,0,0-146.36,77.44-146.36,280.29-.25,21.2,16.88,92.12,24.72,103.44,1.14,1.49.83,9.72.62,13.41a9.18,9.18,0,0,0,.53,3.56c26.13,72.34,38.12,131.75,42.5,180.48,183.74,0,148.23-64.14,220.41-64.14h0c73.06,0,37,60.61,217.49,64.14,7.89-66.73,27.4-145.41,37.14-176.3,0,0,34.41-90.23,34.11-124.59C2439,577.33,2292.75,500.16,2292.32,499.93Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Interscapular_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2149.25,486c-51.23,0-99.43,4.93-141.5,13.6,65.29,143.28,22,278.11-23,329.47,122-123.94,165.43-123.94,165.43-123.94V486Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Interscapular_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2292.32,499.93s-90.11-13.77-142.13-13.94V705.12s48,0,168.44,123.94C2273.69,779.3,2227.14,642.87,2292.32,499.93Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="F_L_Arm">
                        <BodyPath pathId="F_L_Lateral_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1189.29,757.48a321.9,321.9,0,0,1-40,3.63c3.39,32.2-.08,66.34-.08,66.34,20.45,28,29.1,145.53,16.28,200.13,10.46-3.06,25.41-12.16,36.14-36,2-46.56,4.41-148.62-12.07-174.52A292.58,292.58,0,0,0,1189.29,757.48Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Lateral_Arm_Discomfort_2" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1295.49,1384.18h0c-8-29.26-17.74-69-19.93-110.94-3.67-70.32-26.92-144.34-33.78-172.2-.43-1.73-.93-3.52-1.49-5.35-21.11-10-39.45-13.44-55.85-12.48,6.93,27.87,36.09,74.69,47.38,144,8.47,52.07,30.7,147.63,38.72,176.89C1283.22,1397.77,1290.42,1390.61,1295.49,1384.18Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Upper_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1149.21,827.45s3.47-34.14.08-66.34c-32.22.92-74.46-3-89.12-27.56-4.57,17.22-11.05,31.72-19,43.88-5,65.78,3.12,83.27-2.25,96.91-.52,38.12,19.06,107.77,29,144.66,49.57,22.36,84.19,11.74,95.47,9.14.69-.16,1.4-.35,2.13-.56C1178.31,973,1169.66,855.5,1149.21,827.45Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Arm_Bend_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1076.12,1120c1.13,6.82,8.05,8.66,10.27,17.26h0c40.49-31.58,80.54-76.44,153.9-41.6-10-32.93-39.88-80.7-39.88-80.7s.59-9.07,1.22-23.39c-11.48,25.49-27.8,34.12-38.27,36.54-11.28,2.6-45.9,13.22-95.47-9.14,3.22,12,5.43,20.49,5.6,23.37C1073.49,1064.5,1069.61,1087.5,1076.12,1120Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Lower_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1231.82,1227.26c-11.29-69.36-40.45-116.18-47.38-144-40.59,2.37-69.21,31.59-98,54.08h0c2.36,9.16.1,25.18,3.46,35.9,24.42,77.87,72,190.7,97,248.47,41.83-2.36,67.31-9.28,83.66-17.51C1262.52,1374.89,1240.29,1279.33,1231.82,1227.26Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Wrist_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1203.19,1458.82c.24,3.32.47,6.55.69,9.71,33.42-25.78,67.7-38.71,102.43-35.25a5,5,0,0,1,.23-2.07c1.48-4.45-4.16-21.88-11-47h0c-11.61,14.72-34.35,33.29-108.61,37.48C1196.81,1444.56,1203.19,1458.82,1203.19,1458.82Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="F_R_Arm">
                        <BodyPath pathId="F_R_Lateral_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M401.2,861.36c5.06-20.24,18.21-44.52,22.26-51.6,2.55-4.47,5.5-32.64,4.55-56.67a333.26,333.26,0,0,1-48.7,4.39c.91,19-1.46,42-3.5,45.6-3.15,5.53-13.42,24.48-17.37,40.27-2.76,11-5.14,72.27-5.24,123.23,8.81,19.57,14,38.3,41.31,47.2C394.79,949.65,397.76,875.12,401.2,861.36Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Lateral_Arm_Discomfort_2" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M280.11,1400.19c13.21-42,46.37-137.61,46.87-179.46.35-28.79,26.81-98.26,45.9-140.9-17.21-.69-34.6,2.72-53.31,9.18-17.34,42.86-32.35,94.13-31.42,124,1.19,38-22.55,121.27-35.46,168.16A98.74,98.74,0,0,0,280.11,1400.19Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Upper_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M506,715.8c-14,22-48.53,32.39-78,37.29.95,24-2,52.2-4.55,56.67-4,7.08-17.2,31.36-22.26,51.6-3.44,13.76-6.41,88.29-6.69,152.42,9.34,3.05,21.26,4.94,36.8,5.33a388,388,0,0,0,62.22-3.31c8.57-32.21,28.3-98.13,26.06-147.35.35-23.49,4.81-35.82,5.44-96.2C516.29,757,509.72,738.38,506,715.8Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Arm_Bend_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M319.57,1089h0c52.61-18.15,94.88-12.28,151.61,41.43,0-7.12,11.39-2.84,18.51-14.24,1.43-11.39,0-69.77,0-82.58,0-2.75,1.51-9,3.84-17.82a388,388,0,0,1-62.22,3.31c-61-1.5-66.28-26.27-78.11-52.53,0,21.93.34,42,1.29,55.26C344.78,1033.5,331.61,1059.23,319.57,1089Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Lower_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M372.88,1079.83c-19.09,42.64-45.55,112.11-45.9,140.9-.5,41.85-33.66,137.48-46.87,179.46,33.54,16.18,74.69,17.08,89.82,10.08,17.95-45.73,43.43-97.69,51.42-114.65,45.56-62.66,54.1-138.12,49.83-165.18C434.62,1095.83,404.07,1081.09,372.88,1079.83Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Wrist_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M252.69,1381.12h0c-4.29,15.57-7.39,27.13-8,31.66-1,7.73-7.74,17-16.42,26,65-1,101.42,10.42,124.71,23.47,3-14,9.27-32.43,16.93-51.94C350.22,1419.39,286.39,1415.11,252.69,1381.12Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_L_Arm">
                        <BodyPath pathId="B_L_Lateral_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1768.49,914.14c-.47-37.17,2.82-41.59,11.65-81.43a140.12,140.12,0,0,0-47.59,28.2l-2.62,2.51c-2.75,7.69-3.44,15.57-4.19,24.92-1.35,16.72,1.47,92.72-1.38,144.6a91.32,91.32,0,0,0,37.46,32.87C1769.09,952.84,1769,954.05,1768.49,914.14Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Lateral_Arm_Discomfort_2" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1667,1190.06a461.26,461.26,0,0,0-9.93,66.89c-2.7,37-16.48,105.82-29.93,154h0a205.88,205.88,0,0,0,25.17,14.81c13.61-48.35,42.94-128.07,45.63-164.7,1.72-23.54,6.88-50,11.56-70.89h0A371.72,371.72,0,0,0,1667,1190.06Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Upper_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1886.73,896.73c.21-3.69.52-11.92-.62-13.41-7.84-11.32-25-82.24-24.72-103.44-6.07,26.43-22.2,41.77-61.65,48a115.83,115.83,0,0,0-19.6,4.88c-8.83,39.84-12.12,44.26-11.65,81.43.5,39.91.6,38.7-6.67,151.67,32.19,15.32,70.46,10.91,94.32-3.7C1859.19,1019.59,1891.77,960.86,1886.73,896.73Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Upper_Elbow_Discomport" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1850.24,1109.89a54.94,54.94,0,0,1-.87-9.36c-.09-12.21,4.24-26.92,6.77-38.42-34.44,21.1-98.93,20.94-131.78-29.17-.56,10.25-1.35,19.57-2.43,27.29a.24.24,0,0,1,0,.18,145.14,145.14,0,0,0-11.84,16.86c6,9,18.19,23.07,41,33.46s68.86,8.17,99.17-.82Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Lateral_Elbow_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1721.34,1160.44c11.14-29.26,16-17.41,33-48.38-1.13-.42-2.23-.86-3.27-1.33-22.83-10.39-35-24.41-41-33.46-15.33,25-32.24,64.71-43,112.79a371.72,371.72,0,0,1,42.5.14C1713.57,1180.29,1717.76,1169.83,1721.34,1160.44Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Medial_Elbow_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1850.24,1109.89v0c-28.93,8.58-72.16,11-95.9,2.15-17,31-21.85,19.12-33,48.38-3.58,9.39-7.77,19.85-11.82,29.76,66.82,4.29,102.3,28.25,118.92,53.4,11.86-36.31,14.78-68.27,12.3-84a.07.07,0,0,1,0,0c0-7.09,10.44-6.37,12.9-23.88C1855.59,1126.07,1852,1119.75,1850.24,1109.89Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Lower_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1709.52,1190.2h0c-4.68,20.89-9.84,47.35-11.56,70.89-2.69,36.63-32,116.35-45.63,164.7,30.94,15.27,59.93,18.8,85,14.35,17.88-46.58,42.58-99.33,50.44-116l0,0c19-26.15,32.12-54.43,40.63-80.48C1811.82,1218.45,1776.34,1194.49,1709.52,1190.2Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Wrist_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1737.35,1440.14c-31.8,5.64-69.83-1.52-110.19-29.16h0c-4.9,17.59-9.76,32.44-14,42a34.56,34.56,0,0,1-3.62,6h0c42.6-13.3,93.24,4.37,109.93,36.74v-.06c3.11-14.64,9.81-34.45,17.9-55.53Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_R_Arm">
                        <BodyPath pathId="B_R_Lateral_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2565.05,865.47l-.41-2.05s-16.1-21.16-46.91-31.43c15.66,75.9,17.6,239.53,17.62,239.56h0a97.55,97.55,0,0,0,34.54-29.07S2572.93,920.82,2565.05,865.47Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Lateral_Arm_Discomfort_2" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2667,1409.5c-13.29-57.55-27.42-145.88-38.49-209.47a167.65,167.65,0,0,0-47.94-6.15h0c10.36,84.34,54.59,220,60.65,232.34.06.11.13.22.2.33C2654.5,1421.08,2663.2,1414.82,2667,1409.5Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Upper_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2535.35,1071.55s-2-163.66-17.62-239.56a105.39,105.39,0,0,0-17.08-4.16c-39.45-6.18-55.64-21.52-61.7-48,.3,34.36-34.11,124.59-34.11,124.59,5.19,62.3,39.39,161.7,40.1,173.38,39.19,10.24,69,4.59,90.41-6.3Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Upper_Elbow_Discomport" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2591.46,1079.42c-10.81-19.8-21-35.94-21.57-36.94-16.23,22.35-56.14,53.35-124.95,35.37a265.11,265.11,0,0,0-2.72,38.43c55.79,6.87,73.57,5.75,94.13,0C2558.3,1110.13,2583.39,1092.91,2591.46,1079.42Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Lateral_Elbow_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2628.49,1200c-4.9-28.09-9.19-51.36-12.55-65-3.83-15.54-14.42-37.17-24.48-55.61-7.32,12.22-28.6,27.51-48.87,34.85,16.65,17.42,34.18,55.61,38,79.61A167.65,167.65,0,0,1,2628.49,1200Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Medial_Elbow_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2542.59,1114.27q-3.15,1.14-6.24,2c-20.56,5.75-38.34,6.87-94.13,0,.11,14.23,1.74,29.4,7,39.75a704.57,704.57,0,0,0,20.37,86c34.17-34,73.85-47.48,111-48.16C2576.77,1169.88,2559.24,1131.69,2542.59,1114.27Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Lower_Arm_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2641.2,1426.22c-6.06-12.35-50.29-148-60.65-232.34h0c-37.14.68-76.82,14.14-111,48.16,5.42,17.92,11.92,36.87,19.64,56.06,21.38,53.18,47.19,101.61,64.54,141.69h0c38.13,1.44,67.9-5,87.66-13.24C2641.33,1426.44,2641.26,1426.33,2641.2,1426.22Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Wrist_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2553.74,1439.79h0c8.19,18.93,14.51,36,17.57,50.82a28.5,28.5,0,0,1,.76,6.16c29.11-36.4,83.25-42.08,111.76-33.7-5.22-8.54-10.95-28-16.85-53.57C2657.5,1422.83,2617.15,1442.18,2553.74,1439.79Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="F_L_Hand">
                        <BodyPath pathId="F_L_Hand_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1364.34,1537.21c-13.69-8.6-45.7-39.46-57.78-102.65a6.58,6.58,0,0,1-.25-1.28c-34.73-3.46-69,9.47-102.43,35.25,3.79,52.75,6.79,83.92,14.2,114,2,7.93,6.79,17.35,11.28,29.61,65.62-.75,114.47-12.24,145.82-33.32C1369.41,1557.34,1364.34,1539.41,1364.34,1537.21Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Finger_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1266.3,1615.07c-.17-1.39-.39-3-.64-4.62,47.61-3.93,84.25-14.68,109.52-31.67,7.6,28.28,16.42,62.67,16.42,75.25,8.76,30.54,7.2,49.51,6.27,53.24s-5.6,9.64-9.64,10c-1.62.13-11.84-7.48-15.72-16.21-3.67-8.27-22.54-72.11-32.27-95.77-.13-.33-.62,2.84-.53,3.18,20.49,78.89,22.91,114.47,19.4,126-3.57,11.71-22.25,5.23-32.74-25.32-6.8-17.41-22.92-117.38-24.95-94.46,0,0,20.14,97.89,12.44,110.92s-23.11-10.07-26.66-21.92c-3.28-10.92-17.63-83.76-20.32-87.65Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Little_Finger_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1238.35,1653.64c1.82,27.66,6.88,37.34,8.6,40.9,8.29,17.18,14.78,13.25,20.11,10.29s4.15-28.43-.59-88.27c-.18-1.71-.47-3.81-.81-6.11q-17.21,1.42-36.3,1.65A145.91,145.91,0,0,1,1238.35,1653.64Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Thumb_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1426.59,1551.27c-21.75-65.26-114.52-97.73-120-116.71,12.38,64.74,45.67,95.54,58.75,103.25,2.93,1.41,9.94,5.93,14.38,6.48,0,0,.53,22,7.23,28.5,10.09,9.77,34.88,18.29,49.76,12.34C1435.83,1554.08,1426.59,1551.27,1426.59,1551.27Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="F_R_Hand">
                        <BodyPath pathId="F_R_Hand_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M326.48,1606.7c14.4-43.16,31-123,26.52-144.49-23.29-13-59.68-24.51-124.71-23.47-1.56,41.59-3.8,76-45.93,101.91,0,0,1.49,14.2-1.66,24.53C228.9,1623.44,326.48,1606.7,326.48,1606.7Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Finger_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M285.3,1629.85l0-.52c.09-3.38,0-11.91-.26-20.6-32.44-1.32-76.57-10-104.32-43.55-3.14,10.33-20.92,103.9-26.23,111-6,8-11.4,35.16,9.32,34.44,14.5-.51,32.7-76.65,47.16-105.52.27-.55,1.11.74,1,1.35-2.75,12.55-17.29,73.87-20.92,95.43-5.6,33.22,14.56,37.37,21.32,30,10.28-11.18,21.48-77.53,37.14-116.31a.28.28,0,0,1,.53.17c-2.85,12-9.47,72.74-13.34,87.71-4.77,18.41,21.42,23,24.27,15.37,7.37-19.72,17.74-72.23,24.06-88Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Little_Finger_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M285.4,1632.2c.58,7.68,0,40.6-5,58.47-2.66,9.65,10.06,10.08,14,9.58,12.63-1.58,22.11-20.53,22.9-71.08,2.75-4.92,5.88-12.78,9.11-22.47a218.47,218.47,0,0,1-41.46,2c.28,8.69.35,17.22.26,20.6Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Thumb_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M191.8,1468.06c-57.64,35.53-62.74,60.72-62.75,75.73a12.34,12.34,0,0,1-4.18,8.7c-9,7-21.08,30.77-12.21,32.14,47.4,3.76,57.06-28.93,65.28-41.37a2,2,0,0,1,1.63-.94c44.83-26.11,47.13-61.09,48.72-103.58A212,212,0,0,1,191.8,1468.06Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_L_Hand">
                        <BodyPath pathId="B_L_Hand_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1696.13,1627.88c12.51-37.13,24.7-93.31,23.32-132.15-16.69-32.37-67.33-50-109.93-36.74,0,0-14,58.7-49.55,102.9l-.76,1.19c-2.38,6.46-5.06,15.59-7.85,26.09h0C1617.78,1633,1676,1629.18,1696.13,1627.88Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Finger_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1656.64,1652.84c.63-8.91,1.49-17.8,2.39-25.08-27.81-2.41-66.14-11.19-107.67-38.59-10.55,39.66-22.72,99-26.11,109.28-3.14,9.48-11.62,48,8.49,42.91,11.88-3,32.9-77.71,45.35-109.74a2,2,0,0,1,3.87,1.11c-3.51,18.65-18,75-20.78,91.67-5.6,33.22,8.62,39.59,16.65,33.65,13.68-10.13,23.58-78.1,39.52-117.1a.27.27,0,0,1,.51.14c-1.92,10.48-14.13,74.35-12.75,90.81,1.58,18.95,17.32,22.48,21.27,15.37,12.63-22.9,22.67-76.18,29-92Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Little_Finger_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1656.55,1655.94c-.12,8.43-7.16,77.24,4.37,75.8,12.63-1.58,22.1-23.52,22.9-74a.27.27,0,0,1,0-.12c3.79-6.79,8.06-17.17,12.28-29.72a232.36,232.36,0,0,1-37.1-.12c-.9,7.28-1.76,16.17-2.39,25.08Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Thumb_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1560,1561.89c35.55-44.2,49.55-102.9,49.55-102.9-12.57,16.64-44,39.89-58.51,48.86-57.41,35.39-44.19,49.16-47.61,63.39a.26.26,0,0,1-.22.2c-8.78,1.22-28.48,34.46-18.28,36,30.52,1.4,44.62-8.1,49.91-18.46,3.17-6.22.61-12.75,3.69-17.42,1.06-1.6,15.56-8.31,19.76-9.19Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_R_Hand">
                        <BodyPath pathId="B_R_Hand_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2731.25,1567.68c-30.21-24.47-47.42-104.61-47.42-104.61-28.17-8.29-81.36-2.81-110.71,32.45,1.62,6.93-5.78,3.58-.29,41.23,2,13.41,11.24,55.64,20.4,91.47,86.84,9,139.86-31.86,144.94-36C2734.18,1579,2731.25,1569.31,2731.25,1567.68Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Finger_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2632.73,1643.13c-.41-4.26-.89-9.14-1.39-14,64.1-3.77,102.54-33.38,106.83-36.85,8.51,28.2,21.85,72.27,21.87,87.37l-.23,9.43c6.77,26.71,5.37,43.25,4.51,46.71-.93,3.73-5.6,9.64-9.64,10-1.62.12-14.71-9.91-15.65-21.16-.76-9.06-22.76-72.66-32.46-96.11-.12-.31-.58-1.15-.49-.83,20.57,79.09,25.9,125.08,19.48,135.3-6.76,10.75-21.47-1.73-27.07-19.55s-28.56-127-30.62-104.27v.07c.43,2.16,17.68,93.8,10.06,106.69-7.7,13-25.06,4.88-25.06-7.49s-16.48-89.41-19.5-93.81Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Little_Finger_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2593.23,1628.22c6.46,25.28,12.86,47.37,16.57,53.91,1.82,27.66,4.1,38.68,8.41,44,7.84,9.77,19.29,5.89,20.92.5,1.76-5.84-1.47-21.79-6.21-81.62-.45-4.67-1-10.31-1.58-16A236.37,236.37,0,0,1,2593.23,1628.22Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Thumb_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2731.25,1567.68c2.92,1.52,10.46,2.44,14.68,3.07.12,0,.21,1.11.22,1.24.07,2.24,6,23.08,12.33,29.21,10.05,9.73,48.58,18.58,48,9.91-2-28.7-13.52-29.15-13.54-29.22-26.39-70.1-98.93-102.21-109.08-118.82C2683.83,1463.07,2701,1543.21,2731.25,1567.68Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="Loin">
                        <BodyPath pathId="L_Lower_Back_Pain" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2150.19,1016.63c-72.15,0-36.71,64.14-220.43,64.14,7.85,87.29-8.76,140.33-12.39,172.14-.43,3.71-1,8.07-1.68,13,45.64-17.83,148.17-31.1,226.52,5.2a18.88,18.88,0,0,0,8,1.76Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Lower_Back_Pain" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2367.7,1080.77c-180.46-3.53-144.43-64.14-217.49-64.14h0v256.2a18.84,18.84,0,0,0,8-1.76c78.43-36.37,180.63-22.87,215.41-6.14q-1.1-4.15-2.15-7.82C2357.71,1209.34,2359.74,1143.57,2367.7,1080.77Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="Abdomen">
                        <BodyPath pathId="Lateral_Abdominal_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M998.21,1062.83c-100.1-2.36-104.56-28.22-138.81-82.35,45,80.76,57.37,88.18,75.17,109.68s28.54,31.78,28.54,52.5c0,22.28-8,42.11-18.54,65.87-11.06,26.87-64.94,115.18-75,128.1l.08.13c25.1-34.49,63.44-84.25,132.24-118.12C989.92,1176.17,991.29,1119,998.21,1062.83Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="Lateral_Abdominal_Discomfort_2" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M609.39,1142.66c0-20.72,10.75-31,28.54-52.5s31.14-28.92,76.17-109.68c-36,56.86-39.08,82.65-154.66,82.65,3.68,69-3.84,123.28-7.61,153.71,70.8,33.78,117.49,84.52,147.13,119.61-10.1-12.92-60-101-71-127.92C617.44,1184.77,609.39,1164.94,609.39,1142.66Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="Upper_Abdominal_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M858.85,979.6C843.26,954.88,820.38,916,786.75,916c-34,0-57,39.77-72.65,64.44-42.31,75.89-56.65,87-73,105.92,37,21.85,88.38,35.39,145.13,35.39s108.1-13.54,145.14-35.4C915.1,1067.39,901.16,1055.5,858.85,979.6Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Lower_Abdominal_Discomfort_Or_IBS" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M845.83,1367.7c6.65-7,14.27-17.87,23.78-30.94l-.08-.13c10.1-12.92,64-101.23,75-128.1,10.5-23.76,18.54-43.59,18.54-65.87,0-20.72-10.75-31-28.54-52.5-1.08-1.3-2.13-2.55-3.18-3.77-37,21.86-88.38,35.4-145.14,35.4v275.92C790.45,1397.67,818.61,1396.29,845.83,1367.7Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Lower_Abdominal_Discomfort_Or_IBS" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M641.12,1086.4q-1.57,1.81-3.19,3.76c-17.79,21.49-28.54,31.78-28.54,52.5,0,22.28,8.05,42.11,18.54,65.87,11.06,26.87,60.93,115,71,127.92,11.15,13.21,19.9,24.21,26.6,31.25,29.5,31,60.13,30,60.13,30h.56V1121.79C729.5,1121.79,678.15,1108.25,641.12,1086.4Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Groin_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1001.85,1218.64c-94.88,46.7-131.83,123.65-156,149.06-27.22,28.59-55.38,30-59.58,30V1500h.49c18,0,31.79-12,42-26.84,60.53-87.58,152.32-176.27,190.25-189.85-4.53-22-9.26-41.09-14.06-54.69C1003.84,1225.4,1002.81,1222.06,1001.85,1218.64Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Groin_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M786.25,1397.71h-.56s-30.63,1-60.13-30c-24.51-25.74-76.29-104.36-173.73-150.86-.33,2.71-.64,5.25-.91,7.58-1.65,14.41-4.72,34.77-8.43,57.33,63.8,24.76,134.46,104.18,202,192.86,10.58,13.9,23.88,25.39,41.35,25.39h.43Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="Buttocks">
                        <BodyPath pathId="L_Buttocks_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2150.19,1497.61c-61.22-70.44-22.65-92.42,0-92.42h0V1272.83a18.88,18.88,0,0,1-8-1.76c-78.35-36.3-180.88-23-226.52-5.2-8.52,60.65-35.41,202.46-35.41,202.46-3.42,15.18-4.72,34.7-4.4,57.19,34.64,17.39,144.94,135.81,274.31,9v-36.88Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Buttocks_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2410.73,1466.48c-9.49-66.88-25-155.4-37.15-201.55-34.78-16.73-137-30.23-215.41,6.14a18.84,18.84,0,0,1-8,1.76v132.36h0c22.65,0,61.22,22,0,92.42h0v36.88l0,0c85.93,109.55,204.41,41.87,262-9C2413.09,1501.64,2412.8,1481,2410.73,1466.48Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="Tailbone_Pain" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2150.19,1497.61c61.22-70.44,22.65-92.42,0-92.42h0c-22.65,0-61.22,22,0,92.42Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="F_L_Leg">
                        <BodyPath pathId="L_Hip_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M852.33,1441.14c-1.39,67.3-14.11,110.26-65.91,110.21,15.81,0,55.19-5,101-14.69a45.89,45.89,0,1,1,87.21-25.25c26.09-10.1,50.92-22.65,71.57-38.23,0-13.76-.6-25.74-1.94-35.18-6.84-48.2-15.61-108-25.24-154.69C986.73,1294.87,910.19,1367.68,852.33,1441.14Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Hip_Joint_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M929.17,1471.67a45.9,45.9,0,0,0-41.73,65c28-5.93,58.37-14.09,87.21-25.25A45.9,45.9,0,0,0,929.17,1471.67Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Adductor_Tendon_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M852.33,1441.14c-4.24,5.39-3.26,4.08-7.33,9.53-5.6,7.47-11,15-16.21,22.49-10.26,14.85-24,26.84-42,26.84h-.49c-.37,11.28-.27,29,.17,51.35C838.22,1551.4,850.94,1508.44,852.33,1441.14Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Anterior_Thigh_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M786.42,1551.35c2.3,116.37,14.12,358.21,20.54,469,57.42,0,91.94-12.37,106.08-32.61,14.55-20.84,18.11-45.51,57.46-59.48,10-66.72,36.89-140.41,43.53-169.17,7.23-31.33,32.22-196.35,32.19-285.92C965.37,1534.2,820.53,1548.72,786.42,1551.35Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Anterior_Knee_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M922.19,2077.42c4.67-21.73,34.48-48.09,3.14-110.66-4,7.07-7.57,14.23-12.29,21C898.9,2008,864.38,2020.33,807,2020.36c1.85,32,3.26,53.14,3.84,57.06.39,2.57.78,5.3,1.15,8.1,41,33.65,77.64,47.33,106.72,39.32C918.33,2109.38,919,2092.18,922.19,2077.42Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Lateral_Knee_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M970.5,1928.27c-26.58,9.44-36.83,23.76-45.17,38.49,31.34,62.57,1.53,88.93-3.14,110.66-3.17,14.76-3.86,32-3.52,47.42,19.9-5.48,36.27-21.1,48.1-47.42-5.56-38.92,0-41.7,0-100.09C966.49,1962,967.94,1945.37,970.5,1928.27Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Shin_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M918.42,2124.91c-19.24,5.2-41.78.94-66.7-12.29-5.47,46.76,2,374.43-34,426.85l0,0c18.69.33,35.7,3,49.64,7.61C855.49,2480.61,914.73,2187.35,918.42,2124.91Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Medial_Calf_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M801,2499.18h0a233.84,233.84,0,0,1-5.71,41.05c7.67-.63,15.18-.85,22.43-.72l0,0c36.06-52.42,28.56-380.09,34-426.85q-19-10.1-39.77-27.1c2.59,19.64,4.39,43.43-.12,50.65-36.07,66-28.14,172.45-22.77,188.55s4.22,62.5,7.29,69.79,5,21.85,10,30.67-1.54,50.23-2.3,58.28S802.48,2485.76,801,2499.18Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Lateral_Calf_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M966.77,2077.42c-11.88,26.43-28.34,42.07-48.35,47.49-3.69,62.44-62.93,355.7-51.11,422.21,10.27,3.38,18.88,7.77,25.23,13h0c0-35.36,8.89-55.92,8.89-55.92,8.34-51.43,65.11-196,72.06-248.82S979.28,2141.36,966.77,2077.42Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="F_R_Leg">
                        <BodyPath pathId="R_Hip_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M773,1551.44c-46.93-5.16-60.36-38-59.93-117-57.72-71.67-116.59-131.72-170.55-152.66-17.24,54.57-23.09,161.44-27.17,176.56a128.37,128.37,0,0,0-2.31,14.87c20.42,15.4,44.86,27.85,70.54,37.88a45.89,45.89,0,1,1,87.21,25.49A799,799,0,0,0,773,1551.44Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Hip_Joint_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M670.76,1536.55a45.89,45.89,0,1,0-87.21-25.49C612.38,1522.33,642.76,1530.56,670.76,1536.55Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Adductor_Tendon_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M744.47,1474.61c-10.42-13.68-20.9-27.13-31.43-40.2h0c-.43,79,13,111.87,59.93,117q.72-25.28,1.52-53.13C762.42,1494.62,752.63,1485.33,744.47,1474.61Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Anterior_Thigh_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M513,1473.18c-11.34,111.33,60.33,437.92,66.85,455.52,39.35,14,48.7,38.21,63.25,59,14.16,20.27,48.75,32.61,106.3,32.61.2-61.55.69-156,7.61-190.23,8.89-43.92,11.58-126.56,16-278.69C741.39,1549.07,594.85,1535,513,1473.18Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Anterior_Knee_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M643.11,1987.75c-6.1-8.74-11.29-18.07-18.15-27-36.38,66.91-4.82,94.25,0,116.66,4,18.79,4,41.54,3,59.61,28,13.08,59.56.54,111.58-28.78,3.28-4.1-1.63-25.39-.82-30.83s4.1,0,10.33-10.9c.22-9.87.25-26.31.32-46.16C691.86,2020.36,657.27,2008,643.11,1987.75Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Lateral_Knee_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M625,2077.42c-4.82-22.41-36.38-49.75,0-116.66-9.52-12.37-22.24-24-45.1-32.06,6.84,18.47-2.05,95.07-1.37,112.86,1.14,21,.86,34.62.09,44,17.6,27.25,32.91,43.81,49.42,51.51C629,2119,629,2096.21,625,2077.42Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Shin_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M723,2539.53c-25-59.5-22.71-369.09-28.36-408.24-27.24,11.74-47.7,14.55-66.6,5.74h0c-2.94,38.78,65.83,338.87,44.66,412.6C686.1,2543.84,703.13,2540.23,723,2539.53Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Medial_Calf_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M732.21,2135.28c-5-6.15,4.1-22.94,7.37-27-17,9.57-31.77,17.35-45,23C700.25,2170.44,698,2480,723,2539.53a219.1,219.1,0,0,1,25.71.67,84.34,84.34,0,0,0-4.17-12.59c-5.74-12.29-5.74-95,1.64-107.3,10.64-17.2,8.19-46.69,5.73-62.25,2.46-4.91,11.47-15.56,12.29-32.76C769.07,2236,747.77,2156.57,732.21,2135.28Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Lateral_Calf_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M628,2137c-16.51-7.7-31.82-24.26-49.42-51.51-1.07,13.14-3.11,17.87-3.51,23.07-6.84,55.4-7.52,125.17-4.1,149.79s76.61,263.34,82.08,272.92c2.73,4.78,3.25,16.39,2,28.78a74.22,74.22,0,0,1,17.64-10.45C693.83,2475.9,625.06,2175.81,628,2137Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_L_Leg">
                        <BodyPath pathId="B_L_Adductor_Tendon_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2010.47,1591.48c55.91,6.57,93.52,9.89,129.77,10.21,2-29.61,3.54-51.69,4.5-62C2096.15,1585,2050.37,1596,2010.47,1591.48Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Back_Thigh_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2010.47,1591.48c-64.39-7.36-113.51-55.38-134.59-66,1.59,110,42.13,290.9,64.19,381.46,70.4,47.12,179.65,35.61,179.66,35.61,6.17-109,14.9-256,20.51-340.9C2104,1601.37,2066.38,1598.05,2010.47,1591.48Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Medial_Knee_Joint_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2069.58,1943.34c-1.64,77.8,30.19,157.79,37,173.85-3.17-11.43-1-44.93-.23-49.83.82-5.42,7-6.39,7.21-10.59,1.23-24.7,3.47-65.69,6.22-114.18A361.37,361.37,0,0,1,2069.58,1943.34Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Dorsal_Knee_Joint_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2106.53,2117.19c-6.76-16.06-38.6-96-37-173.81-37.84-1.87-89.82-9.85-129.49-36.4,5.59,23,10,40.13,12.28,48.84,5,19-3.13,146.51-2.45,164.29,56.24-22.18,93.85-29.51,157.89,0A9,9,0,0,1,2106.53,2117.19Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Shin_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2078.41,2486c-22-52.44-22.88-299.15-26.63-383.75-23.19-3.48-44-1-66.59,5.53,10.47,83,61.55,323.4,42.92,388.32-.4,1.38-.74,2.7-1.06,4a172.61,172.61,0,0,0,56.32-.1A124.16,124.16,0,0,0,2078.41,2486Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Medial_Calf_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2107.79,2120.1c-21-9.66-39.12-15.35-56-17.88,3.75,84.6,4.6,331.31,26.63,383.75a124.16,124.16,0,0,1,5,14c16.36-2.68,26.56-6.7,26.56-6.7,1.19-26.81,4-53.27,7.48-59.13,12.35-19.59,3.38-31.92.92-47.51,0-.05,12.58-24.1,13.39-41.21C2136.52,2258.31,2122.91,2145.32,2107.79,2120.1Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Lateral_Calf_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2028.11,2496.07c18.63-64.92-32.45-305.3-42.92-388.32-11.17,3.23-22.77,7.42-35.29,12.36.35,15.57-4.22,37.87-4.89,46.56a476.92,476.92,0,0,0,1,124.44c2.58,18.57,39.41,128,54.79,202.16a155.28,155.28,0,0,0,26.28,6.8C2027.37,2498.77,2027.71,2497.45,2028.11,2496.07Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_R_Leg">
                        <BodyPath pathId="B_R_Adductor_Tendon_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2263.76,1593.28c-39.06.7-79-14.66-113.57-58.79,0,15.43.54,38.75,1.45,67.2,32.41-.28,65.15-3,110.41-7.82A4.48,4.48,0,0,0,2263.76,1593.28Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Back_Thigh_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2263.76,1593.28a4.48,4.48,0,0,1-1.71.59c-45.26,4.87-78,7.54-110.41,7.82,2.94,91.16,9.79,235,15.43,340.9,0,0,109.39,11.51,179.79-35.61,12.11-50.51,28.62-97.71,33.62-119.4,6.63-28.71,28.18-169.78,31.7-262.08C2377.8,1555.86,2321.69,1592.24,2263.76,1593.28Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Medial_Knee_Joint_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2217.3,1943.33a359.79,359.79,0,0,1-50.23-.74c3.89,73.11,7.21,128.1,8.26,135.1a141.9,141.9,0,0,1-.72,42.42S2217.3,2045.16,2217.3,1943.33Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Dorsal_Knee_Joint_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2333.22,2005.82c-.56-30,5.56-65.17,13.64-98.84-39.66,26.54-91.68,34.48-129.56,36.35,0,101.83-42.69,176.78-42.69,176.78,64.06-29.51,105.74-22.18,162,0-1-4.58-2.14-9.3-3.37-14.2C2327.66,2067,2333.22,2064.2,2333.22,2005.82Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Shin_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2251.05,2501c-9.86-67,29.09-306.3,37.87-396.26-21.69-4.82-42.76-5.73-66.05-1,.2,96.71,9.08,349.16-20.86,395.53l-.55.88A181.22,181.22,0,0,0,2251.05,2501Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Medial_Calf_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2202,2499.27c29.89-46.53,21.06-298.86,20.86-395.53-14.92,3-30.75,8.31-48.26,16.37h0c-1.08,6-2.55,10.89-4.27,13.64-27.76,70.82-19.2,205.35-13.83,221.46s1.47,57.15,6.29,67.78c8.81,19.47,10.95,49.07,10.16,70.28A260.58,260.58,0,0,0,2202,2499.27Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Lateral_Calf_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2336.59,2120.11c-16.87-6.65-32.43-12-47.67-15.34-8.78,90-47.73,329.3-37.87,396.26a156.82,156.82,0,0,0,33-7.76c16-69.59,57.14-182,59.9-231.44S2349.72,2178.78,2336.59,2120.11Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="F_L_Foot">
                        <BodyPath pathId="F_L_Ankle_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M894.49,2589a223.1,223.1,0,0,1-1.94-28.88c-18.31-15-55.27-23.25-97.31-19.85-2,8.73-3.94,14.8-4.64,17.62-1.37,5.45-13,53.58-15.6,79,16.18-8.85,86.78-29.62,123.68.09-1.07-6.65-1.94-12.07-2.8-14.66C893.1,2614,914,2611.2,894.49,2589Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Lateral_Foot_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M933.41,2739.08c-5.56-22.24-12.51-43.09-22.24-57-6.68-9.55-10.09-30.23-12.46-45a.41.41,0,0,0-.15-.25,66.55,66.55,0,0,0-25.21-12.12c2.38,14.72,6.68,47.67,13.36,57.21,9.73,13.9,14.82,42.64,20.38,64.88,2.56,10.21,15.33,32.24,21.48,37.62a156.72,156.72,0,0,0,19.29-23.68C941.71,2755.41,936,2749.29,933.41,2739.08Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Forefoot" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M907.09,2746.85c-5.56-22.24-10.65-51-20.38-64.88-6.68-9.54-11-42.49-13.36-57.21-37.33-9.65-85,4.9-98.17,12a.37.37,0,0,0-.2.31c-.32,3.11-.49,5.87-.49,8.17,0,21.09,8,31.83,14.57,37.2s4,14.1,4,14.1c0,6.14,8.76-.19,9.82,3.53,5,17.64,5.9,79.76,3.21,83.59-2.06,2.95-1.67,37.35.27,54.47,0,0,71.51-2.47,122.22-53.69C922.42,2779.09,909.65,2757.06,907.09,2746.85Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Toe_Joint_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M947.86,2760.79h0c-49.25,74.2-141.48,77.36-141.51,77.37.59,5.16,1.32,8.75,2.16,9.43,6,4.84,10.69,1.33,14.51,2.09,0,0,87.54-4,136.79-78.21C956.19,2767.59,951.93,2764.36,947.86,2760.79Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M939.36,2846.06c13.92,1.46,19.54-8.76,18-19a19.26,19.26,0,0,0-2.89-7.89.39.39,0,0,1,.45-.59c-8.41-3.56-15.31-11.67-19.69-18C910.34,2824,882,2836.23,860,2842.67c10.23,12.21,24.18,30.23,28.5,42.45,0,.07,0,.26.2.55,5.67,8.28,17.58,6.42,23,6.42,5.63,0,11.26-5,6.46-20.59a.73.73,0,0,1,1-.85c5.39,3.22,18.11,2.07,21.39.61,3.71-1.65,11-13.28-1.53-24.36A.48.48,0,0,1,939.36,2846.06Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Little_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M959.81,2771.47a164.77,164.77,0,0,1-24.61,29.14c4.38,6.32,11.28,14.43,19.69,18,3.7,1.38,7.74-.5,9.79-1.72,6.12-3.68,6.12-24.49,2.09-34.71A33.51,33.51,0,0,0,959.81,2771.47Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_L_Big_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M825.36,2850.86c4.25,3.83,6.95,16.28,9.08,23.93,7.73,44.74,27.47,39.39,33.42,39.39,5.7,0,20-4.28,20.8-28.51-4.1-12.22-18.31-30.6-28.7-43-21.52,6.3-36.94,7-36.94,7A4.74,4.74,0,0,1,825.36,2850.86Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="F_R_Foot">
                        <BodyPath pathId="F_R_Ankle_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M748.67,2540.2c-42.21-3.5-75.27,4.86-93.65,19.88-1.28,12.41-4.36,25.59-8.81,33.46-3.06,5.24-3.33,26.09-3.83,43.51,37.09-30,108.45-8.76,124.07,0C760.33,2594.62,753.84,2559.43,748.67,2540.2Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Lateral_Foot_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M662.49,2663.24c1-4.12,5.31-28.35,5.76-38.6a66.4,66.4,0,0,0-25.87,12.41c-.29,9.87-.65,18.64-1.64,22.84-2,8.67-27.7,67.92-32,92.55a60.83,60.83,0,0,0-13.16,11.5,164.4,164.4,0,0,0,21,25.63c3.74-4.68,9.1-12.19,12.85-16.85C637.05,2760.9,660.45,2671.91,662.49,2663.24Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Forefoot" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M767.43,2643.92q-.48-3.47-1-6.87c-12.47-7-60.48-21.94-98.2-12.41-.45,10.25-4.79,34.48-5.76,38.6-2,8.67-25.44,97.66-33.06,109.48-3.75,4.66-9.11,12.17-12.85,16.85,50.13,49.9,118.21,54.15,118.26,54.15a18.85,18.85,0,0,0,1-1.89c4.79-10.94,1.37-114.22-2-131.57C733.85,2710.26,775.62,2702.07,767.43,2643.92Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Toe_Joint_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M595.55,2763.94A66.55,66.55,0,0,0,586,2778.7c49.26,74.21,136.91,78.4,136.92,78.4,4.79-4.44,9.44-9.11,11.94-13.38C734.78,2843.72,644.79,2838.11,595.55,2763.94Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M652.51,2895.46c1.72-24.2,17.19-26.89,20.18-30.33.66-4.85,4-11,7.77-16.79-21.76-7.06-48.53-19.73-71.88-42.41-5.82,8.31-14.18,16.63-24.32,16.62,0,0-9.76,33.9,14.62,30.24-1.83,5.79-8.54,29.26,18.28,25C615.94,2890.58,624.78,2900.64,652.51,2895.46Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Little_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M608.58,2805.93A165.59,165.59,0,0,1,586,2778.7c-9.59,20.18-8,41.54-1.72,43.85C594.4,2822.56,602.76,2814.24,608.58,2805.93Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="F_R_Big_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M682.46,2919.81c22.57-.69,22.57-40.36,24.62-46.51,1.16-3.48,8.65-9.58,15.82-16.2,0,0-18.09-.87-42.44-8.76-3.81,5.76-7.11,11.94-7.77,16.79-3,3.44-18.46,6.13-20.18,30.33C653.43,2917.7,672.93,2919.53,682.46,2919.81Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_L_Foot">
                        <BodyPath pathId="B_L_Ankle_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2109.93,2493.27s-51.77,20.41-109.16,0c5,24.18,7.74,44.63,6.26,56.94-2.5,20.67-4,47.17-9.25,62.81,11.51-22.31,48.24-59.45,111.74-79.49C2109.11,2522.08,2109.29,2507.63,2109.93,2493.27Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Lateral_Foot_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2024.2,2580.81c-13,11.75-21.77,23.19-26.42,32.21a37.35,37.35,0,0,1-3.11,7.12c-4.79,8.21,7.73,45.16-5.88,61.68-7.59,9.22-2.55,82.46-2.58,82.5-11.86,17-16.83,41.29-18.31,64a104,104,0,0,0,19.76,25.8c-.05-.44-3.73-32.08,17.08-82.81C2011.74,2728.64,2021.52,2667.72,2024.2,2580.81Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Heel_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2112.88,2556c-1.86-1.8-2.93-10.49-3.36-22.48-37.84,11.94-66.16,29.95-85.32,47.28a1306.86,1306.86,0,0,1-15.66,166.84s23.62-41.69,95.94-42.48c-1.37-10.57,51.6-18.56,25.81-78.06C2103.75,2565.88,2129.34,2571.92,2112.88,2556Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="L_Arch_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2104.48,2705.17c-72.32.79-95.94,42.48-95.94,42.48-1.31,8.45-2.6,16.32-3.8,23.65-20.81,50.73-17.13,82.37-17.08,82.81,28.3,26.72,69.45,33.29,112.41,20.89,26.84-39.73,15.48-65.3,11.89-87.29C2110.12,2776.44,2105.92,2716.32,2104.48,2705.17Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Little_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1967.9,2828.31c-1.93,29.58,2,56.53,4.38,61.47,5.16,10.93,11.44,2.62,12.87.61.23-11.31,3.08-25.58,5-34A103.2,103.2,0,0,1,1967.9,2828.31Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M1990.14,2856.37c-1.91,8.44-4.76,22.71-5,34,.61,17.78,19,11,19,11-.62,18.39,20.83,14.1,20.83,14.1,3.07,22.07,18.39,11,18.39,11a165.27,165.27,0,0,1,38.53-47.42C2046.88,2884.93,2014.22,2877.55,1990.14,2856.37Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_L_Big_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2100.07,2875a158,158,0,0,1-18.15,4.11,165.41,165.41,0,0,0-38.55,47.44c3.68,25.73,15.84,21.74,28.11,21.06,22.57-.68,29.13-47.38,31.18-53.54S2093.39,2884.9,2100.07,2875Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                    <g id="B_R_Foot">
                        <BodyPath pathId="B_R_Ankle_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2279.57,2546.79c-3.73-9-1.26-28.51,4.48-53.52-57.4,20.41-111.09,0-111.09,0-.5,13.28-2.14,23.27-4,25.4l-.53,12c63.49,20,104.11,60,115.62,82.29-3.07-26.3-8.85-48.91-11.92-55.95C2272.53,2551.06,2282.19,2553.12,2279.57,2546.79Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Lateral_Foot_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2310.07,2806c-2.53-13.89-5.65-31.48-19.63-41.12,3.38-33.74,6.27-95.07-4.82-105.19,1.06-15.3.18-31.62-1.58-46.73-4.37-8.47-13.22-19.36-25.65-30.86,2.66,86,9.29,147.28,16.18,189.64,19.84,27.79,20.18,80.8,20.19,82.35a130.76,130.76,0,0,0,17.85-25.78C2311.8,2817.57,2310.59,2808.83,2310.07,2806Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Heel_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2270.52,2744.15c-5.32-40.15-10-93.18-12.13-162.05-20.29-18.79-50.6-39-90-51.43-.57,12.66-1.37,30.79-1.37,30.8-7.72,36.52-43.88,105.45,7.7,143.05C2232.62,2705.15,2261.35,2733,2270.52,2744.15Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="R_Arch_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2270.52,2744.15c-9.17-11.12-37.9-39-95.77-39.63,0,24.1-1.45,73.27-8.68,87.25-23.13,44.34.49,75.68,11.09,81.94,56.48,14.11,91.73,8.86,117.6-19.62,0-1.55-.35-54.56-20.19-82.35Q2272.51,2759.1,2270.52,2744.15Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Little_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2312.61,2828.31c-7.45,13.58-15.62,24.39-25,32.64,2.59,6.54,5.52,15.58,6.16,24.33C2313.32,2903.61,2314.64,2855.3,2312.61,2828.31Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2287.66,2860.94c-21.53,19-49.28,24.24-89,17.37,0,0,26.84,21.53,33,55.18,20.73,13,23.62-15.43,23.62-15.43,23.62,12.54,20.73-15.9,20.73-15.9,16.39,16.87,17.84-16.88,17.84-16.88C2293.18,2876.53,2290.25,2867.49,2287.66,2860.94Z"
                            transform="translate(-108.06 -42.73)" />
                        <BodyPath pathId="B_R_Big_Toe_Discomfort" onClick={this.handleClick} potentialSyms={this.props.potentialSyms} selectedSyms={this.props.selectedSyms}
                            d="M2231.63,2933.49c-6.11-33.65-33-55.2-33-55.2-6.81-1.18-13.95-2.69-21.5-4.58.87,64.09,20.33,74.53,36.15,76.53C2224,2951.58,2232.11,2942.16,2231.63,2933.49Z"
                            transform="translate(-108.06 -42.73)" />
                    </g>
                </svg>
                <ReactTooltip id='symSvgs' className="small-font" place="left"
                    backgroundColor='rgba(0,0,0,0.8)' textColor='white' />
            </div>
        );
    }
}

export default BodyTemplate;