import 'babel-polyfill';

import App from './components/App';
import Container from './components/Container'
import AppHomeRoute from './routes/AppHomeRoute';
import routes from './routes';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import { applyRouterMiddleware, browserHistory, Router, Route, IndexRoute } from 'react-router';
import useRouterHistory from 'react-router/lib/useRouterHistory';
import { createHashHistory } from 'history';
import useRelay from 'react-router-relay';

const history = useRouterHistory(createHashHistory)({ queryKey: false });


ReactDOM.render(
  <Router
    history={history}
    routes={routes}
    render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store} />,
  document.getElementById('root')
);
