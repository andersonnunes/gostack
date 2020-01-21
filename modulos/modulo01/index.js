const express = require('express');

const server = express();

// Query params = ?id=1
// Route params = /users/1
// Request body = { "name": "Anderson", "email": "anderson@email.com" }

const users = ['Anderson', 'Alvina', 'Andressa'];

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.listen(3000);
