import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import '../styles/Login.css';
import Toast from '../components/Toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await loginUser({ email, password });
      
  //     // Store JWT token in localStorage
  //     localStorage.setItem('token', data.token); // Store JWT Token
  //     localStorage.setItem('user', JSON.stringify(data.user)); // Store user data
  
  //     setToastMessage(data.message || 'Login successful!');
  //     setShowToast(true);
  //     setTimeout(() => {
  //       setShowToast(false);
  //       navigate('/home');
  //     }, 2500);
  //   } catch (error) {
  //     setToastMessage(error.response?.data?.message || 'Login failed');
  //     setShowToast(true);
  //   }
  // };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem('user', JSON.stringify(data.user)); // Store user data
      localStorage.setItem('token', data.token); // Store token here
      setToastMessage(data.message || 'Login successful!');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/home');
      }, 2500);
    } catch (error) {
      setToastMessage(error.response?.data?.message || 'Login failed');
      setShowToast(true);
    }
  };
  

  return (
    <>
      {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="login-container">
        <div className="login-box">
          <div className="login-left">
            <div className="wave-bg"></div>
            <div className="login-left-content">
              <h1>WELCOME BACK</h1>
              <h2>WASH 'N GO</h2>
              <p>Log in to avail our services.</p>
            </div>
          </div>
          <div className="login-right">
            <h2>Sign In</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="signin">Sign In</button>
              <button
                type="button"
                className="signup"
                onClick={() => navigate('/register')}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
