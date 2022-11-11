import React, { useEffect } from 'react';
import Comments from './Comments';
import NewOrders from './NewOrders';
import WIPOrders from './WIPOrders';
import { useAppDispatch } from '../store';
import { loadComments, loadNewOrders, loadWIPOrders } from './Adminslice';

function Admin():JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadNewOrders());
    dispatch(loadWIPOrders());
    dispatch(loadComments());
  }, [dispatch]);
  return (
    <div>
     <NewOrders />
     <WIPOrders />
     <Comments />
    </div>
  );
}

export default Admin;
