import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import {actionGetCepStart} from 'redux-react/reducers/cep/cep.actions';
import {ActionCepReducer} from 'redux-react/reducers/cep/types';
import {Dispatch} from 'redux';

import {Button, TextField} from '@material-ui/core';

interface PropsForm {
  dispatch: Dispatch<ActionCepReducer>;
  start: boolean;
  initialQuery?: string;
}

const Form: React.FC<PropsForm> = ({dispatch, start, initialQuery = ''}) => {
  const [query, setQuery] = useState(initialQuery);

  const handleQuery = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLElement>) => {
      event.preventDefault();

      dispatch(actionGetCepStart({query}));
    },
    [dispatch, query]
  );

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextField
        label="CEP"
        variant="outlined"
        type="text"
        name="cep"
        value={query}
        onChange={handleQuery}
      />
      <StyledButton disabled={start} type="submit">
        Buscar endereço
      </StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledTextField = styled(TextField)`
  width: 400px;
`;
const StyledButton = styled(Button)`
  margin-top: 20px;
  width: 200px;
`;

export default Form;
