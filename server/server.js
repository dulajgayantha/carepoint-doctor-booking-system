require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // ADD

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/carepoint', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Test route (keep this)
app.get('/', (req, res) => {
  res.send('Carepoint API (MongoDB) is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));