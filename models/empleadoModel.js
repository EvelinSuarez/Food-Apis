import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';  // Usamos la instancia de sequelize exportada desde db.js

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipoDocumento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  documento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombreCompleto: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  fechaIngreso: {
    type: DataTypes.DATE,  // Usar tipo DATE en lugar de STRING para fechas
    allowNull: false,
  },
  contactoEmergencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parentesco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombreFamiliar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoSangre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numeroSeguridadSocial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoContrato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,  // Desactivamos los campos createdAt/updatedAt
  tableName: 'empleado',  // Especificamos el nombre de la tabla
});

export default Employee;
