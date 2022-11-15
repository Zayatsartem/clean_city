import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useAppDispatch } from '../store';
import { TNewOrder } from '../types/AdminTypes';
import { addWIPOrder, cancelNewOrder } from './Adminslice';

function NewOrder({ order }: { order: TNewOrder }): JSX.Element {
  const dispatch = useAppDispatch();
  function addWIP(id: number): void {
    dispatch(addWIPOrder(id));
  }
  function cancel(id: number): void {
    dispatch(cancelNewOrder(id));
  }
  return (
    <TableRow
      key={order.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {order.name}
      </TableCell>
      <TableCell align="right">{order.telephone}</TableCell>
      <TableCell align="right">{order.date}</TableCell>
      <TableCell align="right">{order.time}</TableCell>
      <TableCell align="right">{order.address}</TableCell>
      <TableCell align="right">Комнат:{order.rooms}, санузлов:{order.bathrooms}</TableCell>
      <TableCell align="right"><Button variant="outlined" onClick={() => addWIP(order.id)}>Принять в работу</Button><Button variant="outlined" onClick={() => cancel(order.id)}>Отменить</Button></TableCell>
    </TableRow>

  );
}

export default NewOrder;
