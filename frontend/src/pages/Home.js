import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { FaTshirt, FaHandSparkles, FaTruckMoving } from 'react-icons/fa';
import Modal from '../components/Modal';
import AppointmentForm from '../components/AppointmentForm';

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
    }
  }, [navigate]);

  const handleFormSubmit = async (formData) => {
    try {
      const token = localStorage.getItem('token'); // Get token from localStorage
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Attach the token here
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Appointment booked successfully!');
        console.log('Backend response:', data);
        setIsModalOpen(false); // Close modal
      } else {
        alert(`Error: ${data.error || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Failed to connect to the server.');
    }
  
    setIsModalOpen(false);
  };
  

  return (
    <div className="home-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🮺 Wash 'n Go</div>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="right-side">
          <span className="phone">(08) 728 256 266</span>
          <button className="appointment-btn" onClick={() => setIsModalOpen(true)}>Book a wash</button>
          <button className="logout-btn" onClick={() => {
            localStorage.removeItem('user');
            navigate('/login');
          }}>Log Out</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="overlay">
          <div className="hero-text">
            <h1>Quality Laundry Service In Your City</h1>
            <p>We take care about cleanness of your cloth</p>
            <button className="explore-btn">Explore Services</button>
          </div>
        </div>
      </header>

      {/* Process Section */}
      <section className="process-section">
        <h3 className="section-title">This is how <span>we work</span></h3>
        <div className="steps">
          <div className="step">
            <FaTshirt className="step-icon" />
            <h4>We Collect Your Clothes</h4>
            <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
          </div>
          <div className="step">
            <FaHandSparkles className="step-icon" />
            <h4>Wash Your Clothes</h4>
            <p>We use high-quality machines and detergents to ensure your clothes are treated with care and cleanliness.</p>
          </div>
          <div className="step">
            <FaTruckMoving className="step-icon" />
            <h4>Get Delivery</h4>
            <p>Clean clothes delivered right to your door—fast, fresh, and folded to perfection.</p>
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AppointmentForm 
          onClose={() => setIsModalOpen(false)} 
          onSubmit={handleFormSubmit} 
        />
      </Modal>
    </div>
  );
};

export default Home;
