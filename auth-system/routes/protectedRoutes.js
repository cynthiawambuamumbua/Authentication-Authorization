const express = require('express');
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

router.get('/student', protect, authorize('student'), (req, res) => {
  res.json({ success: true, data: 'Student content' });
});

router.get('/admin', protect, authorize('admin'), (req, res) => {
  res.json({ success: true, data: 'Admin content' });
});

router.get('/recruiter', protect, authorize('recruiter'), (req, res) => {
  res.json({ success: true, data: 'Recruiter content' });
});

module.exports = router;