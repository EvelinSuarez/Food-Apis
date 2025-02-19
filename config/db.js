import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// Cargar variables de entorno
config();

// Crear una instancia de Sequelize para conectar con MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Nombre de la base de datos
  process.env.DB_USER,     // Usuario de la base de datos
  process.env.DB_PASSWORD, // Contraseña de la base de datos
  {
    host: process.env.DB_HOST || 'localhost', // Dirección del servidor MySQL
    dialect: 'mysql',    // Tipo de base de datos
    logging: false,      // Desactiva los logs SQL (opcional)
    pool: {
      max: 5,            // Número máximo de conexiones
      min: 0,            // Número mínimo de conexiones
      acquire: 30000,    // Tiempo de espera máximo para obtener una conexión
      idle: 10000        // Tiempo máximo que una conexión puede estar inactiva
    }
  }
);

// Función para verificar la conexión
const connectDB = async () => {
  try {
    await sequelize.authenticate();  // Verifica la conexión
    console.log('Conexión a MySQL establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
    process.exit(1);  // Salir si no se puede conectar
  }
};

export default { sequelize, connectDB };
