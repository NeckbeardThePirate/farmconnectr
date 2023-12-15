import React, { useState } from 'react';
import { Navigate, Routes, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import BuildUserDoc from './BuildUserDoc';
import { collection, addDoc } from "firebase/firestore";

const Login = ({ firestore }) => {
  const navigate = useNavigate();

  const auth = getAuth();
  function guestLogin(e) {
    e.preventDefault();
    navigate('/');
  }

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userLocalDisplayName, setUserLocalDisplayName] = useState('')
  const handleSignup = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential) 
        console.log(user)
        BuildUserDoc(collection, firestore, email, userLocalDisplayName, user, addDoc)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="login-container">
        <div className='header'>
            <h2 className='login-header all-text'>Welcome to farmconnectr</h2>
        </div>
        <div className='content-blocks'>
          <div className='signup-side side'>
            <h3 className='connect-header all-text'>SignUp/SignIn</h3>
            <div className='experience'>
              <form>
                <div>
                  <label className='input-field all-text'>Username:</label>
                  <input
                      className='input-field'
                      type="text"
                      value={userLocalDisplayName}
                      onChange={(e) => setUserLocalDisplayName(e.target.value)}
                  />
                  </div>
                  <div>
                  <label className='input-field all-text'>Email:</label>
                  <input
                      className='input-field'
                      type="text"
                      value={email}
                      onChange={(e) => setUsername(e.target.value)}
                  />
                  </div>
                  <div>
                  <label className='input-field all-text'>Password:</label>
                  <input
                      className='input-field'
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  </div>
                  <div className='connect-buttons'>
                    <button className='connect-button' type="submit" onClick={() => alert('working on it')}>SignIn</button>
                    <button className='connect-button' type="submit" onClick={handleSignup}>SignUp</button>
                  </div>
              </form>
            </div>
          </div>
          <div className='guest-side side'>
            <h3 className='connect-header all-text'>Guest Experience</h3>
            <div className='experience'>
                <button onClick={guestLogin} className='guest-experience-button all-text'>Try as Guest</button>
                <div className='guest-experience-exp'>
                  <p className='explanation all-text'>As a guest you can post and comment and try out other functionality but some things won't be saved and you may not be able to use some features.</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};




export default Login;


