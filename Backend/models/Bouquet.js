// models/Bouquet.js
const mongoose = require('mongoose');

const bouquetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  flowers: [{
    flowerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flower',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  imageUrl: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pendiente', 'aceptado', 'editado', 'cancelado'],
    default: 'pendiente'  // El estado inicial es pendiente
  }
}, { timestamps: true });

module.exports = mongoose.model('Bouquet', bouquetSchema);
