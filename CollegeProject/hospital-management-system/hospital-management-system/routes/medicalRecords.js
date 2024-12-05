const express = require('express');
const MedicalRecord = require('../models/medicalRecord');
const verifyToken = require('../middleware/verifyToken');
const verifyRole = require('../middleware/verifyRole');
const router = express.Router();

// Middleware to protect routes
router.use(verifyToken);

// Add a new medical record (doctor only)
router.post('/', verifyRole('doctor'), async (req, res) => {
  try {
    const { patientId, diagnosis, treatment, prescriptions } = req.body;
    const doctorId = req.user.id;

    const record = new MedicalRecord({ patientId, doctorId, diagnosis, treatment, prescriptions });
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get medical records for a patient (doctor or patient)
router.get('/:patientId', verifyRole('doctor', 'patient'), async (req, res) => {
  try {
    if (req.user.role === 'patient' && req.user.id !== req.params.patientId) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const records = await MedicalRecord.find({ patientId: req.params.patientId });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
