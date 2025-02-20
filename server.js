import express from 'express';
import { connectDB } from './config/db.js';
import Employee from './models/empleadoModel.js';
import router from './routes/empleadoRoutes.js';
import User from './models/usuarioModelo.js'; 
import routerUser from './routes/usuarioRoutes.js';

const app = express();

connectDB();

app.get("/", (req,resp)=>{
  resp.send("hola")
})

app.use("/api/employees", router)
app.use("/api/users", routerUser)

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
async function syncModelsUser() {
  try {
    await User.sync({ force: true });  // Elimina la tabla y la crea nuevamente
    console.log('Modelo de User sincronizado');
   
  } catch (error) {
    console.error('Error sincronizando los modelos:', error);
  }
}

syncModels();
syncModelsUser();

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
