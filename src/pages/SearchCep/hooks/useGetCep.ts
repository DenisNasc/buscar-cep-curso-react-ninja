import {useEffect} from 'react';
import thunkGetCep from 'redux-react/reducers/cep/thunk/thunkGetCep';

const useGetCep = (dispatch: any, start: boolean): void => {
  useEffect(() => {
    if (!start) return;
    dispatch(thunkGetCep());
  }, [start, dispatch]);
};

export default useGetCep;
