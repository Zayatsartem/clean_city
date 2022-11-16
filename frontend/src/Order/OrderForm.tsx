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
  } = useForm<IFormInput>({
    defaultValues: {
      checkbox: [],
    },
  });

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
        min="1"
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
        min="1"
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
      <div className="inputservices">
        <p className="cc-formLabelM">Дополнительные услуги</p>
        <ul>
          <label className="cc-formLabelM">Убрать балкон</label>
          <input {...register('checkbox', {})} type="checkbox" value="1" />
        </ul>
        <ul>
          <label className="cc-formLabelM">Погладить вещи</label>
          <input {...register('checkbox')} type="checkbox" value="2" />
        </ul>
        <ul>
          <label className="cc-formLabelM">Помыть люстру</label>
          <input {...register('checkbox')} type="checkbox" value="3" />
        </ul>
        <ul>
          <label className="cc-formLabelM">Помыть балконное остелкение</label>
          <input {...register('checkbox')} type="checkbox" value="4" />
        </ul>
        <ul>
          <label className="cc-formLabelM">Помыть холодильник внутри</label>
          <input {...register('checkbox')} type="checkbox" value="6" />
        </ul>
        <ul>
          <label className="cc-formLabelM">Помыть духовку</label>
          <input {...register('checkbox')} type="checkbox" value="7" />
        </ul>
        <ul>
          <label className="cc-formLabelM">Помыть окно</label>
          <input {...register('checkbox')} type="checkbox" value="4" />
        </ul>
        <ul>
          <label className="cc-formLabelM">Помыть микроволновку</label>
          <input {...register('checkbox')} type="checkbox" value="8" />
        </ul>
        <ul>
          <label className="cc-formLabelM">Помыть кухонные шкафы</label>
          <input {...register('checkbox')} type="checkbox" value="9" />
        </ul>
        <ul>
          <label className="cc-formLabelM">Помыть лоток питомца</label>
          <input {...register('checkbox')} type="checkbox" value="10" />
        </ul>
        <ul>
          <label className="cc-formLabelM">Удалить плесень</label>
          <input {...register('checkbox')} type="checkbox" value="11" />
        </ul>
      </div>
      <input className="cc-inputSubmit" type="submit" disabled={!isValid} />
      <div>{error && <p className="cc-formP">{error}</p>}</div>
    </form>
  );
}
