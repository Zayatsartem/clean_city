import React, { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { loadNewOrders } from './Adminslice';

function NewOrders():JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadNewOrders());
  }, [dispatch]);
  return (
    <div>
      
    </div>
  );
}

export default NewOrders;
