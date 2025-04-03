const express = require('express');
const {
  getAllQuizzes,
} = require('../controllers/quizController');

const router = express.Router();

// Route for fetching all quizzes
router.get('/', getAllQuizzes);  // GET /api/quizzes - Get all quizzes

module.exports = router;