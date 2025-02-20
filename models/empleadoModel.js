import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';  // Usamos la instancia de sequelize exportada desde db.js

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tipoDocumento: {
    type: DataTypes.STRING,
    allowNull: true,  // Si es opcional en tu base de datos
  },
  documento: {
    type: DataTypes.INTEGER,  // Cambié esto a INTEGER para coincidir con tu base de datos
    allowNull: false,
  },
  nombreCompleto: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  fechaIngreso: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  contactoEmergencia: {
    type: DataTypes.INTEGER,  // Asegúrate de que sea INTEGER si es un número
    allowNull: true,  // Este campo es opcional en tu base de datos
  },
  parentesco: {
    type: DataTypes.STRING,
    allowNull: true,  // Este campo es opcional en tu base de datos
  },
  nombreFamiliar: {
    type: DataTypes.STRING,
    allowNull: true,  // Este campo es opcional en tu base de datos
  },
  tipoSangre: {
    type: DataTypes.STRING,
    allowNull: true,  // Este campo es opcional en tu base de datos
  },
  numeroSeguridadSocial: {
    type: DataTypes.STRING,
    allowNull: true,  // Este campo es opcional en tu base de datos
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true,  // Este campo es opcional en tu base de datos
  },
  tipoContrato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: true,  // Este campo es opcional en tu base de datos
  }
}, {
  timestamps: false,
  tableName: 'empleado',
});

export default Employee;
