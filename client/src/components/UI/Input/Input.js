import React, { Component } from 'react';

import Aux from '../../../hoc/Auxx/Auxx';

import classes from './Input.css';

class Input extends Component {

    state = {
        touched: false
    }

    touched = () => {
        if(this.state.touched === false){
            this.setState({touched: true});
        }
    }

    render() {

        let style = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.bgColor
        }

        // if(this.props.type === "yes"){
        //     if(this.props.pmatch){
        //         style = {
        //             width: this.props.width,
        //             height: this.props.height,
        //             backgroundColor: "lightgreen",
        //             transition: "1.5s"
        //         }
        //     }

        //     else if(this.props.type === "no"){
        //         style = {
        //             width: this.props.width,
        //             height: this.props.height,
        //             backgroundColor: "salmon",
        //             transition: "1.5s"
        //         }
        //     }

        //     else if(this.props.type === "head"){
        //         style = {
        //             width: this.props.width,
        //             height: this.props.height,
        //             backgroundColor: "white",
        //             transition: "1.5s"
        //         }
        //     }
        // }

        return(
            <Aux>
                <input
                    className={classes.Input}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    value={this.props.value}
                    style={style}
                    autoComplete="off"
                    id={this.props.id}
                    onClick={this.touched}
                    onChange={this.props.changed}
                    name={this.props.name}
                    />
            </Aux>
        )
    }
}

export default Input;
