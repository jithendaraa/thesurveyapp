import React, { Component } from 'react';
import classes from './Node.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

class Node extends Component{
    state = {
        type: null
    }

    constructor(props){
        super(props);

        this.id = this.props.id;
        this.depth = parseInt(this.id.split('')[0]);
        this.elemNumber = parseInt(this.id.split('')[2]);
    }

    async componentDidMount(){
        if(this.props.id === "1_1"){
            await this.setState({ type: "head" });
        }
        else{
            if(this.props.type === "green"){
                await this.setState({ type: "yes" });
            }
            else if(this.props.type === "red"){
                await this.setState({ type: "no" })
            }
        }
        // console.log(this.state.type);
    }

    mouseDown = (e) => {    
        
        let inpElem = document.getElementById("inp" + this.props.id);
        let inpVal = inpElem.value;


        if(inpVal !== ""){
            if(e.button === 0){
                let depthNextNode = this.depth + 1;
                let elemNumNextNode = (2*this.elemNumber) - 1;
                let reqdId = depthNextNode + "_" + elemNumNextNode;
                let div = document.getElementById(reqdId);
                div.style.display = "block";

                console.log(this.depth);
                console.log(this.elemNumber);

                let factor = (2*this.elemNumber) - 1;

                let splitUp = Math.pow(2, this.depth);
                let canvas = document.getElementById('canvas'+this.depth)
                let scrnWidth = canvas.width;
                let scrHeight = canvas.height;
                let ctx = canvas.getContext('2d');
                let splits = scrnWidth/splitUp;
                
                let x = (factor * splits) ;

                let d = scrnWidth/(Math.pow(2, this.depth + 1));

                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, scrHeight/2);
                ctx.lineTo(x-d, scrHeight/2);
                ctx.lineTo(x-d, scrHeight);
                ctx.strokeStyle = "white";
                ctx.stroke();
            }
    
            if(e.button === 2){
                let depthNextNode = this.depth + 1;
                let elemNumNextNode = (2*this.elemNumber);
                let reqdId = depthNextNode + "_" + elemNumNextNode;
                let div = document.getElementById(reqdId);
                div.style.display = "block";

                console.log(this.depth);
                console.log(this.elemNumber);

                let factor = (2*this.elemNumber) - 1;

                let splitUp = Math.pow(2, this.depth);
                let canvas = document.getElementById('canvas'+this.depth);
                let scrnWidth = canvas.width;
                let scrHeight = canvas.height;
                let ctx = canvas.getContext('2d');
                let splits = scrnWidth/splitUp;
                
                let x = (factor * splits) ;

                let d = scrnWidth/(Math.pow(2, this.depth + 1));

                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, scrHeight/2);
                ctx.lineTo(x+d, scrHeight/2);
                ctx.lineTo(x+d, scrHeight);
                ctx.strokeStyle = "white";
                ctx.stroke();
            } 
        }
        
    }

    render(){
        return(
            <div>
                <div
                    id={this.props.id}
                    style={{display: this.props.display}}
                    className={classes.Node}
                    onClick={this.props.onClick}
                    style={{backgroundColor: this.props.type, display: "inline-block", padding: "5px 7px"}}
                    >
                    <Input 
                        placeholder="Your question here"
                        height="25px"
                        id={"inp" + this.props.id}
                        type={this.state.type}/>
                    {this.props.treeType !== "leaf" ? (<div style={{paddingTop: "5px"}}><Button btnText="Add Child" onMouseDown={this.mouseDown}/></div>) : null }
                    <b>Depth: {this.depth} <br /> Element Number: {this.elemNumber} <br /> {this.props.treeType === "head" ? null : (<b>Child of Element: {Math.ceil((this.elemNumber + 1)/2)}</b>)}</b>
                </div>
            </div>
        )
    }
}

export default Node;