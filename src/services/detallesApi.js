const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';
const API_URL = `${BASE_URL}/detalles`;

export const getdetalles = async () => {
  const response = await fetch(API_URL);
  return await response.json();
}; // Ajusta la ruta según tu controller

async function parseResponse(response) {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Error en la comunicación con el backend.');
  }
  return response.json();
}

export async function listarDetalles() {
  const response = await fetch(API_URL);
  return parseResponse(response);
}