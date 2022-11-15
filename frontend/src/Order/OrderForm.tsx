// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ReactDOM from 'react-dom';
import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { order } from './orderSlice';
import { selectOrdeFormError } from './selectors';

interface IFormInput {
  user_id: number;
  rooms: number;
  bathrooms: number;
  date: string;
  time: string;
  address: string;
  status: string;
}

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Количество комнат</label>
        <input
          type="number"
          {...register('rooms', {
            required: true,
            maxLength: 50,
          })}
        />
        {errors?.rooms?.type === 'required' && <p>Поле является обязательныим</p>}
        <label>Количество санузлов</label>
        <input
          type="number"
          {...register('bathrooms', {
            maxLength: 50,
          })}
        />
        <label>Дата</label>
        <input type="date" {...register('date')} />
        {errors?.date?.type === 'required' && <p>Поле является обязательным</p>}
        <label>Удобное время</label>
        <input type="time" {...register('time')} />
        {errors?.time?.type === 'required' && <p>Поле является обязательным</p>}
        <label>Адрес</label>
        <input
          type="address"
          {...register('address', {
            maxLength: 300,
          })}
        />
        {errors?.address?.type === 'required' && <p>Поле является обязательным</p>}
        <input type="submit" disabled={!isValid} />
      </form>
      <div>{error && <p>{error}</p>}</div>
    </>
  );
}
