const express = require('express');
const todos = require('../controllers/todos');

const router = express.Router();

router.get('/', todos.todoList);

module.exports = router;
