import React from 'react';

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

import './App.css';
import { getUser } from './Authorization/authSlice';
import Navbar from './Navbar/Navbar';
import EditProfile from './Profile/EditProfile';
import { useAppDispatch } from './store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
