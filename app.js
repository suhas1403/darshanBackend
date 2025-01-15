// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');  // Import authRoutes
const visitRoutes = require('./routes/visitRoutes');
const countEntriesRoutes = require('./routes/countEntriesRoutes');
const app = express();
const port = 3000;

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());

// Use the auth routes
app.use('/api', authRoutes);  // Use the authRoutes module properly
app.use('/api', visitRoutes);
app.use('/api', countEntriesRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
