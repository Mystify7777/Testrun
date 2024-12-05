const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Appointment = require('../models/appointment');
const verifyToken = require('../middleware/verifyToken');
const verifyRole = require('../middleware/verifyRole');

// Middleware to protect routes and ensure the user is authorized
router.use(verifyToken);

// Add a new patient
router.post('/', verifyRole(['admin', 'doctor', 'nurse']), async (req, res) => {
  try {
    const { name, age, medicalHistory } = req.body;
    if (!name || !age || !medicalHistory) {
      return res.status(400).json({ message: 'Name, age, and medical history are required.' });
    }
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all patients (accessible by admin or doctor or nurse)
router.get('/', verifyRole(['admin', 'doctor', 'nurse']), async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single patient by ID (accessible by admin, doctor, or nurse)
router.get('/:id', verifyRole(['admin', 'doctor', 'nurse']), async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a patient (accessible by admin or doctor)
router.put('/:id', verifyRole(['admin', 'doctor']), async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPatient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a patient (accessible by admin only)
router.delete('/:id', verifyRole('admin'), async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
    if (!deletedPatient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get appointments for a specific patient (accessible by admin, doctor, or nurse)
router.get('/:id/appointments', verifyRole(['admin', 'doctor', 'nurse']), async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.params.id });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new appointment for a patient (accessible by admin or doctor)
router.post('/:id/appointments', verifyRole(['admin', 'doctor']), async (req, res) => {
  try {
    const { doctorId, date, time, status } = req.body;
    const newAppointment = new Appointment({
      patientId: req.params.id,
      doctorId,
      date,
      time,
      status,
    });
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get medical records for a specific patient (accessible by admin, doctor, or patient)
router.get('/:id/medical-records', verifyRole(['admin', 'doctor', 'patient']), async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id, 'medicalHistory');
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(patient.medicalHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add medical record for a specific patient (accessible by admin or doctor)
router.post('/:id/medical-records', verifyRole(['admin', 'doctor']), async (req, res) => {
  try {
    const { visitDate, diagnosis, prescriptions } = req.body;
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    patient.medicalHistory.push({ visitDate, diagnosis, prescriptions });
    await patient.save();
    res.status(201).json(patient.medicalHistory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
