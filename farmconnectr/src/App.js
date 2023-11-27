import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Page from './components/Page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Page />} />
        <Route exact path="/Signup"element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
