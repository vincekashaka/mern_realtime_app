const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
