// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const connectDB = require('./config/db'); // You will create this next

const app = express();

// Connect to Database (Uncomment when ready)
// connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// A simple test route
app.get('/', (req, res) => {
  res.send('Carepoint API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));