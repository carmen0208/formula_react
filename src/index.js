import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createStore } from 'redux';
import reducer from './reducer';
// import {store } from './store';
import {Provider } from 'react-redux';
import './index.css';

const store = createStore(reducer);
// const store = store;

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));
