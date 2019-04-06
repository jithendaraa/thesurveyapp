import axios from 'axios';
import * as actions from './actionTypes';


export const fetchUser = () => async dispatch => {
    const user = await axios.get('/api/current_user');
    dispatch({ type: actions.FETCH_USER, payload: user.data });
};

export const postNewSurvey = (survey) => async dispatch => {
    await axios.post('/api/newSurvey', survey);
    // const surveys = await axios.get('/api/allSurveys');

    // dispatch({ type: actions.FETCH_SURVEYS, payload: surveys.data });
}

export const fetchSurveys = () => async dispatch => {
    
    const surveys = await axios.get('/api/allSurveys');
    dispatch({ type: actions.FETCH_SURVEYS, payload: surveys.data });
}