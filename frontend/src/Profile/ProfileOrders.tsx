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
    {!userOrders || userOrders.length === 0 ? (
      <h4>У вас пока нет заказов</h4>
    ) : (
    <>
      <h3>Активные заказы</h3>
     {userOrders?.filter((order) => order.status === 'inwork').map((order) => (
        <OrderCard key={order.user_id} order={order} />
      ))}
      <h3>Исполненные заказы</h3>
    {userOrders?.filter((order) => order.status === 'completed').map((order) => (
      <OrderCard key={order.user_id} order={order} />
    ))}
    </>
    )}
    </main>
  );
}

export default ProfileOrders;
