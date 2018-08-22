import React from 'react';
import loadable from 'loadable-components';
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Container } from 'reactstrap';
import DevTools from 'mobx-react-devtools';
import { Router, Switch, Route } from 'react-router-dom';

// Before the components
import 'theme/theme/index.scss';

import { BookmarkBar } from './components/bookmark-bar';
import { stores } from './models';
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routingStore);

render(
  <Provider {...stores}>
    <Router history={history}>
      <Container>
        <DevTools />
        <Breadcrumbs />
        <BookmarkBar />
        <Switch>
          <Route exact path="/" component={loadable(() => import('./pages/home'))} />
          <Route path="/breeds" component={loadable(() => import('./pages/breeds'))} />
          <Route path="/breed/:breed" component={loadable(() => import('./pages/breed'))} />
          <Route path="**" component={loadable(() => import('./pages/not-found'))} />
        </Switch>
      </Container>
    </Router>
  </Provider>,
  document.getElementById('root')
);
