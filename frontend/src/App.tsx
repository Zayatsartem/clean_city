import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import CallForm from './Main/CallForm';

function App(): JSX.Element {
  return (
    <BrowserRouter>

      <Navbar />

    <Navbar />
    <CallForm />

    </BrowserRouter>
  );
}

export default App;
