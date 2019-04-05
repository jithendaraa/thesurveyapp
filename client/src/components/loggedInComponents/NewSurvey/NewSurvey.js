import React, { Component } from 'react';
import classes from './NewSurvey.css';
import Node from '../Node/Node';

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

    render() {
        return (
            <div>
                <center>
                    <h1 style={{ color: "white" }}>New Survey</h1>
                    <div>
                        <Node id="1_1" onMouseDown={this.nodeclicked}/>
                    </div>

                    <div className={classes.FlexingA}>
                        <Node id="2_1" onMouseDown={this.nodeclicked}/>
                        <Node id="2_2" onMouseDown={this.nodeclicked}/>
                    </div>

                    <div className={classes.FlexingB}>
                        <Node id="3_1" onMouseDown={this.nodeclicked}/>
                        <Node id="3_2" onMouseDown={this.nodeclicked}/>
                        <Node id="3_3" onMouseDown={this.nodeclicked}/>
                        <Node id="3_4" onMouseDown={this.nodeclicked}/>
                    </div>

                    <div className={classes.FlexingC}>
                        <Node id="4_1" />
                        <Node id="4_2" />
                        <Node id="4_3" />
                        <Node id="4_4" />
                        <Node id="4_5" />
                        <Node id="4_6" />
                        <Node id="4_7" />
                        <Node id="4_8" />
                    </div>

                </center>
            </div>
        )
    }
}

export default NewSurvey;

// 1+2+4+8 -- maxdepth 3(0,1,2,3)