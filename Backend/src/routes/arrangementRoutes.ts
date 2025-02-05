import express from 'express';
import { getArrangements, createArrangement, editArrangement, deleteArrangement } from '../controllers/arrangementController';

const router = express.Router();

// Nueva ruta para obtener los arreglos florales
router.get('/arrangements', getArrangements); 

router.post('/arrangements', createArrangement);
router.put('/arrangements/:id', editArrangement);
router.delete('/arrangements/:id', deleteArrangement);

export default router;
