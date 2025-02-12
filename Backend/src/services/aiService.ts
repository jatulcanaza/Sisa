import axios from 'axios';

export const generateBouquet = async (flowers: any) => {
  try {
    const response = await axios.post('URL_DE_LA_API_DE_LEONARDO', {
      flowers, // Datos de flores que el cliente seleccionó
    });
    return response.data.imageUrl; // La URL de la imagen generada por Leonardo
  } catch (error) {
    console.error('Error generando el ramo con la IA:', error);
    throw error;
  }
};
