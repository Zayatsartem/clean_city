import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RegistrationView from '../Registration/RegistrationView';
import Authorization from '../Authorization/Authorization';
import { useAppDispatch, RootState } from '../store';
import { logout, getUser } from '../Authorization/authSlice';
import './styles.css';
import Admin from '../Admin/Admin';
import { selectAuthChecked } from '../Authorization/selectors';
import Main from '../Main/Main';

import ProfileNavbar from './ProfileNavbar';

import OrderViews from '../Order/OrderViews';

function Navbar(): JSX.Element {
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
        <Route path="/order" element={<OrderViews />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default Navbar;
