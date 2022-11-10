import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import { getUser, selectAuth } from './Authorization/authSlice';
import Navbar from './Navbar/Navbar';
import { useAppDispatch } from './store';

function App(): JSX.Element {
  return (
    <BrowserRouter>

    <Navbar />
    </BrowserRouter>
);
}

export default App;
