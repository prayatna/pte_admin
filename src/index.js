import React from 'react';
import {render} from 'react-dom';
import App from "./containers/App";
import {Provider} from 'react-redux'
import store from './store';
// import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store={store}>
   <App/>
</Provider>, document.getElementById('root'))