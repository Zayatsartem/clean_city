import React from 'react';
import {
 Link, Route, Routes, useNavigate
} from 'react-router-dom';
import RegistrationView from '../Registration/RegistrationView';
import Authorization from '../Authorization/Authorization';
import { logout } from '../Authorization/api';
import { useAppDispatch } from '../store';

import './styles.css';

function Navbar(): JSX.Element {
  const user = false; // удалить юзер для проверки
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleLogout(): Promise<void> {
    await dispatch(logout);
    navigate('/');
  }

  return (
    <>
      <nav className="nav">
        {/* <Link className="links" type="button" to="/">Главная</Link>
      <Link className="links" to="clean_city/order">Сделать заказ</Link>
      <Link className="links" to="clean_city/registration">Регистрация</Link>
      <Link className="links" to="clean_city/login">Войти</Link> */}
        {user ? (
          <>
            <Link className="links" type="button" to="/">
              Главная
            </Link>
            <Link className="links" to="/order">
              Сделать заказ
            </Link>
            <Link className="links" to="/profile">
              Личный кабинет
            </Link>
            <button className="button-logout" type="button" onClick={handleLogout}>
              Выйти
            </button>
          </>
        ) : (
          <>
            <Link className="links" type="button" to="/">
              Главная
            </Link>
            <Link className="links" to="/order">
              Сделать заказ
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
        <Route path="/registration" element={<RegistrationView />} />
        <Route path="/login" element={<Authorization />} />
      </Routes>
    </>
  );
}

export default Navbar;
