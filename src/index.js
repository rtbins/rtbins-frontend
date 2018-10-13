// babel-polfill is used for the features which cannot be transpiled by babel
import 'babel-polyfill';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react'
import './css/styles.css'
import 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/toastr/build/toastr.min.css'
import configureStore from './store/configureStore'
import {loadCourses} from './actions/courseAction.js'
import { loadAuthors } from './actions/authorActions'
import App from './components/App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('app')
);