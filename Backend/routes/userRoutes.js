const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Ruta para crear un usuario
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Hubo un error al crear el usuario' });
  }
});

module.exports = router;
