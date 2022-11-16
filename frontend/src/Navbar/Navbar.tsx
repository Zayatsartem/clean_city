import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../store';
import { logout } from '../Authorization/authSlice';
import './styles.css';
import { selectAuthChecked } from '../Authorization/selectors';
import logo from './logo3.png';

function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
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
    <nav className="nav">
      {user ? (
        <>
          <Link id="main" className="links" type="button" to="/">
            <img src={logo} height="50px" width="50px" alt="logo" className="logoImg" />
          </Link>
          <Link className="links" to="/order">
            Сделать заказ
          </Link>
          <Link className="links" to="/cleaningrules">
            Регламент уборки
          </Link>
          <Link className="links" to="/profile/orders">
            Мои заказы
          </Link>
          <Link className="links" to="/profile/edit">
            Мой профиль
          </Link>
          {user?.admin && (
            <Link className="links" to="/admin">
              Администратор
            </Link>
          )}
          <button className="button-logout" type="button" onClick={handleLogout}>
            Выйти
          </button>
        </>
      ) : (
        <>
          <Link id="main" className="links" to="/">
            <img src={logo} height="50px" width="50px" alt="logo" className="logoImg" />
          </Link>
          <Link className="links" to="/cleaningrules">
            Регламент уборки
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
  );
}

export default Navbar;
