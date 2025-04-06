// backend/controllers/appointmentController.js
const { Appointment } = require('../models');

const createAppointment = async (req, res) => {
  try {
    const { name, phone, service, address, kilo, note, price } = req.body;

    // Validate that all required fields are provided
    if (!name || !phone || !service || !address || !kilo || !price) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create the appointment in the database
    const appointment = await Appointment.create({
      name,
      phone,
      service,
      address,
      kilo,
      note,
      price,
    });

    return res.status(201).json({
      message: 'Appointment successfully booked!',
      appointment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create appointment' });
  }
};

module.exports = { createAppointment };
