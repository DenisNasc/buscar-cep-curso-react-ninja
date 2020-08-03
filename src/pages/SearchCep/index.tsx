import React from 'react';
import styled from 'styled-components';
import {Dispatch} from 'redux';
import {useDispatch, useSelector} from 'react-redux';

import {StateStore} from 'redux-react/store/types';
import {StateCepReducer, ActionCepReducer} from 'redux-react/reducers/cep/types';

import Form from 'components/SearchCep/Form';
import Table from 'components/SearchCep/Table';

import {Alert} from '@material-ui/lab';

import Layout from '../Layout';

import useGetCep from './hooks/useGetCep';

const SearchCep: React.FC = () => {
  const dispatch = useDispatch<Dispatch<ActionCepReducer>>();

  const {
    query,
    cep,
    errorMessage,
    stateController: {start, fail, success},
  } = useSelector<StateStore, StateCepReducer>(({cepReducer}) => cepReducer);

  useGetCep(dispatch, start);

  return (
    <Layout>
      <Container>
        {fail ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : (
          <Table
            address={cep?.address}
            city={cep?.city}
            code={cep?.code}
            district={cep?.district}
            state={cep?.state}
          />
        )}

        <Form dispatch={dispatch} start={start} initialQuery={query} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  padding: 30px;
`;

export default SearchCep;
