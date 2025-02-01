// models/Flower.js
const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true }
});

const Flower = mongoose.model('Flower', flowerSchema);
module.exports = Flower;
