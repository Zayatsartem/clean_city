import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './Footer/Footer';
// import Authorization from './Authorization/Authorization';

import Navbar from './Navbar/Navbar';

import EditProfile from './Profile/EditProfile';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
