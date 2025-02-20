import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';  // Instancia de conexión con la base de datos

const User = sequelize.define('User', {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tipoDocumento: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  documento: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true, // No se puede repetir el documento
  },
  celular: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  nombreCompleto: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(250),
    allowNull: false,
    unique: true, // No se permite registrar un correo ya existente
    validate: {
      isEmail: true, // Valida que sea un correo válido
    }
  },
  rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true, // Activo por defecto
  },
  contraseña: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  confirmarContraseña: {
    type: DataTypes.VIRTUAL, // No se almacena en la BD, solo se usa para validación
    set(value) {
      if (value !== this.contraseña) {
        throw new Error('Las contraseñas no coinciden');
      }
    }
  }
}, {
  timestamps: false,  // Desactivamos createdAt y updatedAt
  tableName: 'usuario',  // Nombre de la tabla en la BD
});

export default User;
