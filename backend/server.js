const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json()); // this is to accept JSON data
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
