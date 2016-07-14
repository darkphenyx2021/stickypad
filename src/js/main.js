/**
 * Created by joshua.fair on 7/13/2016.
 */
var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/appAPI');

AppAPI.getNotes();

ReactDOM.render(
    <App />,
    document.getElementById('app')
);