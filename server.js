import express from 'express';
import { connectDB } from './config/db';
import Employee from './models/empleadoModel';

const app = express();

// Conectar a la base de datos
connectDB();

// Sincronizar modelos
async function syncModels() {
  try {
    await Employee.sync();  // Esto crea la tabla en MySQL si no existe
    console.log('Modelo de Employee sincronizado');
  } catch (error) {
    console.error('Error sincronizando los modelos:', error);
  }
}

syncModels();

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
