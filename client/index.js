/**
 * Created by koyexes on 13/09/2017.
 */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes  from './Routes';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore((state = {}) => state, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
