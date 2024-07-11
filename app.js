const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/items'); // Ensure this path is correct
const login = require('./routes/login'); // Ensure this path is correct
const products = require('./routes/products'); // Ensure this path is correct

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB

// Replace 'your-connection-string' with your actual MongoDB connection string

const connectionString = 'mongodb://127.0.0.1:27017/ecomerce';

mongoose.connect(connectionString)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

  

// Use Routes
app.use('/api/items', items);
app.use('/api/login', login);
app.use('/api/products', products);

app.get('/table/:number', (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number)) {
    return res.status(400).send('Invalid number');
  }else if(number.toString!=""){
    return res.status(400).send('Invalid number');
  }

  const table = {};
  for (let i = 1; i <= 10; i++) {
    table[i] = number * i;
  }

  res.json(table);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
