import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App";
import {Provider} from 'react-redux'
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom'


ReactDOM.render(
    <Provider store={store}>
   <App/>
</Provider>, document.getElementById('root'))