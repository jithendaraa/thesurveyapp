import React, { Component } from 'react';

import classes from './Home.css';
import * as actions from '../../actions';
import { connect } from 'react-redux';

// import Header from '../loggedInComponents/Header/Header';
// import Dashboard from '../loggedInComponents/Dashboard/Dashboard';
import Spinner from '../UI/Spinner/Spinner';
import GOAuthBtn from '../UI/Button/GoogleOAuthBtn';
import NewSurvey from '../loggedInComponents/NewSurvey/NewSurvey';


const guestHome = (
    <div className={classes.guestHome} style={{backgroundImage: "linear-gradient(to right, rgb(0,0,0) , rgb(255, 165, 0))"}}>
        <div className={classes.navbar} style={{backgroundImage: "linear-gradient(to right, rgb(0,0,0) , rgb(255, 165, 0))"}}>
            <h1 className={classes.header}>Survey App</h1>
        </div>
        <center className={classes.pad}>
            <div className={classes.separator}></div>
            <br />
            <div className={classes.pageContent} style={{fontSize: "22px"}}>
                <h1>Welcome to The survey app</h1>
                <h3>This is the Homepage of the Guest!</h3>
                <p >
                    Make and respond to surveys<br />
                    Questions are asked based on your previous responses. You can setuo your own decision making tree<br />
                    
                </p>
                <p>You are currently a guest and not logged in!</p>
                <p>Please Signin</p>
            </div>
            <center style={{paddingTop: "100px"}}><GOAuthBtn /></center>
        </center>
        
    </div>
);



class Home extends Component {

    async componentDidMount() {
        await this.props.fetchUser();
        console.log(this.props.auth)
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return (<div style={{paddingTop: "350px"}}><center><Spinner /></center></div>);
            case false:
                return (<div>{guestHome}</div>);
            default:
                
                let loggedInHome = (
                    <div>
                        
                        {/* <Header /> */}
                        <NewSurvey />
                        {/* <Dashboard />    Contains dp, userName, userEmail{search}{posts} */}
                    </div>);
                return (
                    <div>
                        {loggedInHome}
                    </div>
                );
        }
    }

    render() {
        return (
            <div>
               {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        auth: state.auth
    };
}

export default connect(mapStateToProps, actions)(Home);