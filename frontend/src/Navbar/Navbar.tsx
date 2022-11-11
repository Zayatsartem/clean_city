import React from 'react';
import {
 Link, Route, Routes, useNavigate
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import RegistrationView from '../Registration/RegistrationView';
import Authorization from '../Authorization/Authorization';
import { useAppDispatch } from '../store';
import { logout, getUser } from '../Authorization/authSlice';

import './styles.css';
import { selectAuthChecked } from '../Authorization/selectors';
import { RootState } from '../types/RootState';

function Navbar():JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch = useAppDispatch();
  const authChecked = useSelector(selectAuthChecked);
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (!authChecked) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  async function handleLogout():Promise<void> {
    await dispatch(logout());

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
