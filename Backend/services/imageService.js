const axios = require('axios');

const API_URL = 'https://api.leonardo.ai/generate';  // Ajusta según la API de Leonardo
const API_KEY = process.env.LEONARDO_API_KEY;

const generarImagenArreglo = async (flowers) => {
  try {
    const description = flowers.map(flower => `${flower.quantity} ${flower.name}`).join(", ");
    const response = await axios.post(API_URL, {
      prompt: `Arreglo de flores: ${description}`,
      n: 1,
      size: '512x512'
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const imageUrl = response.data.images[0].url;
    return imageUrl;
  } catch (error) {
    console.error('Error generando imagen:', error);
    throw error;
  }
};

module.exports = { generarImagenArreglo };
