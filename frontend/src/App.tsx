import React from 'react';

import {
  BrowserRouter
} from 'react-router-dom';

import './App.css';
// import Authorization from './Authorization/Authorization';
import Navbar from './Navbar/Navbar';

// import EditProfile from './Profile/EditProfile';
// import RegistrationView from './Registration/RegistrationView';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Routes>
        <Route path="/login" element={<Authorization />} />
        <Route path="/registration" element={<RegistrationView />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes> */}

    </BrowserRouter>
  );
}

export default App;
