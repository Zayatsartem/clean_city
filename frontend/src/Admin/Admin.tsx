import React from 'react';
import Comments from './Comments';
import NewOrders from './NewOrders';
import WIPOrders from './WIPOrders';

function Admin():JSX.Element {
  return (
    <div>
     <NewOrders />
     <WIPOrders />
     <Comments />
    </div>
  );
}

export default Admin;
