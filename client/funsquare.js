import React from 'react';
import { render } from 'react-dom';
import css from './styles/main.styl';
import Wrapper from './components/Wrapper';
import Single from './components/Single';
import ContactPage from './components/ContactPage';
import Main from './components/Main';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Wrapper}>
        <IndexRoute component={Main}/>
      </Route>
      <Route path="/contact" component={ContactPage}>
        <IndexRoute component={Main}/>
      </Route>
      <Route path="/view/:queryId" component={Single}>
        <IndexRoute component={Main}/>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
