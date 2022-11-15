import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { feedback } from './CommentSlice';
import { RootState, useAppDispatch } from '../store';

export default function CommentForm(): JSX.Element {
  const [value, setValue] = useState<number | null>(0);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();

  const error = useSelector((state: RootState) => state.comment.commentError);

  const { orderId } = useParams();
  console.log(orderId);
  console.log(Number(value));

  function changeComment(event: React.ChangeEvent<HTMLInputElement>): void {
    setComment(event.target.value);
    console.log(event.target.value);
  }

  async function submitComment(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    setComment('');
    console.log('submitting comment');
    const data = {
      stars: Number(value),
      title: comment,
      orderId: Number(orderId),
      commentError: null,
      status: false,
    };

     await dispatch(feedback(data)
    );
  }

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Оцените выполненную услугу</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <form onSubmit={submitComment}>
        <input
          type="text"
          value={comment}
          onChange={changeComment}
          placeholder="Оставьте отзыв"
          required
        />
        <button type="submit">Отправить отзыв</button>
      </form>
      <div>{error && <p>{error}</p>}</div>
    </Box>
  );
}
