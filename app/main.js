import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import Navbar from './components/Navbar';

let history = createBrowserHistory();

import Iso from 'iso';
import alt from './alt';

// ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));

Iso.bootstrap(function (state, meta) {
    alt.bootstrap(state);
    ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
});
