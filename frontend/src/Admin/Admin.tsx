import React, { useEffect } from 'react';
import Comments from './Comments';
import NewOrders from './NewOrders';
import WIPOrders from './WIPOrders';
import { useAppDispatch } from '../store';
import { loadNewOrders, loadWIPOrders } from './Adminslice';

function Admin():JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadNewOrders());
    dispatch(loadWIPOrders());
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
