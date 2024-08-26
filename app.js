
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

///endpoint routes
const booksProducts = require('./routes/books');
const login = require('./routes/login'); 
const products = require('./routes/products'); 
const orderRoutes = require('./routes/order');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
// Replace 'your-connection-string' with your actual MongoDB connection string
const connectionString = 'mongodb+srv://sais31348:EMaUqKyOSUy2TD9Q@cluster0.vbax5s4.mongodb.net/ecomerce';


mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });


// Use Routes
app.use('/api/books', booksProducts);
app.use('/api/login', login);//todo
app.use('/api/products', products);
app.use('/api/', orderRoutes);


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
