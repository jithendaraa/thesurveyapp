import React, { Component } from 'react';
import classes from './NewSurvey.css';
import Node from '../Node/Node';
import Button from '../../UI/Button/Button';

class NewSurvey extends Component {

    state = {
        currentDepth: 0
    }

    makeChildren = (e) => {
        console.log(e.button);
        let clickedId = e.target.id;
        let clickedDepth = parseInt(clickedId.split('')[0]);
        let elemNumber = parseInt(clickedId.split('')[2]);

        let clickedElem = document.getElementById(clickedId);
        console.log(clickedElem.parentElement.style.width);

        let childWrapper = document.createElement("div")

        // console.log(parentDiv);
        // console.log(clickedDepth);
        // console.log(elemNumber);

        // if(clickedDepth === this.state.currentDepth){
        //     let currentDepth = this.state.currentDepth + 1;
        //     await this.setState({ currentDepth });
        //     let numOfChild = Math.pow(2, currentDepth);
        //     console.log(numOfChild);

        //     let i = 0;

        //     let wrapperDiv = document.createElement("div");
        //     wrapperDiv.style.display = "flex";
        //     wrapperDiv.style.flexWrap = "wrap";
        //     wrapperDiv.style.justifyContent = "space-around"



        //     for(i=0; i<numOfChild; i++){
        //         let subWrapperDiv = 
        //         let div = document.createElement("div");

        //         div.id = currentDepth + "_" + (i+1);
        //         div.className = classes.Node;
        //         div.addEventListener('click', this.makeChildren);
        //         wrapperDiv.appendChild(div);
        //     }

        //     parentDiv.appendChild(wrapperDiv);
        // }
        // console.log(this.state.currentDepth)
    }

    nodeclicked = (e) => {
        console.log(e.button);
        let id = e.target.id;
        let depth = parseInt(e.target.id.split('')[0]);
        let elemNumber = parseInt(e.target.id.split('')[2]);
        // console.log(depth);
        // console.log(elemNumber);
    }

    nodeClicked = (e) => {
        let id = e.target.id;
        let depth = parseInt(e.target.id.split('')[0]);
        let elemNumber = parseInt(e.target.id.split('')[2]);
        console.log("depth: " + depth);
        console.log("elemNUM: " + elemNumber);
        if(e.button === 0){
            console.log("in")
            let depthNextNode = depth + 1;
            let elemNumNextNode = (2*elemNumber) - 1;
            let reqdId = depthNextNode + "_" + elemNumNextNode;
            let div = document.getElementById(reqdId);
            div.style.display = "block";
        }

        if(e.button === 2){
            let depthNextNode = depth + 1;
            let elemNumNextNode = (2*elemNumber);
            let reqdId = depthNextNode + "_" + elemNumNextNode;
            let div = document.getElementById(reqdId);
            div.style.display = "block";
        }

        
    }

    render() {
        return (
            <div>
                <center>
                    <h1 style={{ color: "white" }}>New Survey</h1>
                    <div style={{border: "1px solid white"}}>
                        <div style={{cursor: "pointer"}} onMouseDown={this.nodeClicked}><Node id="1_1" onMouseDown={this.nodeclicked}/></div>
                    </div>

                    <div className={classes.FlexingA}>
                        <div className={classes.Nodewrap} id="2_1" onMouseDown={this.nodeClicked}><Node id="2_1" type="green"/></div>
                        <div className={classes.Nodewrap} id="2_2" onMouseDown={this.nodeClicked}><Node id="2_2" type="red"/></div>
                    </div>

                    <div className={classes.FlexingB}>
                        <div className={classes.Nodewrap} id="3_1" onMouseDown={this.nodeClicked}><Node id="3_1" type="green"/></div>
                        <div className={classes.Nodewrap} id="3_2" onMouseDown={this.nodeClicked}><Node id="3_2" type="red"/></div>
                        <div className={classes.Nodewrap} id="3_3" onMouseDown={this.nodeClicked}><Node id="3_3" type="green"/></div>
                        <div className={classes.Nodewrap} id="3_4" onMouseDown={this.nodeClicked}><Node id="3_4" type="red"/></div>
                    </div>

                    <div className={classes.FlexingC}>
                        <div className={classes.Nodewrap} id="4_1"><Node id="4_1" type="green"/></div>
                        <div className={classes.Nodewrap} id="4_2"><Node id="4_2" type="red"/></div>
                        <div className={classes.Nodewrap} id="4_3"><Node id="4_3" type="green"/></div>
                        <div className={classes.Nodewrap} id="4_4"><Node id="4_4" type="red"/></div>
                        <div className={classes.Nodewrap} id="4_5"><Node id="4_5" type="green"/></div>
                        <div className={classes.Nodewrap} id="4_6"><Node id="4_6" type="red"/></div>
                        <div className={classes.Nodewrap} id="4_7"><Node id="4_7" type="green"/></div>
                        <div className={classes.Nodewrap} id="4_8"><Node id="4_8" type="red"/></div>
                    </div>

                    <center style={{position: "fixed", bottom: "100px", width: "100%"}}>
                        <Button btnText="Save survey" />
                    </center>

                </center>
            </div>
        )
    }
}

export default NewSurvey;

// 1+2+4+8 -- maxdepth 3(0,1,2,3)