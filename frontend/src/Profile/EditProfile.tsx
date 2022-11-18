import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../store';
import { editProfile, resetEditFormError } from './editingSlice';
import './styles.css';
import avatar from './avatar.jpg';

function EditProfile(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState<string | undefined>(user?.email);
  const [telephone, setTelephone] = useState<string | undefined>(user?.telephone);

  const error = useSelector((state: RootState) => state.editing.editFormError);

  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setTelephone(user?.telephone);
  }, [user]);

  function changeEmail(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  function changeName(event: ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }

  function changeTelephone(event: ChangeEvent<HTMLInputElement>): void {
    setTelephone(event.target.value);
  }

  async function editForm(event: React.FormEvent): Promise<void> {
    event.preventDefault();

    await dispatch(
      editProfile({
        id: user?.id,
        name,
        email,
        telephone,
      })
    );
  }

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(resetEditFormError());
    }, 5000);
    return () => clearTimeout(id);
  }, [error, dispatch]);

  return (
    <div className="container1">
      <div className="form-edit box">
        <img className="profileimg" src={avatar} alt="avatar" />
        {user ? (
          <>
            <form onSubmit={editForm} className="js-form">
              <h1 className="editFormH1">{name}, Вы можете изменить профиль</h1>
              <label>
                {' '}
                Имя
                <input
                  type="text"
                  value={name || ''}
                  onChange={changeName}
                  placeholder="new name"
                  className="cc-input"
                />
              </label>{' '}
              <label>
                {' '}
                телефон
                <input
                  type="text"
                  value={telephone || ''}
                  onChange={changeTelephone}
                  placeholder="new phone"
                  className="cc-input"
                />
              </label>
              <label>
                {' '}
                email
                <input
                  type="text"
                  value={email || ''}
                  onChange={changeEmail}
                  placeholder="new email"
                  className="cc-input "
                />
              </label>
              <button type="submit" className="cc-submitButton" style={{ opacity: '0.4' }}>
                Изменить
              </button>
            </form>
            <div>{error && <p>{error}</p>}</div>
          </>
        ) : (
          <h3>Чтобы изменить профиль, войдите в систему</h3>
        )}
      </div>
    </div>
  );
}

export default EditProfile;
