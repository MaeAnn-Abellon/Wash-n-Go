// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/users'; // Adjust if your backend is hosted elsewhere

// export const registerUser = async (userData) => {
//   return axios.post(`${API_URL}/register`, userData);
// };

// export const loginUser = async (userData) => {
//   return axios.post(`${API_URL}/login`, userData);
// };

// export const getUserProfile = async (token) => {
//   return axios.get(`${API_URL}/profile`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };


import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust this if your backend is hosted elsewhere

// USER ROUTES
export const registerUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/users/register`, userData);
};

export const loginUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/users/login`, userData);
};

export const getUserProfile = async (token) => {
  return axios.get(`${API_BASE_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// APPOINTMENT ROUTES
export const submitAppointment = async (appointmentData) => {
  return axios.post(`${API_BASE_URL}/appointments`, appointmentData);
};
