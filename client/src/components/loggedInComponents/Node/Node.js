import React, { Component } from 'react';
import classes from './Node.css';

class Node extends Component{
    render(){
        return(
            <div>
                <div
                    id={this.props.id}
                    style={{display: this.props.display}}
                    className={classes.Node}
                    onClick={this.props.onClick}
                    onMouseDown={this.props.onMouseDown}
                    >
                </div>
            </div>
        )
    }
}

export default Node;