import React from 'react';

import {
  BrowserRouter
} from 'react-router-dom';

import './App.css';
import Footer from './Footer/Footer';
import { getUser } from './Authorization/authSlice';
import Navbar from './Navbar/Navbar';
import EditProfile from './Profile/EditProfile';
import ProfileOrders from './Profile/ProfileOrders';
import { useAppDispatch } from './store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/profile/orders" element={<ProfileOrders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
