import React, { Component } from 'react';
import classes from './Node.css';

class Node extends Component{
    state = {
        type: this.props.type === "green" ? "yes" : "no"
    }

    componentDidMount(){
        console.log(this.state.type);
    }

    render(){
        return(
            <div>
                <div
                    id={this.props.id}
                    style={{display: this.props.display}}
                    className={classes.Node}
                    onClick={this.props.onClick}
                    onMouseDown={this.props.onMouseDown}
                    style={{backgroundColor: this.props.type}}
                    >
                </div>
            </div>
        )
    }
}

export default Node;