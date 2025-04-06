import React, { useState } from 'react';
import '../styles/AppointmentForm.css';

const AppointmentForm = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [kilo, setKilo] = useState('');

  const getServiceRate = (selectedService) => {
    switch (selectedService) {
      case 'Wash & Fold': return 110;
      case 'Wash & Iron': return 120;
      case 'Dry Clean': return 150;
      case 'Full Service': return 250;
      default: return 0;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = getServiceRate(service);
    const price = kilo * rate;
    onSubmit({ name, phone, service, address, kilo, note, price });
  };

  return (
    <div className="appointment-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Phone Number</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Select a Service</label>
        <select value={service} onChange={(e) => setService(e.target.value)} required>
          <option value="">-- Choose Service --</option>
          <option value="Wash & Fold">Wash & Fold - ₱110/kilo</option>
          <option value="Wash & Iron">Wash & Iron - ₱120/kilo</option>
          <option value="Dry Clean">Dry Clean - ₱150/kilo</option>
          <option value="Full Service">Full Service - ₱250/kilo</option>
        </select>

        {service && (
          <>
            <label>Kilos of Laundry</label>
            <input type="number" min="1" value={kilo} onChange={(e) => setKilo(e.target.value)} required />
            <p>Total Price: ₱{kilo && getServiceRate(service) * kilo}</p>
          </>
        )}

        {service === 'Full Service' && (
          <>
            <label>Address for Pickup & Delivery</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </>
        )}

        {service && service !== 'Full Service' && (
          <p className="note">
            📍 Please deliver your laundry at Poblacion, Toledo City, Cebu, 6038, Philippines
          </p>
        )}

        <label>Additional Notes</label>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Any special instructions?" />

        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
