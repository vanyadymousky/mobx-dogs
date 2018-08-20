import React, { Fragment } from 'react';
import loadable from 'loadable-components';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';
import { bookmarksStore } from 'models/bookmarks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Before the components
import 'theme/theme/index.scss';

import { BookmarkBar } from './components/bookmark-bar';

render(
  <BrowserRouter>
    <Fragment>
      <DevTools />
      <BookmarkBar bookmarksStore={bookmarksStore} />
      <Switch>
        <Route exact path="/" component={loadable(() => import('./pages/home'))} />
        <Route path="/breeds" component={loadable(() => import('./pages/breeds'))} />
        <Route path="/breed/:breed" component={loadable(() => import('./pages/breed'))} />
        <Route path="**" component={loadable(() => import('./pages/not-found'))} />
      </Switch>
    </Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
