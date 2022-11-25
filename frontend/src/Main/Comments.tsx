import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { loadApprovedComments } from './mainSlice';
import selectApprovedComments from './selectors';
import Comment from './Comment';
import './Comments.scss';

function Comments(): JSX.Element {
  const dispatch = useAppDispatch();
  const approvedComments = useSelector(selectApprovedComments);
  useEffect(() => {
    dispatch(loadApprovedComments());
  }, [dispatch]);
  return (
    <>
      <h2 className="componentHeader">Отзывы пользователей</h2>
      <div className="commentsBox">
        {approvedComments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </>
  );
}

export default Comments;
