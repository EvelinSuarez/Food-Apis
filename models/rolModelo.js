import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isIn: [['Administrador', 'Jefe de Cocina', 'Auxiliar de Cocina']], 
    },
  },
}, {
  timestamps: false, // Desactivamos createdAt/updatedAt
  tableName: 'Roles', // Nombre exacto de la tabla en la BD
});

export default Role;
