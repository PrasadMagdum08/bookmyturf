const SlotBooking = require('../models/SlotBooking');

// Create a new slot booking
exports.createSlotBooking = async (req, res) => {
  try {
    const { date, timeSlot } = req.body;
    const booking = new SlotBooking({ date, timeSlot });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all slot bookings
exports.getAllSlotBookings = async (req, res) => {
  try {
    const bookings = await SlotBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};