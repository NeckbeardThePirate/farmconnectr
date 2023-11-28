import { initializeApp } from "firebase/app";
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Page from './components/Page';
import { getFirestore } from "firebase/firestore";


const App = () => {
  //firebase config, need to move this to GH secrets
  const firebaseConfig = {
    apiKey: "AIzaSyDT-oD3sZuAxmGXzlHBK6dC1fyKkwlBgK4",
    authDomain: "farmconnectr.firebaseapp.com",
    projectId: "farmconnectr",
    storageBucket: "farmconnectr.appspot.com",
    messagingSenderId: "388880470124",
    appId: "1:388880470124:web:ae24d1447b9dcbc1628849",
    measurementId: "G-HYX95953L8"
};

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