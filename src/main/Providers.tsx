import React from 'react';
import {Provider} from 'react-redux';

import store from 'redux-react/store';

import Routes from 'main/Routes';

import {CssBaseline} from '@material-ui/core';

const Providers: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Routes />
    </Provider>
  );
};

export default Providers;
