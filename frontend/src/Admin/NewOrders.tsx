import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useSelector } from 'react-redux';

import NewOrder from './NewOrder';
import { selectNewOrders } from './selectors';

function NewOrders():JSX.Element {
  const newOrders = useSelector(selectNewOrders);

  return (
    <>
    <h1>Новые заказы</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Заказчик </TableCell>
            <TableCell align="right">Телефон</TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Время</TableCell>
            <TableCell align="right">Адрес</TableCell>
            <TableCell align="right">Объем работы</TableCell>
            <TableCell align="right">Доп. услуги</TableCell>
            <TableCell align="right">Стоимость</TableCell>
            <TableCell align="right">Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {newOrders.map((el) => <NewOrder key={el.id} order={el} />)}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default NewOrders;
