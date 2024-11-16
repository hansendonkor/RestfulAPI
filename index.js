const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

// Route to retrieve all users
app.get('/users', (req, res) => {
  fs.readFile('users.json', 'utf-8', (error, content) => {
    if (error) {
      return res.status(500).json({ message: 'Unable to access user data.' });
    }
    res.json(JSON.parse(content));
  });
});

// Route to fetch a specific user by their ID
app.get('/users/:id', (req, res) => {
  fs.readFile('users.json', 'utf-8', (error, content) => {
    if (error) {
      return res.status(500).json({ message: 'Error while reading user data.' });
    }
    const users = JSON.parse(content);
    const user = users[`user${req.params.id}`];
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found.' });
    }
  });
});

// Route to filter users by their profession
app.get('/users/profession/:profession', (req, res) => {
  fs.readFile('users.json', 'utf-8', (error, content) => {
    if (error) {
      return res.status(500).json({ message: 'Failed to retrieve data.' });
    }
    const users = JSON.parse(content);
    const filtered = Object.values(users).filter(
      (user) => user.profession === req.params.profession
    );
    if (filtered.length === 0) {
      res.status(404).json({ message: 'No users found in the specified profession.' });
    } else {
      res.json(filtered);
    }
  });
});

// Route to find a user by their name
app.get('/users/name/:name', (req, res) => {
  fs.readFile('users.json', 'utf-8', (error, content) => {
    if (error) {
      return res.status(500).json({ message: 'Failed to load user data.' });
    }
    const users = JSON.parse(content);
    const foundUser = Object.values(users).find((user) => user.name === req.params.name);
    if (!foundUser) {
      res.status(404).json({ message: 'User not found.' });
    } else {
      res.json(foundUser);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
