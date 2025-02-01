const express = require('express');
const Invoice = require('../models/Invoice');
const Bouquet = require('../models/Bouquet');
const router = express.Router();

// Ruta para generar una factura
router.post('/generar', async (req, res) => {
  const { userId, bouquetId } = req.body;

  try {
    // Buscar el ramo para obtener el precio
    const bouquet = await Bouquet.findById(bouquetId);
    if (!bouquet) {
      return res.status(404).json({ message: 'Ramo no encontrado' });
    }

    // Crear la factura
    const invoice = new Invoice({
      userId,
      bouquetId: bouquet._id,
      totalPrice: bouquet.totalPrice
    });

    await invoice.save();
    res.status(201).json({ invoice });
  } catch (error) {
    res.status(500).json({ message: 'Error al generar la factura', error });
  }
});

module.exports = router;
