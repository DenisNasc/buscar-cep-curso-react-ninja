import {createStore, applyMiddleware, compose, Store, CombinedState} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from 'redux-react/reducers';

import {StateStore} from './types';

// middlewares
import logger from './middlewares/logger';

// state controllers
const start = {
  start: true,
  success: false,
  fail: false,
};

const success = {
  start: false,
  success: true,
  fail: false,
};

const fail = {
  start: false,
  success: false,
  fail: true,
};

export const stateController = {start, success, fail};

// store
type configStore = (initialState?: StateStore) => Store<CombinedState<StateStore>>;

const enhancer = compose(applyMiddleware(logger), applyMiddleware(thunk));

const configStore: configStore = initialState => {
  const store = createStore(rootReducer, initialState, composeWithDevTools(enhancer));
  return store;
};

export default configStore;
