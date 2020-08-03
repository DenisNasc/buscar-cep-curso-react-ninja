import * as cepReducerActions from 'redux-react/actions/cep';
import {Reducer} from 'redux';
import {ActionCepReducer, StateCepReducer} from './types';

export const initialState: StateCepReducer = {
  query: '',
  cep: {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
  },
  errorMessage: '',
  stateController: {
    start: false,
    success: false,
    fail: false,
  },
};

const cepReducer: Reducer<StateCepReducer, ActionCepReducer> = (state = initialState, action) => {
  switch (action.type) {
    case cepReducerActions.GET_CEP_START: {
      return {...state, ...action.payload};
    }
    case cepReducerActions.GET_CEP_SUCCESS: {
      return {...state, ...action.payload};
    }
    case cepReducerActions.GET_CEP_FAIL: {
      return {...state, ...action.payload};
    }
    case cepReducerActions.SET_CEP: {
      return {...state, ...action.payload};
    }
    default: {
      return {...state};
    }
  }
};

export default cepReducer;
