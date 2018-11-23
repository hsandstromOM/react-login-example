import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';


import App from './components/app';
import SuccessView from './components/common/SuccessView';
import reduxStore from './store';
import './../sass/style.scss';

const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk)(createStore));
const store = createStoreWithMiddleware(reduxStore);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
          <Route path="/success" component={SuccessView} />
      <Route path="/" component={App}>
      // Add child Routes here
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.page-container')
);
