/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function EditProfile(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);
  const userega = useSelector((state: RootState) => state.register.user);
  return (
    <section className="section">
      <h1 className="h1">`&{user?.name || userega?.name}, Вы можете изменить профиль`</h1>
      <input type="text" defaultValue={`${user?.name}`} />
      <input type="text" defaultValue={`${user?.telephone}`} />
      <input type="text" defaultValue={`${user?.email}`} />
      <button type="submit">Изменить</button>
    </section>
  );
}

export default EditProfile;
