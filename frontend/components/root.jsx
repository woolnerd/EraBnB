import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Scroll from "../util/scroll_to_top_util";


import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Scroll />
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
