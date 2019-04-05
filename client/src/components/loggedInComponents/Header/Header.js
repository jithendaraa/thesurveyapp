import React, { Component } from 'react';
import classes from './Header.css';
import Button from '../../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { disconnect } from 'mongoose';

class Header extends Component {

    componentDidMount() {
        document.getElementById('username').addEventListener('mouseover', (e) => {
            let div = document.createElement("div");
            div.innerHTML = this.props.auth.displayName;
            console.log(e);
            div.style.zIndex = 2;
            div.style.position = "absolute";
            div.style.top = e.clientY;
            div.style.left = e.clientX;
            div.style.backgroundColor = "red";
            div.style.display = "block";
        })
    }

    render() {
        return (
            <div>
                <center>
                    <div className={classes.Wrapper}>
                        <h2 className={classes.LeftHead}>The Survey App</h2>
                        <h2 className={classes.RightHead}>
                            <div><Button id='username' btnText={this.props.auth.displayName.split('')[0]} borderRadius="20px" height="40px"/></div>
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