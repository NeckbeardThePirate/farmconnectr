import { initializeApp } from "firebase/app";
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Page from './components/Page';
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

const App = () => {

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Page firestore={firestore} />} />
        <Route exact path="/Signup"element={<Login firestore={firestore} />} />
      </Routes>
    </Router>
  );
};

export default App;
//base component for the app