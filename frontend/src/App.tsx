import React from 'react';
import {
  BrowserRouter, Link, Navigate, Route, Routes
 } from 'react-router-dom';
import './App.css';

function App(): JSX.Element {
  const user = true; // удалить юзер для проверки

  return (
    <BrowserRouter>
    <nav className="nav">
      {/* <Link className="links" type="button" to="/">Главная</Link>
      <Link className="links" to="clean_city/order">Сделать заказ</Link>
      <Link className="links" to="clean_city/registration">Регистрация</Link>
      <Link className="links" to="clean_city/login">Войти</Link> */}
      {(user ? (
        <>
        <Link className="links" type="button" to="/">Главная</Link>
        <Link className="links" to="clean_city/order">Сделать заказ</Link>
        <Link className="links" to="clean_city/personalArea">Личный кабинет</Link>
        <Link className="links" to="clean_city/logout">Выйти</Link>
        </>
      ) : (
        <>
        <Link className="links" type="button" to="/">Главная</Link>
        <Link className="links" to="clean_city/order">Сделать заказ</Link>
        <Link className="links" to="clean_city/registration">Регистрация</Link>
        <Link className="links" to="clean_city/login">Войти</Link>
        </>
        ))}
    </nav>
    <Routes>
    <Route path="/" element={<Navigate to="/clean_city" />} />
      {/* <Route path="/registration" element={<Registration />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
    </BrowserRouter>
)}

export default App;
