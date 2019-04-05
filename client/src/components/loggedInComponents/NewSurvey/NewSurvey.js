import React, {Component} from 'react';
import classes from './NewSurvey.css';

class NewSurvey extends Component{

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

    render(){
        return(
            <div>
                <center>
                    <h1 style={{color: "white"}}>New Survey</h1>
                    <div id="0" className={classes.Wrap}>
                        <div id='0_1' className={classes.Node} onMouseDown={this.makeChildren}></div>
                    </div>
                </center>
            </div>
        )
    }
}

export default NewSurvey;

// 1+2+4+8 -- maxdepth 3(0,1,2,3)