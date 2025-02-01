// models/Invoice.js
const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bouquetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bouquet' },
  totalPrice: { type: Number },
  status: { type: String, default: 'Pendiente' },  // Ejemplo: 'Pagada', 'Pendiente'
  createdAt: { type: Date, default: Date.now }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
