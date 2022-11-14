import {
   TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody
  } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import { selectComments } from './selectors';

function Comments():JSX.Element {
  const comments = useSelector(selectComments);
  return (
    <>
    <h1>Комментарии клиентов</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя </TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Текст</TableCell>
            <TableCell align="right">Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {comments.map((el) => <Comment key={el.id} comment={el} />)}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default Comments;
