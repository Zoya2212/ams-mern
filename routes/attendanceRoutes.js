const express = require('express');
const { getAttendanceByDate } = require('../controllers/attendanceController');

const router = express.Router();

router.get('/:date', getAttendanceByDate);

module.exports = router;