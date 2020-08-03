import {Action} from 'redux';
import {StateController} from 'redux-react/store/types';

type CEP = {
  address: string;
  city: string;
  code: string;
  district: string;
  state: string;
};

type PayloadCepReducer = {
  query?: string;
  cep?: CEP;
  errorMessage?: string;
  stateController?: StateController;
};

export interface StateCepReducer {
  query?: string;
  cep?: CEP;
  errorMessage?: string;
  stateController: StateController;
}

export interface ActionCepReducer extends Action<string> {
  payload?: PayloadCepReducer;
}
