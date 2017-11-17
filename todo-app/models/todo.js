const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoListSchema = new Schema({
  name: { type: String, require: true },
  completed: { type: Boolean, require: false },
});


module.exports = mongoose.model('Todo', todoListSchema);
