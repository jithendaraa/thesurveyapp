import React, { Component } from 'react';
import classes from './NewSurvey.css';
import Node from '../Node/Node';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import {connect} from 'react-redux';
import * as actions from '../../../actions';
// import { stat } from 'fs';

class NewSurvey extends Component {

    constructor(props) {
        super(props);

        this.maxDepth = 4;
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

    saveSurvey = async() => {
        let nameOfSurvey = document.getElementById("surveyName").value;

        if (nameOfSurvey !== "" || nameOfSurvey.trim() !== "") {
            let allIds = [];
            let allInpIds = [];
            let depth = 1;
            let elemNumber = 1;
            for (depth = 1; depth < this.maxDepth + 1; depth++) {
                for (elemNumber = 1; elemNumber < (Math.pow(2, depth - 1) + 1); elemNumber++) {
                    // console.log(depth + "_" + elemNumber);
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

            inpValues = this.inpValFilter(inpValues);           // convert aprropriate nodes to "" based on heirarchical inconsistency(parent = "" && child = valid implies parent and child = "")
            console.log(inpValues);

            let surveyObj = {
                createdById: this.props.auth._id,
                createdByName: this.props.auth.displayName,
                surveyName: nameOfSurvey,
                questions: inpValues
            }


            if(inpValues[0] !== "" && inpValues[0].trim() !== ""){
                await this.props.postNewSurvey(surveyObj);
                window.location.href = '/';
            }

            else{
                alert("Your head question cannot be empty");
            }

        }

        
    }

    render() {
        return (
            <div>
                <center>
                    <h1 style={{ color: "white" }}>New Survey</h1>

                        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                            <div>
                                <b style={{ color: "white" }}>Name of the survey</b><Input id="surveyName" height="30px" />
                            </div>
                            <div>
                                <Button btnText="Save survey" onClick={this.saveSurvey} />
                            </div>
                        </div>


                    {/* Head Level-1 */}
                    <center style={{paddingRight: "100px", paddingTop: "55px"}}>       
                            <div style={{ cursor: "pointer", width: "5%" }}  ><Node id="1_1" treeType="head"  type="yellow" /></div>
                    </center>

                    <canvas id="canvas1" height="80px" width="1500px"></canvas>
        
                    {/* Level - 2 */}
                    <div className={classes.FlexingA}>
                        <div style={{width: "49.9%"}}>
                            <div className={classes.Nodewrap} id="2_1"  ><Node id="2_1" type="green" /></div>
                        </div>
                        <div style={{width: "49.9%"}}>
                            <div className={classes.Nodewrap} id="2_2"  ><Node id="2_2" type="red" /></div>
                        </div>
                    </div>


                    <canvas id="canvas2" height="125px" width="1500px"></canvas>

                    {/* Level-3 */}
                    <div className={classes.FlexingB}>
                        <div style={{width: "24.9%"}}>
                            <div className={classes.Nodewrap} id="3_1"  ><Node id="3_1" type="green" /></div>
                        </div>
                        <div style={{width: "24.9%"}}>
                            <div className={classes.Nodewrap} id="3_2"  ><Node id="3_2" type="red" /></div>
                        </div>
                        <div style={{width: "24.9%"}}>
                            <div className={classes.Nodewrap} id="3_3"  ><Node id="3_3" type="green" /></div>
                        </div>
                        <div style={{width: "24.9%"}}>
                            <div className={classes.Nodewrap} id="3_4"  ><Node id="3_4" type="red" /></div>
                        </div> 
                    </div>

                    <canvas id="canvas3" height="125px" width="1500px"></canvas>
                    {/* Level-4 */}
                    <div className={classes.FlexingC}>
                        <div style={{width: "12.49%"}}>
                            <div className={classes.Nodewrap} id="4_1"><Node id="4_1" treeType="leaf" type="green" /></div>
                        </div>
                        <div style={{width: "12.49%"}}>
                            <div className={classes.Nodewrap} id="4_2"><Node id="4_2" treeType="leaf" type="red" /></div>
 
                        </div>
                        <div style={{width: "12.49%"}}>
                            <div className={classes.Nodewrap} id="4_3"><Node id="4_3" treeType="leaf" type="green" /></div>
                        </div>
                        <div style={{width: "12.49%"}}>
                            <div className={classes.Nodewrap} id="4_4"><Node id="4_4" treeType="leaf" type="red" /></div>
 
                        </div>
                        <div style={{width: "12.49%"}}>
                            <div className={classes.Nodewrap} id="4_5"><Node id="4_5" treeType="leaf" type="green" /></div>
                        </div>
                        <div style={{width: "12.49%"}}>
                            <div className={classes.Nodewrap} id="4_6"><Node id="4_6" treeType="leaf" type="red" /></div>
 
                        </div>
                        <div style={{width: "12.49%"}}>
                            <div className={classes.Nodewrap} id="4_7"><Node id="4_7" treeType="leaf" type="green" /></div>
                        </div>
                        <div style={{width: "12.49%"}}>
                            <div className={classes.Nodewrap} id="4_8"><Node id="4_8" treeType="leaf" type="red" /></div>
                        </div>
                    </div>

                    <div style={{paddingTop: "75px"}}>

                    </div>

                </center>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        auth: state.auth,
        surveys: state.surveys
    }
}

export default connect(mapStateToProps, actions)(NewSurvey);

// 1+2+4+8 -- maxdepth 3(0,1,2,3)