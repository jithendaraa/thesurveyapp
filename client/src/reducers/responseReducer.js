import * as action from '../actions/actionTypes';

export default function(state = null, actions) {
    switch(actions.type) {
        case action.FETCH_RESPONSES:
            return actions.payload || false;              //Boolean trick. a '' is treated as false coz !!'' is true
        default: 
            return state;
    }
};



