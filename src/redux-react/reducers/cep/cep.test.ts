import * as cepReducerActions from 'redux-react/actions/cep';
import cepReducer, {initialState} from './index';
import {ActionCepReducer, StateCepReducer} from './types';

describe('cepReducer basic tests', () => {
  it('cepReducer is a function?', () => {
    expect(typeof cepReducer).toBe('function');
  });

  it('cepReducer initial state', () => {
    expect(cepReducer(undefined, {type: '@@INIT'})).toMatchObject(initialState);
  });

  it('cepReducer action GET_CEP_START', () => {
    const action: ActionCepReducer = {
      type: cepReducerActions.GET_CEP_START,
      payload: {query: 'teste'},
    };

    const response: StateCepReducer = {
      ...initialState,
      query: action.payload?.query,
      stateController: {...initialState.stateController, start: true},
    };

    const newState = cepReducer(initialState, action);

    expect(newState).toMatchObject(response);
  });

  it('cepReducer action GET_CEP_SUCCESS', () => {
    const action: ActionCepReducer = {
      type: cepReducerActions.GET_CEP_SUCCESS,
    };

    const response: StateCepReducer = {
      ...initialState,
      errorMessage: '',
      stateController: {...initialState.stateController, success: true},
    };

    const newState = cepReducer(initialState, action);

    expect(newState).toMatchObject(response);
  });

  it('cepReducer action GET_CEP_FAIL', () => {
    const action: ActionCepReducer = {
      type: cepReducerActions.GET_CEP_FAIL,
      payload: {errorMessage: 'teste'},
    };

    const response: StateCepReducer = {
      ...initialState,
      errorMessage: 'teste',
      stateController: {...initialState.stateController, fail: true},
    };

    const newState = cepReducer(initialState, action);

    expect(newState).toMatchObject(response);
  });

  it('cepReducer action GET_CEP_START + GET_CEP_SUCCESS', () => {
    const action1: ActionCepReducer = {
      type: cepReducerActions.GET_CEP_START,
      payload: {query: 'teste'},
    };

    const action2: ActionCepReducer = {
      type: cepReducerActions.GET_CEP_SUCCESS,
    };

    const response1: StateCepReducer = {
      ...initialState,
      query: 'teste',
      stateController: {start: true, success: false, fail: false},
    };

    const response2: StateCepReducer = {
      ...response1,
      stateController: {start: false, success: true, fail: false},
    };

    const newState1 = cepReducer(initialState, action1);
    const newState2 = cepReducer(newState1, action2);

    expect(newState1).toMatchObject(response1);
    expect(newState2).toMatchObject(response2);
  });

  it('cepReducer action GET_CEP_START + GET_CEP_FAIL', () => {
    const action1: ActionCepReducer = {
      type: cepReducerActions.GET_CEP_START,
      payload: {query: 'teste'},
    };

    const action2: ActionCepReducer = {
      type: cepReducerActions.GET_CEP_FAIL,
      payload: {errorMessage: 'error test'},
    };

    const response1: StateCepReducer = {
      ...initialState,
      query: 'teste',
      stateController: {start: true, success: false, fail: false},
    };

    const response2: StateCepReducer = {
      ...response1,
      errorMessage: 'error test',
      stateController: {start: false, success: false, fail: true},
    };

    const newState1 = cepReducer(initialState, action1);
    const newState2 = cepReducer(newState1, action2);

    expect(newState1).toMatchObject(response1);
    expect(newState2).toMatchObject(response2);
  });
});
