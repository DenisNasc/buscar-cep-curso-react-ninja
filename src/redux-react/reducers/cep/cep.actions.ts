import {ActionCreator} from 'redux';

import {stateController} from 'redux-react/store/config';
import * as actions from 'redux-react/actions/cep';

import {PayloadCepReducer, ActionCepReducer} from './types';

export const actionGetCepStart: ActionCreator<ActionCepReducer> = ({query}: PayloadCepReducer) => ({
  type: actions.GET_CEP_START,
  payload: {
    query,
    stateController: {
      ...stateController.start,
    },
  },
});

export const actionGetCepSuccess: ActionCreator<ActionCepReducer> = () => ({
  type: actions.GET_CEP_SUCCESS,
  payload: {
    errorMessage: '',
    stateController: {
      ...stateController.success,
    },
  },
});

export const actionGetCepFail: ActionCreator<ActionCepReducer> = ({
  errorMessage,
}: PayloadCepReducer) => ({
  type: actions.GET_CEP_FAIL,
  payload: {
    errorMessage,
    stateController: {
      ...stateController.fail,
    },
  },
});

export const actionSetCep: ActionCreator<ActionCepReducer> = ({cep}: PayloadCepReducer) => ({
  type: actions.SET_CEP,
  payload: {
    cep,
  },
});
