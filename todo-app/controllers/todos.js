const Todo = require('../models/todo');

exports.todoList = (req, res) => {
  Todo.find((err, todos) => {
    res.render('todos/list', { todos });
  });
};
