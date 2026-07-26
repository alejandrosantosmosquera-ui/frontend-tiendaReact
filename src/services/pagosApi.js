const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';
const API_URL = `${BASE_URL}/pagos`;

export const getpagos = async () => {
  const response = await fetch(API_URL);
  return await response.json();
  };

async function parseResponse(response) {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Error en la comunicación con el backend.');
  }
  return response.json();
}

export async function listarPagos() {
  const response = await fetch(API_URL);
  return parseResponse(response);
}