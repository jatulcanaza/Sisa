import express from 'express';
import { createArrangement, editArrangement, deleteArrangement } from '../controllers/arrangementController';

const router = express.Router();

router.post('/arrangements', createArrangement);
router.put('/arrangements/:id', editArrangement);
router.delete('/arrangements/:id', deleteArrangement);

export default router;
