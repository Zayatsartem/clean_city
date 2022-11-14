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
  const userega = useSelector((state: RootState) => state.register.user);

  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadNewOrders());
    dispatch(loadWIPOrders());
    dispatch(loadComments());
  }, [dispatch]);

  return (
   <>
      {(user?.admin || userega?.admin) ? (

        <div>
          <NewOrders />
          <WIPOrders />
          <Comments />
        </div>
      ) : (<h2>Недостаточно прав</h2>)}
    {' '}
   </>
  );
}

export default Admin;
