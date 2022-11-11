import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';

import './styles.css';
import { login } from './authSlice';
import { selectAuth } from './selectors';


export default function Authorization(): JSX.Element {
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
        password
      })
    );

    if (login.fulfilled.match(dispatchResult)) {
      navigate('/');
    }
    // if (login.rejected.match(dispatchResult)) {
    //   alert(dispatchResult.error.message);
    // }
  }

  return (
     <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="email-input">Email</label>
      <input type="text" id="email-input" value={email} onChange={handleEmailChange} />
      <label htmlFor="password-input">Password</label>
      <input type="password" id="password-input" value={password} onChange={handlePasswordChange} />
      <button type="submit">Submit</button>
      {error && <div>{error}</div>}
     </form>

  );
}
