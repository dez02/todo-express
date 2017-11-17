const express = require('express');
const todos = require('./todos');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/todos');
});

router.use('/todos', todos);

module.exports = router;

