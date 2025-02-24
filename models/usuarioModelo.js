import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';  // Database connection instance

const User = sequelize.define('User', {
  idUser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  documentType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  document: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Document must be unique
  },
  cellphone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Email must be unique
    validate: {
      isEmail: true, // Validates email format
    }
  },
  idRole: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true, // Active by default
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  confirmPassword: {
    type: DataTypes.VIRTUAL, // Not stored in DB, used for validation
    set(value) {
      if (value !== this.password) {
        throw new Error('Passwords do not match');
      }
    }
  }
}, {
  timestamps: false,  // Disable createdAt and updatedAt
  tableName: 'users',  // Table name in the database
});

export default User;
