import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import '../styles/Register.css'; // Import your CSS file for styling
import Toast from '../components/Toast';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerUser({ name, email, password });
  
      // Store JWT token in localStorage after successful registration
      localStorage.setItem('token', data.token); // Store JWT Token
      localStorage.setItem('user', JSON.stringify(data.user)); // Store user data
  
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/login');
      }, 3000); // 3 seconds before navigating
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };
  

  return (
    <>
      {showToast && (
        <Toast
          message="Register Successful! You can now sign in."
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="register-container">
        <div className="register-box">
          <div className="register-left">
            <div className="wave-bg"></div> {/* SVG background */}
            <div className="register-left-content">
              <h1>WELCOME TO</h1>
              <h2>WASH 'N GO</h2>
              <p>We care about the cleanliness of your clothes.</p>
            </div>
          </div>
          <div className="register-right">
            <h2>Create your account</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
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
              <div className="terms">
                <input type="checkbox" required />
                <span>By signing up, I agree with Terms & Conditions</span>
              </div>
              <button type="submit" className="signup">
                Sign Up
              </button>
              <button
                type="button"
                className="signin"
                onClick={() => navigate('/login')}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
