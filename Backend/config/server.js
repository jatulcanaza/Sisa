// config/server.js
const express = require('express');
const connectDB = require('./db');
const bouquetRoutes = require('../routes/bouquetRoutes');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB
connectDB();

const app = express();

// Middleware para parsear el body de las peticiones
app.use(express.json());

// Rutas
app.use('/api/bouquet', bouquetRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
