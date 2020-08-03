import React from 'react';
import ReactDOM from 'react-dom';

import Providers from './main/Providers';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
