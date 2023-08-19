import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer/index';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk)); 




ReactDOM.render(
  <Provider store= {store}>
  <App /> 
  </Provider>,
  document.getElementById('root')
);
