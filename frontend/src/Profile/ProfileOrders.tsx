import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { getOrders } from '../Authorization/authSlice';
import OrderCard from './OrderCard';
import OrderForm from '../Order/OrderForm';
// import '../form.css';

function ProfileOrders(): JSX.Element {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const userOrders = useSelector((state: RootState) => state.auth.orders);

  return (
    <main className="order-main">
      {!userOrders || userOrders.length === 0 ? (
        <>
          <h1 className="h4-div">У вас пока нет заказов</h1>
          <OrderForm />
        </>
      ) : (
        <table className="table-div">
          <tbody>
            <tr className="tr-orders">
              <td className="orders-div">
                <h3 className="h3-orders">Ближайшие заказы</h3>
                {userOrders
                  ?.filter((order) => order.status !== 'completed')
                  .map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
              </td>
              <td className="orders-div">
                <h3 className="h3-orders">Выполненные заказы</h3>
                {userOrders
                  ?.filter((order) => order.status === 'completed')
                  .map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </main>
  );
}

export default ProfileOrders;
