import React, { useEffect } from 'react';
import Comments from './Comments';
import NewOrders from './NewOrders';
import WIPOrders from './WIPOrders';
import { useAppDispatch } from '../store';
import { loadNewOrders } from './Adminslice';

function Admin():JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadNewOrders());
  }, [dispatch]);
  return (
    <div>
     <NewOrders />
    </div>
  );
}

export default Admin;
