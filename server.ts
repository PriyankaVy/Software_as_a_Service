const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Import the routes
const userRouter = require('./routes/users');
const bpostRouter = require('./routes/blogPosts');
const vpostRouter = require('./routes/vlogPosts');

// Use the routes
app.use(express.json()); // Enable JSON parsing middleware
app.use(cors());
app.use('/', userRouter );
app.use('/', bpostRouter); 
app.use('/', vpostRouter);  

// Start server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
