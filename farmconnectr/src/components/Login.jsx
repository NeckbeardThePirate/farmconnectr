import React, { useState } from 'react';
import { Navigate, Routes, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  // const handleLogin = () => {
  //   // Add your login logic here

  //   // Navigate to the homepage after successful login
  //   history.push('/home');
  // };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    // alert('idk')
    e.preventDefault();
    navigate('/timeline');
  };

  return (
    <div className="login-container">
        <div className='header'>
            <h2 className='login-header all-text'>Welcome to farmconnectr</h2>
        </div>
        <form onSubmit={handleLogin}>
            <div>
            <label className='all-text'>Username:</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div>
            <label className='all-text'>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit">Login</button>
            <div className='guest-experience'>
              <h3 className='guest-experience-header all-text'>Try our Guest Experience!</h3>
            <button onClick={handleLogin} className='guest-experience-button all-text'>Try as Guest</button>
            </div>
        </form>
    </div>
  );
};

export default Login;
