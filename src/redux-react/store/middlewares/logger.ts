import {Middleware, Action} from 'redux';
import {StateStore} from '../types';

const logger: Middleware<unknown, StateStore> = ({dispatch, getState}) => next => (
  action: Action<string>
) => {
  console.group(`will dispatch action: ${action.type}`);

  console.log('logger::will dispatch: ', action);
  const nextAction = next(action);
  console.log('logger::next action: ', nextAction);

  console.groupEnd();
  return nextAction;
};

export default logger;
