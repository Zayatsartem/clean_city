import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { TNewOrder } from './Adminslice';

function WIPOrder({ order }:{ order:TNewOrder }):JSX.Element {
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
        <TableCell align="right"><Button variant="outlined">Заказ выполнен</Button></TableCell>
    </TableRow>
  );
}

export default WIPOrder;
