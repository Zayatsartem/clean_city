import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar/Navbar';

import EditProfile from './Profile/EditProfile';
import Services from './Services/Services';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <Services />
      <Routes>
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
