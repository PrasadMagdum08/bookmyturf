const mongoose = require('mongoose');

const SlotBookingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  timeSlot: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('SlotBooking', SlotBookingSchema);