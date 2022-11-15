import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { getOrders } from '../Authorization/authSlice';
import OrderCard from './OrderCard';
import OrderViews from '../Order/OrderViews';

function ProfileOrders(): JSX.Element {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const userOrders = useSelector((state: RootState) => state.auth.orders);

  return (
    <main>
      {!userOrders || userOrders.length === 0 ? (
        <>
          <h4>У вас пока нет заказов</h4>
          <OrderViews />
        </>
      ) : (
        <>
          <div style={{ border: '1px solid black' }}>
            <h3>Ближайшие заказы</h3>
            {userOrders
              ?.filter((order) => order.status !== 'completed')
              .map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
          </div>
          <div style={{ border: '1px solid black' }}>
            <h3>Выполненные заказы</h3>
            {userOrders
              ?.filter((order) => order.status === 'completed')
              .map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
          </div>
        </>
      )}
    </main>
  );
}

export default ProfileOrders;
