const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String, // The correct answer
      required: true,
    },
    like: {
        type: Number,
        required: false,
        default: 0
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;