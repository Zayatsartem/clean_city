import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';

import '../form.css';
import { login } from './authSlice';
import { selectAuth } from './selectors';

export default function AuthForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const error = useSelector(selectAuth);
  const dispatch = useAppDispatch();

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }
  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    const dispatchResult = await dispatch(
      login({
        email,
        password,
      })
    );

    if (login.fulfilled.match(dispatchResult)) {
      navigate('/');
    }
  }
  return (
    <form className="cc-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label className="cc-formLabel" htmlFor="email-input">
        Email
      </label>
      <input
        className="cc-input"
        type="text"
        id="email-input"
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label className="cc-formLabel" htmlFor="password-input">
        Пароль
      </label>
      <input
        className="cc-input"
        type="password"
        id="password-input"
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button className="cc-submitButton" type="submit">
        Submit
      </button>
      <br />
      <br />
      <br />
      {error && <div className="cc-formP">{error}</div>}
    </form>
  );
}
