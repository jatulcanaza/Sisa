import { Request, Response } from 'express';
import Arrangement from '../models/Arrangement';

// Crear un nuevo ramo
export const createArrangement = async (req: Request, res: Response) => {
  try {
    const { image, flowers, price, userId } = req.body;

    const newArrangement = new Arrangement({
      image,
      flowers,
      price,
      userId,
    });

    await newArrangement.save();
    res.status(201).json({ message: 'Ramo creado con éxito', arrangement: newArrangement });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el ramo', error });
  }
};

// Editar un ramo existente
export const editArrangement = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { flowers, price, status } = req.body;

  try {
    const arrangement = await Arrangement.findByIdAndUpdate(
      id,
      { flowers, price, status },
      { new: true }
    );
    res.status(200).json({ message: 'Ramo actualizado', arrangement });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el ramo', error });
  }
};

// Eliminar un ramo
export const deleteArrangement = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Arrangement.findByIdAndDelete(id);
    res.status(200).json({ message: 'Ramo eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el ramo', error });
  }
};
