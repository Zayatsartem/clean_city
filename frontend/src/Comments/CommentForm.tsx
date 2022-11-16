import React, { useState } from 'react';
// import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { feedback } from './CommentSlice';
import { RootState, useAppDispatch } from '../store';
import './comments.style.css';
import logoComment from './comment-png-8.jpeg';

export default function CommentForm(): JSX.Element {
  const [value, setValue] = useState<number | null>(0);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();

  const error = useSelector((state: RootState) => state.comment.commentError);

  const { orderId } = useParams();

  function changeComment(event: React.ChangeEvent<HTMLInputElement>): void {
    setComment(event.target.value);
  }

  async function submitComment(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    setComment('');
    const data = {
      stars: Number(value),
      title: comment,
      orderId: Number(orderId),
      commentError: null,
      status: false,
    };

    await dispatch(feedback(data));
  }

  return (
    <main className="comment-box">
      <div className="comment-container">
        <br />
        <br />
        <br />
        <img className="comment-img" src={logoComment} alt="avatar" />
        <br />
        <br />
        <br />
        <br />
        <Rating
          name="simple-controlled"
          className="comment-stars"
          style={{ fontSize: '5vh' }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <br />
        <br />
        <br />
        <br />

        <form className="comment-form" onSubmit={submitComment}>
          <input
            type="text"
            className="comment-input"
            value={comment}
            onChange={changeComment}
            placeholder="Поделитесь впечатлениями о выполненной услуге"
            required
          />
        <button className="comment-button" type="submit">
          Отправить отзыв
        </button>
        </form>
        <br />
        <br />
        <br />
        <div>{error && <p>{error}</p>}</div>
      </div>
    </main>
  );
}
