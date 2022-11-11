import React from 'react';
import { TNewOrder } from './Adminslice';

function NewOrder({ order }:{ order:TNewOrder }):JSX.Element {
  return (
    <div>{order.date}</div>
  );
}

export default NewOrder;
