const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const verifyRole = require('../middleware/verifyRole');
const Patient = require('../models/Patient');
const Appointment = require('../models/appointment');
const User = require('../models/User');

// Middleware to verify token for all routes
router.use(verifyToken);

// Admin dashboard
router.get('/admin', verifyRole('admin'), async (req, res) => {
  try {
    const totalPatients = await Patient.countDocuments();
    const totalDoctors = await User.countDocuments({ role: 'doctor' });
    const upcomingAppointments = await Appointment.countDocuments({
      date: { $gte: new Date() },
    });

    res.status(200).json({
      message: 'Admin Dashboard',
      stats: {
        totalPatients,
        totalDoctors,
        upcomingAppointments,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Doctor dashboard
router.get('/doctor', verifyRole('doctor'), async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctorId: req.user._id }).populate('patientId', 'name age');

    res.status(200).json({
      message: `Welcome, Dr. ${req.user.username}`,
      appointments,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Patient dashboard
router.get('/patient', verifyRole('patient'), async (req, res) => {
  try {
    const myAppointments = await Appointment.find({ patientId: req.user._id }).populate('doctorId', 'name');
    const medicalHistory = await Patient.findById(req.user._id).select('medicalHistory');

    res.status(200).json({
      message: `Welcome, ${req.user.username}`,
      myAppointments,
      medicalHistory: medicalHistory?.medicalHistory || [],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
