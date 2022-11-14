// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ReactDOM from 'react-dom';
import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { order } from './orderSlice';

interface IFormInput {
  user_id: number;
  rooms: number;
  bathrooms: number;
  date: string;
  time: string;
  address: string;
}

export default function OrderViews(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  console.log(user);

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  // if (!userrega) {
  //   return <Navigate to="/login" />;
  // }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const dispatchResult = await dispatch(order({ ...data, user_id: user?.id }));
    if (order.fulfilled.match(dispatchResult)) {
      navigate('/');
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Количество комнат</label>
      <input
        type="number"
        {...register('rooms', {
          required: true,
          maxLength: 50,
        })}
      />
      <label>Количество санузлов</label>
      <input
        type="number"
        {...register('bathrooms', {
          maxLength: 50,
        })}
      />
      <label>Дата</label>
      <input type="date" {...register('date')} />
      <label>Удобное время</label>
      <input type="time" {...register('time')} />
      <label>Адрес</label>
      <input
        type="address"
        {...register('address', {
          maxLength: 200,
        })}
      />
      <input type="submit" />
    </form>
  );
}
