const cors = require("cors")
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const quizRoutes = require('../routes/quizRoute'); // Import quiz routes
const path = require("path")

dotenv.config();
const app = express();
app.use(cors({origin:"*"}));

// Middleware
app.use(express.json());  // Parse incoming JSON requests
app.use(express.static(path.join(__dirname, "build")));


// Register the quiz routes
app.use('/api', quizRoutes);  // Make sure quizRoutes is the router, not an object

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;