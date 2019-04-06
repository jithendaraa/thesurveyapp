import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MyButton from '../Button/Button';

import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TakeSurveyPopup extends React.Component {
  state = {
    open: false,
    index: 0,
    btnText: "Next" 
  };

  constructor(props){
    super(props);

    this.response = [];
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  next = async() => {
      let response;
      if(document.getElementById("yes").checked){
        response = "yes";
      }

      else{
        response = "no";
      }

      this.response.push(response);

      if(response === "yes"){
        let index = this.state.index;
        if(this.props.questions[(2*index) + 1] !== "" && (2*index) + 1 < 14){
          await this.setState({ index: (2*index + 1) });
        }
        else{
          await this.setState({ btnText: "submit"});
        }
        
      }

      else if(response === "no"){
        let index = this.state.index;
        if(this.props.questions[(2*index) + 2] !== "" && (2*index) + 2 < 15){
          await this.setState({ index: (2*index + 2) });
        }
        else{
          await this.setState({ btnText: "Submit"});
        }
      }

      if(this.state.btnText === "Submit"){

        console.log(this.response);
        this.response = [];
        this.setState({index: 0, open: "false"});

      }

  }



  render() {
    return (
      <div>
        <MyButton onClick={this.handleClickOpen} btnText="TakeSurvey" />

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Survey
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div>{this.props.questions[this.state.index]}</div>
              <form id="response">
                <input type="radio" name="gender" value="yes" id="yes" checked onClick={this.clicked}/> Yes<br />
                <input type="radio" name="gender" value="no" id="no" onClick={this.clicked}/> No<br />
              </form> 


            </DialogContentText>
          </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
            </Button>
                    <Button
                      type="submit"
                      btnText={this.state.btnText}
                      onClick={this.next}
                    >
                      Next
            </Button>
                  </DialogActions>
        </Dialog>
      </div>
                );
              }
            }
            
const mapStateToProps = state => {
  return {
                  auth: state.auth,
                surveys: state.surveys
              }
            }
            
export default connect(mapStateToProps, actions)(TakeSurveyPopup);