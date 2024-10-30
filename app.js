
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require("dotenv").config();



///endpoint routes
const login = require('./routes/login'); 


const app = express();

// Middleware
app.use(bodyParser.json());

///mongo connection 
const mongoConnection  = process.env.connectionString.toString();

mongoose.connect(mongoConnection)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });




///routers
app.use('/api/login', login);//todo



app.get('/table/:number', (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number)) {
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
