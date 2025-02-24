import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tipoDocumento: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  documento: {
    type: DataTypes.INTEGER,  
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
  tableName: 'employee',
});

export default Employee;
