import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Comments from './Comments';
import NewOrders from './NewOrders';
import WIPOrders from './WIPOrders';
import { RootState, useAppDispatch } from '../store';
import { loadComments, loadNewOrders, loadWIPOrders } from './Adminslice';

// import { selectAuthChecked } from '../Authorization/selectors';

function Admin(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadNewOrders());
    dispatch(loadWIPOrders());
    dispatch(loadComments());
  }, [dispatch]);

  return (
    <>
      {user?.admin ? (
        <div className="form-edit">
          <NewOrders />
          <WIPOrders />
          <Comments />
        </div>
      ) : (
        <h2>Недостаточно прав</h2>
      )}{' '}
    </>
  );
}

export default Admin;
