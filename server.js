import express from 'express';
import { connectDB } from './config/db.js';
import Employee from './models/empleadoModel.js';
import router from './routes/empleadoRoutes.js';
import clientes from './models/clientesModels.js';


const app = express();

connectDB();

app.get("/", (req,resp)=>{
  resp.send("hola")
})

app.use("/api/employees", router)

// Conectar a la base de datos

// Sincronizar modelos
async function syncModels() {
  try {
    await Employee.sync({ force: true });  // Elimina la tabla y la crea nuevamente
    console.log('Modelo de Employee sincronizado');
  } catch (error) {
    console.error('Error sincronizando los modelos:', error);
  }
}

// // Sincronizar modelos
// async function syncModels() {
//   try {
//     await clientes.sync();  // Esto crea la tabla en MySQL si no existe
//     console.log('Modelo de Clientes sincronizado');
//   } catch (error) {
//     console.error('Error sincronizando los modelos:', error);
//   }
// }

syncModels();

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
