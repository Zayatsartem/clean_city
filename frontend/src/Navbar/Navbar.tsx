import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RegisterForm from '../Registration/RegisterForm';
import Authorization from '../Authorization/Authorization';
import { useAppDispatch, RootState } from '../store';
import { logout } from '../Authorization/authSlice';
import './styles.css';
import Admin from '../Admin/Admin';
import { selectAuthChecked } from '../Authorization/selectors';
import Main from '../Main/Main';

import ProfileNavbar from './ProfileNavbar';

import OrderForm from '../Order/OrderForm';

function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  const authChecked = useSelector(selectAuthChecked);
  const navigate = useNavigate();

  if (!authChecked) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  async function handleLogout(): Promise<void> {
    await dispatch(logout());
    navigate('/');
  }

  return (
    <>
      <nav className="nav">
        {user ? (
          <>
            <Link className="links" type="button" to="/">
              Главная
            </Link>
            <Link className="links" to="/order">
              Сделать заказ
            </Link>

            <ProfileNavbar />
            {user?.admin ? (
              <Link className="links" to="/admin">
                Личный кабинет администратора
              </Link>
            ) : (
              <Link className="links" to="/profile">
                Личный кабинет
              </Link>
            )}

            <button className="button-logout" type="button" onClick={handleLogout}>
              Выйти
            </button>
          </>
        ) : (
          <>
            <Link className="links" type="button" to="/">
              Главная
            </Link>
            <Link className="links" to="/registration">
              Регистрация
            </Link>
            <Link className="links" to="/login">
              Войти
            </Link>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/registration" element={<RegisterForm />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default Navbar;
