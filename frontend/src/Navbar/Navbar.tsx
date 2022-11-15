import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../store';
import { logout } from '../Authorization/authSlice';
import './styles.css';
import { selectAuthChecked } from '../Authorization/selectors';
import ProfileNavbar from './ProfileNavbar';

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
  );
}

export default Navbar;
