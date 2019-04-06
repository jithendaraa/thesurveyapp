import React, { Component } from 'react';
import classes from './NewSurvey.css';
import Node from '../Node/Node';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

class NewSurvey extends Component {

    constructor(props) {
        super(props);

        this.maxDepth = 4;
    }


    nodeClicked = () => {
        let i = 0;
        //     let id = e.target.id;
        //     let depth = parseInt(id.split('')[0]);
        //     let elemNumber = parseInt(id.split('')[2]);
        //     // console.log("depth: " + depth);
        //     // console.log("elemNUM: " + elemNumber);
        //     if(e.button === 0){
        //         let depthNextNode = depth + 1;
        //         let elemNumNextNode = (2*elemNumber) - 1;
        //         let reqdId = depthNextNode + "_" + elemNumNextNode;
        //         let div = document.getElementById(reqdId);
        //         div.style.display = "block";
        //     }

        //     if(e.button === 2){
        //         let depthNextNode = depth + 1;
        //         let elemNumNextNode = (2*elemNumber);
        //         let reqdId = depthNextNode + "_" + elemNumNextNode;
        //         let div = document.getElementById(reqdId);
        //         div.style.display = "block";
        //     } 
    }

    changedHandler = (e) => {
        let i = 0;
    }

    getAllInpElems = (allInpIds) => {
        let allInpElems = [];

        allInpIds.map(inpId => {
            allInpElems.push(document.getElementById(inpId))
        });

        return allInpElems;
    }

    inpValFilter = (inpValues) => {

        if(inpValues[0] === "" || inpValues[0].trim() === "" ){
            inpValues[1] = "";
            inpValues[2] = "";
        }

        if(inpValues[1] === "" || inpValues[1].trim() === "" ){
            inpValues[3] = "";
            inpValues[4] = "";
        }

        if(inpValues[2] === "" || inpValues[2].trim() === "" ){
            inpValues[5] = "";
            inpValues[6] = "";
        }

        if(inpValues[3] === "" || inpValues[3].trim() === "" ){
            inpValues[7] = "";
            inpValues[8] = "";
        }

        if(inpValues[4] === "" || inpValues[4].trim() === "" ){
            inpValues[9] = "";
            inpValues[10] = "";
        }

        if(inpValues[5] === "" || inpValues[5].trim() === "" ){
            inpValues[11] = "";
            inpValues[12] = "";
        }

        if(inpValues[6] === "" || inpValues[6].trim() === "" ){
            inpValues[13] = "";
            inpValues[14] = "";
        }

        return inpValues;
    }

    saveSurvey = () => {
        let nameOfSurvey = document.getElementById("surveyName").value;

        if (nameOfSurvey !== "" || nameOfSurvey.trim() !== "") {

            let allIds = [];
            let allInpIds = [];

            let depth = 1;
            let elemNumber = 1;

            for (depth = 1; depth < this.maxDepth + 1; depth++) {
                for (elemNumber = 1; elemNumber < (Math.pow(2, depth - 1) + 1); elemNumber++) {
                    console.log(depth + "_" + elemNumber);
                    let id = depth + "_" + elemNumber;
                    let inpId = "inp" + id;
                    allIds.push(id);
                    allInpIds.push(inpId);
                }
            }

            let inpElems = this.getAllInpElems(allInpIds);
            let inpValues = [];
            
            inpElems.map(inpElem => {
                inpValues.push(inpElem.value);
            });

            inpValues = this.inpValFilter(inpValues);
            console.log(inpValues);

            let sureyObj = {
                surveyName: nameOfSurvey,
                questions: inpValues
            }
        }

        



    }

    render() {
        return (
            <div>
                <center>
                    <h1 style={{ color: "white" }}>New Survey</h1>
                    <b style={{ color: "white" }}>Name of the survey</b><Input id="surveyName" height="30px" changed={this.changedHandler} />

                    <Button btnText="Save survey" onClick={this.saveSurvey} />

                    <div style={{ border: "1px solid white" }}>
                        <div style={{ cursor: "pointer", width: "5%" }}  ><Node id="1_1" type="yellow" /></div>
                    </div>

                    <div className={classes.FlexingA}>
                        <div className={classes.Nodewrap} id="2_1"  ><Node id="2_1" type="green" /></div>
                        <div className={classes.Nodewrap} id="2_2"  ><Node id="2_2" type="red" /></div>
                    </div>

                    <div className={classes.FlexingB}>
                        <div className={classes.Nodewrap} id="3_1"  ><Node id="3_1" type="green" /></div>
                        <div className={classes.Nodewrap} id="3_2"  ><Node id="3_2" type="red" /></div>
                        <div className={classes.Nodewrap} id="3_3"  ><Node id="3_3" type="green" /></div>
                        <div className={classes.Nodewrap} id="3_4"  ><Node id="3_4" type="red" /></div>
                    </div>

                    <div className={classes.FlexingC}>
                        <div className={classes.Nodewrap} id="4_1"><Node id="4_1" type="green" /></div>
                        <div className={classes.Nodewrap} id="4_2"><Node id="4_2" type="red" /></div>
                        <div className={classes.Nodewrap} id="4_3"><Node id="4_3" type="green" /></div>
                        <div className={classes.Nodewrap} id="4_4"><Node id="4_4" type="red" /></div>
                        <div className={classes.Nodewrap} id="4_5"><Node id="4_5" type="green" /></div>
                        <div className={classes.Nodewrap} id="4_6"><Node id="4_6" type="red" /></div>
                        <div className={classes.Nodewrap} id="4_7"><Node id="4_7" type="green" /></div>
                        <div className={classes.Nodewrap} id="4_8"><Node id="4_8" type="red" /></div>
                    </div>
                </center>
            </div>
        )
    }
}

export default NewSurvey;

// 1+2+4+8 -- maxdepth 3(0,1,2,3)