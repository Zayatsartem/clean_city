import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import '../form.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../store';
import { order, resetOrderFormError } from './orderSlice';
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
  } = useForm<IFormInput>({
    defaultValues: {
      checkbox: [],
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    reset();
    const dispatchResult = await dispatch(
      order({
        ...data,
        user_id: user?.id,
        price: 0,
        services: '',
      })
    );
    if (order.fulfilled.match(dispatchResult)) {
      navigate('/profile/orders');
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(resetOrderFormError());
    }, 5000);
    return () => clearTimeout(id);
  }, [error, dispatch]);

  return (
    <form className="cc-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="cc-formLabel">Количество комнат</label>
      <input
        className="cc-input"
        type="number"
        min={1}
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
        min={1}
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

      <div className="inputservices wrap">
        <p className="cc-formLabelM">Дополнительные услуги</p>
        <ul>
          <input {...register('checkbox', {})} type="checkbox" value="1" />
          <label className="cc-formLabelM">Убрать балкон</label>
        </ul>
        <ul>
          <input {...register('checkbox')} type="checkbox" value="2" />
          <label className="cc-formLabelM">Погладить вещи</label>
        </ul>
        <ul>
          <input {...register('checkbox')} type="checkbox" value="3" />
          <label className="cc-formLabelM">Помыть люстру</label>
        </ul>
        <ul>
          <input {...register('checkbox')} type="checkbox" value="4" />
          <label className="cc-formLabelM">Помыть балконное остелкение</label>
        </ul>
        <ul>
          <input {...register('checkbox')} type="checkbox" value="6" />
          <label className="cc-formLabelM">Помыть холодильник внутри</label>
        </ul>
        <ul>
          <input {...register('checkbox')} type="checkbox" value="7" />
          <label className="cc-formLabelM">Помыть духовку</label>
        </ul>
        <ul>
          <input {...register('checkbox')} type="checkbox" value="4" />
          <label className="cc-formLabelM">Помыть окно</label>
        </ul>
        <ul>
          <input {...register('checkbox')} type="checkbox" value="8" />
          <label className="cc-formLabelM">Помыть микроволновку</label>
        </ul>
        <ul>
          <input {...register('checkbox')} type="checkbox" value="9" />
          <label className="cc-formLabelM">Помыть кухонные шкафы</label>
        </ul>
        <ul>
          <input {...register('checkbox')} type="checkbox" value="10" />
          <label className="cc-formLabelM">Помыть лоток питомца</label>
        </ul>
        <ul>
          <input {...register('checkbox')} type="checkbox" value="11" />
          <label className="cc-formLabelM">Удалить плесень</label>
        </ul>
      </div>
      <input className="cc-inputSubmit" type="submit" disabled={!isValid} value="отправить" />
      <div>{error && <p className="cc-formP">{error}</p>}</div>
    </form>
  );
}
