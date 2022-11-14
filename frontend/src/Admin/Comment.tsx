import { TableRow, TableCell, Button } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../store';
import { deleteCommentForAll, publishComment, TComment } from './Adminslice';

function Comment({ comment }:{ comment:TComment }):JSX.Element {
  const dispatch = useAppDispatch();
  function publish(id:number):void {
   dispatch(publishComment(id));
  }
  function deleteComment(id:number):void {
    dispatch(deleteCommentForAll(id));
  }
  return (
    <TableRow
      key={comment.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">
          {comment.name}
        </TableCell>
        <TableCell align="right">{comment.date}</TableCell>
        <TableCell align="right">{comment.title}</TableCell>
        <TableCell align="right"><Button variant="outlined" onClick={() => publish(comment.id)}>Опубликовать</Button><Button variant="outlined" onClick={() => deleteComment(comment.id)}>Удалить</Button></TableCell>
    </TableRow>
  );
}

export default Comment;
