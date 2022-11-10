import React from 'react';
import {
  BrowserRouter, Link, Navigate, Route, Routes
 } from 'react-router-dom';
import './App.css';

function App(): JSX.Element {
  return (
    <BrowserRouter>
    <nav className="nav">
      <Link className="links" type="button" to="/">Главная</Link>
      <Link className="links" to="/order">Сделать заказ</Link>
      <Link className="links" to="/registration">Регистрация</Link>
      <Link className="links" to="/login">Войти</Link>
    </nav>
    <Routes>
    <Route path="/" element={<Navigate to="/clean_city" />} />
      {/* <Route path="/registration" element={<Registration />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
