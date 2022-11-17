import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { feedback, resetCommentError } from './CommentSlice';
import { RootState, useAppDispatch } from '../store';
import './comments.style.css';
import logoComment from './comment-png-8.jpeg';

export default function CommentForm(): JSX.Element {
  const [value, setValue] = useState<number | null>(0);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();

  const error = useSelector((state: RootState) => state.comment.commentError);

  const { orderId } = useParams();

  function changeComment(event: React.ChangeEvent<HTMLTextAreaElement>): void {
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

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(resetCommentError());
    }, 5000);
    return () => clearTimeout(id);
  }, [error, dispatch]);

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
          <textarea
            className="comment-input"
            value={comment}
            onChange={changeComment}
            name="textarea"
            rows={3}
            placeholder="Поделитесь впечатлениями о выполненной услуге"
            required
          />
          <button className="comment-button" type="submit" style={{ opacity: '0.4' }}>
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
