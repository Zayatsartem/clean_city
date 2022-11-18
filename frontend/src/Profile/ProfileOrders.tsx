import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, useAppDispatch } from '../store';
import { getOrders } from '../Authorization/authSlice';
import OrderCard from './OrderCard';
// import '../Profile/';

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
          <br />
          <br />
          <h2 className="h4-div">
            <p>Вы можете сделать заказ прямо сейчас, кликнув по <Link to="/order"> ссылке </Link> </p>
          </h2>
        </>
      ) : (
        <table className="table-div">
          <tbody>
            <tr className="tr-orders">
              <td className="orders-div">
                <h4 className="h3-orders">Ближайшие заказы</h4>
                {userOrders
                  ?.filter((order) => order.status !== 'completed')
                  .map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
              </td>
              <td className="orders-div">
                <h4 className="h3-orders">Выполненные заказы</h4>
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
