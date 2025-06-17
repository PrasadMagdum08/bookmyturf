const express = require('express');
const router = express.Router();
const slotBookingController = require('../controllers/slotBookingController');

// Create a new slot booking
router.post('/createBooking', slotBookingController.createSlotBooking);

// Get all slot bookings
router.get('/getBooking', slotBookingController.getAllSlotBookings);

module.exports = router;