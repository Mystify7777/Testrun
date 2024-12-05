const express = require('express');
const Appointment = require('../models/appointment');
const verifyToken = require('../middleware/verifyToken');
const verifyRole = require('../middleware/verifyRole');
const router = express.Router();

// Middleware to protect routes
router.use(verifyToken);

// Schedule an appointment
router.post('/', verifyRole('patient'), async (req, res) => {
  try {
    const { doctorId, date, notes } = req.body;
    const patientId = req.user.id;

    const appointment = new Appointment({ patientId, doctorId, date, notes });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all appointments for a patient
router.get('/', verifyRole('patient', 'doctor', 'admin'), async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.user.id });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update appointment status (admin or doctor)
router.put('/:id', verifyRole('admin', 'doctor'), async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Cancel an appointment (only by patient or admin)
router.delete('/:id', verifyRole('admin', 'patient'), async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json({ message: 'Appointment canceled' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
