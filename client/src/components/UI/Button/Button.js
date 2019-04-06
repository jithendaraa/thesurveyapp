import React from 'react';

// import classes from './Button.css';

import Aux from '../../../hoc/Auxx/Auxx';
import Button from '@material-ui/core/Button';



const button = (props) => {


    let aStyle = {
        textDecoration: "none"
    };


    return (
        <Aux>
            <a href={props.href} style={aStyle}>
                <Button
                    href={props.href}
                    id={props.id}
                    type={props.type}
                    variant="contained"
                    color="primary"
                    style={{ color: props.color, width: props.width, height: props.height, fontSize: props.fontSize, paddingBottom: props.paddingBottom, backgroundColor: "black", borderRadius: props.borderRadius }}
                    onClick={props.onClick}
                    onMouseDown={props.onMouseDown}>{props.btnText}
                    </Button>
            </a>
        </Aux>
    );
}

export default button;
