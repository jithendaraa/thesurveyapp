import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import reduxThunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import surveyReducer from './reducers/surveyReducer';

const reducers = combineReducers({
    auth: authReducer,
    surveys: surveyReducer
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));  

let app = (<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
