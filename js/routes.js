import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';

import App from './components/App';
import Container from './components/Container'
import Error from './components/Error'
import AppHomeRoute from './routes/AppHomeRoute';

export default (
  <Route
    path="/"
    component={Container.Container}
    queries={ AppHomeRoute }>
    <IndexRoute
      component={App.Container}
      queries={ AppHomeRoute }
    />
  <Route path='*' component={Error} />
  </Route>
);
