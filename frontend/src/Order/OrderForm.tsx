import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import '../form.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { order } from './orderSlice';
import { selectOrdeFormError } from './selectors';
import { IFormInput } from '../types/OrderTypes';

export default function OrderForm(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectOrdeFormError);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    reset();
    const dispatchResult = await dispatch(order({ ...data, user_id: user?.id }));
    if (order.fulfilled.match(dispatchResult)) {
      navigate('/');
    }
  };

  return (
    <form className="cc-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="cc-formLabel">Количество комнат</label>
      <input
        className="cc-input"
        type="number"
        {...register('rooms', {
          required: true,
          maxLength: 50,
        })}
      />
      {errors?.rooms?.type === 'required' && (
        <p className="cc-formP">Поле является обязательныим</p>
      )}
      <label className="cc-formLabel">Количество санузлов</label>
      <input
        type="number"
        className="cc-input"
        {...register('bathrooms', {
          maxLength: 50,
        })}
      />
      <label className="cc-formLabel">Дата</label>
      <input className="cc-input" type="date" {...register('date')} />
      {errors?.date?.type === 'required' && <p className="cc-formP">Поле является обязательным</p>}
      <label className="cc-formLabel">Удобное время</label>
      <input className="cc-input" type="time" {...register('time')} />
      {errors?.time?.type === 'required' && <p className="cc-formP">Поле является обязательным</p>}
      <label className="cc-formLabel">Адрес</label>
      <input
        type="address"
        className="cc-input"
        {...register('address', {
          maxLength: 300,
        })}
      />
      {errors?.address?.type === 'required' && (
        <p className="cc-formP">Поле является обязательным</p>
      )}
      <input className="cc-inputSubmit" type="submit" disabled={!isValid} />
      <div>{error && <p className="cc-formP">{error}</p>}</div>
    </form>
  );
}
