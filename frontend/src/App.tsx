import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import './App.css';


import {
  BrowserRouter
} from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';

import EditProfile from './Profile/EditProfile';

function App(): JSX.Element {
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
