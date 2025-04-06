// const express = require('express');
// const router = express.Router();
// const { Appointment } = require('../models');  // Import from the models directory

// router.post('/', (req, res) => {
//   const { name, phone, service, address, kilo, note, price } = req.body;

//   // Create the appointment using Sequelize
//   Appointment.create({
//     name,
//     phone,
//     service,
//     address,
//     kilo,
//     note,
//     price
//   })
//     .then((appointment) => {
//       res.status(201).json({
//         message: 'Appointment saved!',
//         appointment
//       });
//     })
//     .catch((err) => {
//       console.error('Error inserting appointment:', err);
//       res.status(500).json({ error: 'Something went wrong' });
//     });
// });

// module.exports = router;

// backend/routes/appointmentRoute.js
const express = require('express');
const { createAppointment } = require('../controllers/appointmentController');
const authMiddleware = require('../middlewares/authMiddleware'); // Ensure this middleware checks JWT

const router = express.Router();

// Route to create an appointment (Requires JWT Authentication)
router.post('/appointments', authMiddleware, createAppointment);

module.exports = router;
