import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { regist } from '../Authorization/authSlice';
import { selectRegisterFormError } from './selectors';

import '../form.css';
import { IFormInput } from '../types/RegistTypes';

function RegisterForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectRegisterFormError);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: IFormInput): Promise<void> => {
    reset();
    const dispatchResult = await dispatch(regist(data));
    if (regist.fulfilled.match(dispatchResult)) {
      navigate('/');
    }
  };

  return (
    <form className="cc-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="cc-formLabel">Имя</label>
      <input
        className="cc-input"
        {...register('name', {
          required: true,
          maxLength: 50,
          minLength: 1,
        })}
      />
      {errors?.name?.type === 'required' && <p className="cc-formP">Поле является обязательныим</p>}
      {errors?.name?.type === 'maxLength' && (
        <p className="cc-formP">Имя не может превышать 50 символов</p>
      )}
      {errors?.name?.type === 'minLength' && (
        <p className="cc-formP">Имя не должно быть меньше одного символа</p>
      )}
      <label className="cc-formLabel">Email</label>
      <input
        className="cc-input"
        type="email"
        autoComplete="email"
        {...register('email', { pattern: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/ })}
      />
      {errors?.email?.type === 'pattern' && (
        <p className="cc-formP">Неверно указан почтовый адрес</p>
      )}
      <label className="cc-formLabel">Пароль</label>
      <input
        className="cc-input"
        type="password"
        autoComplete="current-password"
        {...register('password', { minLength: 8, maxLength: 20 })}
      />
      {errors.password && <p className="cc-formP">пароль должен быть больше 8 символов</p>}
      <label className="cc-formLabel">Телефон</label>
      <input
        className="cc-input"
        type="tel"
        placeholder="+7**********"
        {...register('telephone', {
          pattern: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
        })}
      />
      {errors.telephone && (
        <p className="cc-formP">
          введите телефон в формате: +7(903)888-88-88, 8(999)99-999-99, +380(67)777-7-777,
          001-541-754-3010, +1-541-754-3010, 19-49-89-636-48018, +233 205599853.
        </p>
      )}
      <input className="cc-inputSubmit" type="submit" disabled={!isValid} />
      <div>{error && <p className="cc-formP">{error}</p>}</div>
    </form>
  );
}

export default RegisterForm;
