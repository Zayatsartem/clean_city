import React from 'react';
import {
 BrowserRouter, Link, Route, Routes
} from 'react-router-dom';
import './App.css';
import CallForm from './Main/CallForm';

function App(): JSX.Element {
  return (

    <BrowserRouter>

      <nav>
        <Link to="/todos">Задачи</Link>

      </nav>

      <Routes>

        <Route path="/todos" element={<CallForm />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
