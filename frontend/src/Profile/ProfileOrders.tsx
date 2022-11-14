import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { getOrders } from '../Authorization/authSlice';
import OrderCard from './OrderCard';

function ProfileOrders(): JSX.Element {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const userOrders = useSelector((state: RootState) => state.auth.orders);
  console.log(userOrders);

  return (
    <main>
    {!userOrders ? (
      <h4>У вас пока нет заказов</h4>
    ) : (
      userOrders.map((order) => (
        <OrderCard key={order.user_id} order={order} />
      )
        )
    )}
    </main>
  );
}

export default ProfileOrders;
