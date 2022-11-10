import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

import './Authorization/styles.css';

export default function App(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleSubmit } = useForm();
  const onSubmit = ():void => console.log('data');

  function handleEmailChange(): void {
    console.log('email');
  }
  function handlePasswordChange(): void {
    console.log('password');
  }
  return (
     <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Authorization</h2>
      <label htmlFor="email-input">Email</label>
      <input type="text" id="email-input" value={email} onChange={handleEmailChange} />
      <label htmlFor="password-input">Password</label>
      <input type="text" id="password-input" value={password} onChange={handlePasswordChange} />

      <button type="submit">Submit</button>
     </form>

  );
}
