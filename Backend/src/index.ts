import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import arrangementRoutes from './routes/arrangementRoutes';

const app = express();
const port = 5002;

app.use(cors());
app.use(express.json()); // Para procesar los datos en formato JSON

// Conexión a MongoDB
mongoose.connect('mongodb+srv://sisa_1:03utJRKfKNrP158S@cluster1.1owlh.mongodb.net/')
  .then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error de conexión a MongoDB:', err);
  });


// Usar las rutas de arreglos
app.use('/api', arrangementRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
