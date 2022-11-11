import React from 'react';
import { useSelector } from 'react-redux';



import NewOrder from './NewOrder';
import { selectNewOrders } from './selectors';

function NewOrders():JSX.Element {
  const newOrders = useSelector(selectNewOrders);

  return (
    <div>
       {newOrders.map((el) => <NewOrder order={el} />)}
    </div>

  );
}

export default NewOrders;
