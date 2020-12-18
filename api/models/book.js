const mongoose = require('mongoose');

// Our schema
const BookSchema = new mongoose.Schema({

  // THEN THIS IS THE CORRECT ATTRIBUTE ;)
  
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);