import axios from 'axios';
import {CEP} from 'redux-react/reducers/cep/types';
import {actionSetCep, actionGetCepSuccess, actionGetCepFail} from '../cep.actions';

interface CepData extends CEP {
  ok: boolean;
  message: string;
}

const thunkGetCep = () => async (dispatch: any, getState: any): Promise<void> => {
  try {
    const {
      cepReducer: {query},
    } = getState();
    const {data} = await axios.get<CepData>(`https://ws.apicep.com/cep/${query}.json`);

    if (!data.ok) {
      throw new Error(data.message);
    }

    const cepDataFormated = {
      code: data.code,
      state: data.state,
      city: data.city,
      district: data.district,
      address: data.address,
    };

    dispatch(actionSetCep({cep: cepDataFormated}));
    dispatch(actionGetCepSuccess());
  } catch (error) {
    dispatch(actionGetCepFail({errorMessage: error.message}));
  }
};

export default thunkGetCep;
