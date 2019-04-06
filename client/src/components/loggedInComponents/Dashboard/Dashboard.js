import React, { Component } from 'react';


import { connect } from 'react-redux';
import * as actions from '../../../actions';
// import axios from 'axios';
import SimpleCard from '../../UI/Card/SimpleCard';

// import classes from './Dashboard.css';
import Spinner from '../../UI/Spinner/Spinner';



class Dashboard extends Component {

    constructor(props){
        super(props);

        this.responses = [];
    }

    async componentDidMount() {
        await this.props.fetchSurveys();
        await this.props.fetchMyResponses();
        console.log(this.props.responses);
        // this.myResponses = this.props.responses._survey
    }

    renderSurveys = () => {
        
        // console.log(this.props.surveys);
        return (
            <div>

                {
                    this.props.surveys.reverse().map(survey => {

                        let i = 0;
                        let reqdResponse = null;
                        for(i=0; i<this.props.responses.length; i++){
                            if(this.props.responses[i]._survey.toString() === survey._id.toString() && this.props.responses[i].responseById === this.props.auth._id ){
                                this.responses.push(this.props.responses[i]);
                                reqdResponse = this.props.responses[i];
                            }
                        }

                        console.log(reqdResponse)
                        console.log(reqdResponse !== null)
                        

                        return (
                            <div key={survey._id} style={{ paddingTop: "10px", paddingLeft: "30px" }}>
                                <SimpleCard
                                    postedBy={survey.createdByName}
                                    postBody={survey.surveyName}
                                    questions={survey.questions}
                                    surveyId={survey._id}
                                    responded={reqdResponse !== null}
                                    response={reqdResponse}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    checkDashboard() {
        if (this.props.surveys) {
            if (this.props.surveys.length === 0) {
                return (<div style={{ color: "white" }}>No surveys to display</div>)
            }
            else if (this.props.surveys.length >= 1) {
                return this.renderSurveys();
            }
        }
        else {
            return (<Spinner />)
        }
    }



    render() {
        return (
            <div style={{ color: "white" }}>
                Dashboard
                <center>
                    {this.props.responses !== null ? this.checkDashboard() : (<Spinner />) }
                    {/* {this.checkDashboard()} */}
                </center>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        surveys: state.surveys,
        responses: state.responses
    }
}

export default connect(mapStateToProps, actions)(Dashboard);