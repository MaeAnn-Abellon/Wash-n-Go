import React from 'react';
import "../styles/Toast.css"; // Import your CSS file for styling

const Toast = ({ message, onClose }) => {
  return (
    <div className="toast">
      <span>{message}</span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
};

export default Toast;
