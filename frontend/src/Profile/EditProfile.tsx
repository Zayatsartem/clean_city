import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../store';
import { editProfile } from './editingSlice';

function EditProfile(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

    const dispatchEdit = await dispatch(
      editProfile({
        name,
        email,
        telephone,
      })
    );

    if (editProfile.fulfilled.match(dispatchEdit)) {
      navigate('/');
    }
  }

  return (
    <form onSubmit={editForm}>
      <h1 className="h1">{user?.name}, Вы можете изменить профиль</h1>
      <input type="text" value={name} onChange={changeName} defaultValue={`${user?.name}`} />
      <input type="text" value={telephone} onChange={changeTelephone} defaultValue={`${user?.telephone}`} />
      <input type="text" value={email} onChange={changeEmail} defaultValue={`${user?.email}`} />
      <button type="submit">Изменить</button>
    </form>
  );
}

export default EditProfile;
