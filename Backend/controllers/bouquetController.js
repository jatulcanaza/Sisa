// controllers/bouquetController.js
const Bouquet = require('../models/Bouquet');
const Flower = require('../models/Flower');
const { generarImagenArreglo } = require('../services/imageService');

// Función para crear un ramo personalizado
const crearRamo = async (req, res) => {
  const { userId, flowers } = req.body;

  try {
    let totalPrice = 0;
    const selectedFlowers = [];

    // Buscar flores seleccionadas en la base de datos
    for (const item of flowers) {
      const flower = await Flower.findById(item.flowerId);
      if (flower) {
        selectedFlowers.push(flower);
        totalPrice += flower.price * item.quantity;
      }
    }

    // Generar la imagen del ramo utilizando la IA
    const imageUrl = await generarImagenArreglo(selectedFlowers);

    // Crear el objeto del ramo
    const nuevoRamo = new Bouquet({
      userId,
      flowers: selectedFlowers.map((flower, index) => ({
        flowerId: flower._id,
        quantity: flowers[index].quantity
      })),
      imageUrl,
      totalPrice,
      status: 'pendiente'  // Por defecto, el ramo está en estado pendiente
    });

    // Guardar el ramo en la base de datos
    await nuevoRamo.save();

    res.status(201).json({ ramo: nuevoRamo, imageUrl });
  } catch (error) {
    console.error('Error al crear el ramo:', error);
    res.status(500).json({ message: 'Error al crear el ramo', error });
  }
};

// Función para aceptar el ramo y generar la factura
const aceptarRamo = async (req, res) => {
  const { bouquetId } = req.body;

  try {
    const ramo = await Bouquet.findById(bouquetId);

    if (!ramo) {
      return res.status(404).json({ message: 'Ramo no encontrado' });
    }

    // Actualizar el estado del ramo a "aceptado"
    ramo.status = 'aceptado';
    await ramo.save();

    // Aquí puedes llamar a la función para generar la factura
    // Puedes hacer una solicitud para generar la factura en otro controlador

    res.status(200).json({ message: 'Ramo aceptado con éxito', ramo });
  } catch (error) {
    console.error('Error al aceptar el ramo:', error);
    res.status(500).json({ message: 'Error al aceptar el ramo', error });
  }
};

// Función para editar un ramo (actualizar flores y generar nueva imagen)
const editarRamo = async (req, res) => {
  const { bouquetId, flowers } = req.body;

  try {
    const ramo = await Bouquet.findById(bouquetId);

    if (!ramo) {
      return res.status(404).json({ message: 'Ramo no encontrado' });
    }

    // Buscar las flores seleccionadas y recalcular el precio
    let totalPrice = 0;
    const selectedFlowers = [];

    for (const item of flowers) {
      const flower = await Flower.findById(item.flowerId);
      if (flower) {
        selectedFlowers.push(flower);
        totalPrice += flower.price * item.quantity;
      }
    }

    // Generar la nueva imagen del ramo
    const imageUrl = await generarImagenArreglo(selectedFlowers);

    // Actualizar el ramo con las nuevas flores y la nueva imagen
    ramo.flowers = selectedFlowers.map((flower, index) => ({
      flowerId: flower._id,
      quantity: flowers[index].quantity
    }));
    ramo.imageUrl = imageUrl;
    ramo.totalPrice = totalPrice;
    ramo.status = 'editado'; // Cambiar el estado a 'editado'

    await ramo.save();

    res.status(200).json({ message: 'Ramo editado con éxito', ramo });
  } catch (error) {
    console.error('Error al editar el ramo:', error);
    res.status(500).json({ message: 'Error al editar el ramo', error });
  }
};

// Función para cancelar el ramo
const cancelarRamo = async (req, res) => {
  const { bouquetId } = req.body;

  try {
    const ramo = await Bouquet.findById(bouquetId);

    if (!ramo) {
      return res.status(404).json({ message: 'Ramo no encontrado' });
    }

    // Actualizar el estado del ramo a "cancelado"
    ramo.status = 'cancelado';
    await ramo.save();

    res.status(200).json({ message: 'Ramo cancelado con éxito', ramo });
  } catch (error) {
    console.error('Error al cancelar el ramo:', error);
    res.status(500).json({ message: 'Error al cancelar el ramo', error });
  }
};

module.exports = {
  crearRamo,
  aceptarRamo,
  editarRamo,
  cancelarRamo
};
