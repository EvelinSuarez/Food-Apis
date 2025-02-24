import { Sequelize } from 'sequelize';

// Cambia el nombre de la constante para evitar conflicto
const dbConnection = new Sequelize('store', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

// Exporta la instancia correctamente
export default dbConnection;
