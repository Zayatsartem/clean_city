import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';

function App(): JSX.Element {
  return (
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
);
}

export default App;
