import {combineReducers} from 'redux';
import cepReducer from 'redux-react/reducers/cep';

const reducers = {cepReducer};

const rootReducer = combineReducers(reducers);

export default rootReducer;
