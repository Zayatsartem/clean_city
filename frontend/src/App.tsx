import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import { getUser } from './Authorization/authSlice';
import './App.css';
import Navbar from './Navbar/Navbar';
import EditProfile from './Profile/EditProfile';
import ProfileOrders from './Profile/ProfileOrders';
import { useAppDispatch } from './store';
import Admin from './Admin/Admin';
import AuthForm from './Authorization/AuthForm';
import Main from './Main/Main';
import OrderForm from './Order/OrderForm';
import RegisterForm from './Registration/RegisterForm';
import CleaningRules from './CleaningRules/CleaningRules';

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
        <Route path="/registration" element={<RegisterForm />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cleaningrules" element={<CleaningRules />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
