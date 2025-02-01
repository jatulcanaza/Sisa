// routes/bouquetRoutes.js
const express = require('express');
const router = express.Router();
const {
  crearRamo,
  aceptarRamo,
  editarRamo,
  cancelarRamo
} = require('../controllers/bouquetController'); // Importar controlador

// Ruta para crear un ramo
router.post('/crear', crearRamo);

// Ruta para aceptar un ramo y generar la factura
router.post('/aceptar', aceptarRamo);

// Ruta para editar un ramo (actualizar flores y generar nueva imagen)
router.post('/editar', editarRamo);

// Ruta para cancelar un ramo
router.post('/cancelar', cancelarRamo);

module.exports = router;
