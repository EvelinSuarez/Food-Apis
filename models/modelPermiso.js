import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Permission = sequelize.define('Permission', {
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
      notEmpty: { msg: 'El nombre del permiso no puede estar vacío' },
      len: { args: [3, 50], msg: 'El nombre debe tener entre 3 y 50 caracteres' },
    },
  },
  estado: {
    type: DataTypes.ENUM('activo', 'inactivo'),
    allowNull: false,
    defaultValue: 'activo',
    validate: {
      isIn: {
        args: [['activo', 'inactivo']],
        msg: 'Estado inválido. Solo se permite: activo, inactivo',
      },
    },
  },
}, {
  timestamps: true,  // Agrega createdAt y updatedAt
  paranoid: true,  // Habilita eliminación lógica con deletedAt
  tableName: 'Permisos', // Nombre exacto de la tabla en la BD
});

export default Permission;
