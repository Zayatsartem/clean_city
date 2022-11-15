import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Footer/Footer';
import { getUser } from './Authorization/authSlice';
import './App.css';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import EditProfile from './Profile/EditProfile';
import ProfileOrders from './Profile/ProfileOrders';
import { useAppDispatch } from './store';
import CommentForm from './Comments/CommentForm';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Services />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/profile/orders" element={<ProfileOrders />} />
        <Route path="/profile/comment/:orderId" element={<CommentForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
