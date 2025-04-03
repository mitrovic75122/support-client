const Quiz = require('../models/Quiz'); // Import Quiz model

// Get all quizzes
const getAllQuizzes = async (req, res) => {
  try {
    console.log("Here")
    const quizzes = await Quiz.find().sort({checked: -1}); // Fetch all quizzes from the database
    res.status(200).json(quizzes); // Return the quizzes
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllQuizzes
};