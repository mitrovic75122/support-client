const express = require('express');
const {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
} = require('../controllers/quizController');

const router = express.Router();

// Route for creating a quiz
router.post('/', createQuiz);  // POST /api/quizzes - Create a new quiz

// Route for fetching all quizzes
router.get('/', getAllQuizzes);  // GET /api/quizzes - Get all quizzes

// Route for fetching a specific quiz by ID
router.get('/:id', getQuizById);  // GET /api/quizzes/:id - Get quiz by ID

// Route for updating a quiz by ID
router.put('/:id', updateQuiz);  // PUT /api/quizzes/:id - Update a quiz by ID

// Route for deleting a quiz by ID
router.delete('/:id', deleteQuiz);  // DELETE /api/quizzes/:id - Delete a quiz by ID

module.exports = router;