import React from 'react';

import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';

import './App.css';
import Authorization from './Authorization/Authorization';
import Navbar from './Navbar/Navbar';

import EditProfile from './Profile/EditProfile';
import RegistrationView from './Registration/RegistrationView';

import CallForm from './Main/CallForm';


function App(): JSX.Element {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
<Route path="/login" element={<Authorization />} />
<Route path="/registration" element={<RegistrationView />} />
  <Route path="/profile/edit" element={<EditProfile />} />

      </Routes>

    <Navbar />
    <CallForm />

    </BrowserRouter>
  );
}

export default App;
