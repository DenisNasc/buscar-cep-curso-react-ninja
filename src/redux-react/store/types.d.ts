import {StateCepReducer} from 'redux-react/reducers/cep/types';

export type StateController = {
  start: boolean;
  success: boolean;
  fail: boolean;
};

export interface StateStore {
  cepReducer: StateCepReducer;
}
