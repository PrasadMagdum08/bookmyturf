const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const slotBookingRoutes = require('./routes/slotBookingRoute');

dotenv.config();
connectDB();


const app = express();
app.use(cors());
app.use(express.json());
 
app.use('/api/slotbookings', slotBookingRoutes);

app.get('/', (req, res) => {
    res.send("BookMyTurf API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
})
