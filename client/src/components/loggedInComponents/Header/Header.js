import React, { Component } from 'react';
import classes from './Header.css';
import Button from '../../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { disconnect } from 'mongoose';

class Header extends Component {


    render() {
        return (
            <div>
                <center>
                    <div className={classes.Wrapper}>
                        <h2 className={classes.LeftHead}>The Survey App</h2>
                        <h2 className={classes.RightHead}>
                            <div style={{paddingLeft: "5px"}}><Button id='newSurveyBtn' btnText="New survey" href='/newSurvey'/></div>
                            <div style={{paddingLeft: "5px"}}><Button id='username' btnText={this.props.auth.displayName.split('')[0]} borderRadius="20px" height="40px"/></div>
                            <div style={{paddingLeft: "5px"}}><Button btnText="logout" color="white" href='/api/logout'/></div>
                        </h2>
                    </div>
                    <div className={classes.Separator}></div>
                </center>
                <div style={{color: "orange"}}>Currently logged in as: {this.props.auth.displayName}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(Header);