const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/loans', require('./routes/loans'));

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT,'0.0.0.0' ,() => {
  console.log(`Server running on port ${PORT}`);
});