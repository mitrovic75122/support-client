const Quiz = require('../models/Quiz'); // Import Quiz model

// Create a new quiz
const createQuiz = async (req, res) => {
  try {
    console.log(req.body);
    // Check if question and answer exist in the request body
    const { question, answer, checked } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: 'Question and answer are required' });
    }

    const newQuiz = new Quiz({
      question,
      answer,
      checked
    });

    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    console.error('Error creating quiz:', error);
    res.status(500).json({ message: 'Error creating quiz', error });
  }
};

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

// Get a single quiz by ID
const getQuizById = async (req, res) => {
  const quizId = req.params.id;

  try {
    const quiz = await Quiz.findById(quizId); // Find quiz by ID

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.status(200).json(quiz); // Return the quiz
  } catch (error) {
    console.error('Error fetching quiz by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a quiz by ID
const updateQuiz = async (req, res) => {
  const quizId = req.params.id;
  const { question, answer, checked } = req.body;

  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      quizId,
      { question, answer, checked },
      { new: true } // Return the updated quiz
    );

    if (!updatedQuiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.status(200).json({ message: 'Quiz updated successfully', quiz: updatedQuiz });
  } catch (error) {
    console.error('Error updating quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a quiz by ID
const deleteQuiz = async (req, res) => {
  const quizId = req.params.id;

  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(quizId); // Delete the quiz

    if (!deletedQuiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    console.error('Error deleting quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
};