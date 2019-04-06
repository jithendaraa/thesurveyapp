import axios from 'axios';
import * as actions from './actionTypes';

export const fetchUser = () => async dispatch => {
    const user = await axios.get('/api/current_user');
    dispatch({ type: actions.FETCH_USER, payload: user.data });
};

export const postNewSurvey = (survey) => async dispatch => {
    await axios.post('/api/newSurvey', survey);
    const surveys = await axios.get('/api/allSurveys');
    dispatch({ type: actions.FETCH_SURVEYS, payload: surveys.data });
}

export const fetchSurveys = () => async dispatch => {
    const surveys = await axios.get('/api/allSurveys');
    dispatch({ type: actions.FETCH_SURVEYS, payload: surveys.data });
}

export const postResponse = (responseData) => async dispatch => {
    await axios.post('/api/newResponse', responseData);
    const responses = await axios.get('/api/allResponses');
    console.log(responses);
    dispatch({ type: actions.FETCH_RESPONSES, payload: responses.data });
}

export const fetchMyResponses = () => async dispatch => {
    const responses = await axios.get('/api/responses');
    dispatch({ type: actions.FETCH_RESPONSES, payload: responses.data });
}