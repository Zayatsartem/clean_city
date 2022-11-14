import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { loadApprovedComments } from './mainSlice';
import selectApprovedComments from './selectors';
import Comment from './Comment';

function Comments(): JSX.Element {
  const dispatch = useAppDispatch();
  const approvedComments = useSelector(selectApprovedComments);
  useEffect(() => {
    dispatch(loadApprovedComments());
  }, [dispatch]);
  return (
    <>
      {approvedComments.map((comment) => <Comment comment={comment} key={comment.id} />)}
    </>
  );
}

export default Comments;
