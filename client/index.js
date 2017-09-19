/**
 * Created by koyexes on 13/09/2017.
 */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes  from './Routes';

render((
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
), document.getElementById('app'));
