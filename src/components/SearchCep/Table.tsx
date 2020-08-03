import React from 'react';
import styled from 'styled-components';

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@material-ui/core';

interface PropsTable {
  address?: string;
  city?: string;
  code?: string;
  district?: string;
  state?: string;
}

const TableSearchCep: React.FC<PropsTable> = ({
  address = '',
  city = '',
  code = '',
  district = '',
  state = '',
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>CEP</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell>Bairro</TableCell>
            <TableCell>Cidade</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{code}</TableCell>
            <TableCell>{address}</TableCell>
            <TableCell>{district}</TableCell>
            <TableCell>{city}</TableCell>
            <TableCell>{state}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledTableContainer = styled(TableContainer)``;

export default TableSearchCep;
