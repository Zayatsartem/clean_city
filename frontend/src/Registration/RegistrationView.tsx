import * as React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { regist } from './registerSlice';
import { selectRegisterFormError } from './selectors';
import './styles.css';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

function RegistrationView(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectRegisterFormError);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: IFormInput): Promise<void> => {
    // alert(JSON.stringify(error));
    console.log(data);

    reset();
    const dispatchResult = await dispatch(regist(data));
    if (regist.fulfilled.match(dispatchResult)) {
      navigate('/');
    }
  }; // your form submit function which will invoke after successful validation

  console.log(watch('telephone')); // you can watch individual input by pass the name of the input

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          {...register('name', {
            required: true,
            maxLength: 50,
            minLength: 1,
          })}
        />
        {errors?.name?.type === 'required' && <p>Поле является обязательныим</p>}
        {errors?.name?.type === 'maxLength' && <p>Имя не может превышать 50 символов</p>}
        {errors?.name?.type === 'minLength' && <p>Имя не должно быть меньше одного символа</p>}
        <label>email</label>
        <input {...register('email', { pattern: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/ })} />
        {errors?.email?.type === 'pattern' && <p>Неверно указан почтовый адрес</p>}
        <label>Пароль</label>
        <input {...register('password', { minLength: 8, maxLength: 20 })} />
        {errors.password && <p>пароль должен быть больше 8 символов</p>}
        <label>Телефон</label>
        <input
          {...register('telephone', {
            pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
          })}
        />
        {errors.telephone && (
          <p>
            введите телефон в формате: +7(903)888-88-88, 8(999)99-999-99, +380(67)777-7-777,
            001-541-754-3010, +1-541-754-3010, 19-49-89-636-48018, +233 205599853.
          </p>
        )}
        <input type="submit" disabled={!isValid} />
      </form>
      <div>{error && <p>{error}</p>}</div>
    </>
  );
}

export default RegistrationView;
