import React, { Component } from 'react';


import { connect } from 'react-redux';
import * as actions from '../../../actions';
// import axios from 'axios';
import SimpleCard from '../../UI/Card/SimpleCard';

// import classes from './Dashboard.css';
import Spinner from '../../UI/Spinner/Spinner';



class Dashboard extends Component {


    async componentDidMount() {
        await this.props.fetchSurveys();
        // console.log(this.props.surveys[0])
    }

    renderSurveys = () => {
        // console.log(this.props.surveys);
        return (
            <div>

                {
                    this.props.surveys.reverse().map(survey => {

                        return (
                            <div key={survey._id} style={{ paddingTop: "10px", paddingLeft: "30px" }}>
                                <SimpleCard
                                    postedBy={survey.createdByName}
                                    postBody={survey.surveyName}
                                    questions={survey.questions}
                                    surveyId={survey._id}
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
                    {this.checkDashboard()}
                </center>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        surveys: state.surveys
    }
}

export default connect(mapStateToProps, actions)(Dashboard);