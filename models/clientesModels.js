import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js'; // Instancia de Sequelize


const Customers = sequelize.define('Customers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El nombre no puede estar vacío', // Mensaje de validación personalizado
            },
            is: {
                args: /^[A-Za-z ]+$/, // Expresión regular para validar solo letras y espacios
                msg: 'El nombre solo puede contener letras y espacios', // Mensaje de validación personalizado
            },
        },
    },
    distintive: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    customerCategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^[0-9]{12}$/, // Expresión regular para validar exactamente 12 dígitos
                msg: 'El celular debe tener exactamente 12 dígitos', 
            },
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'El correo debe ser válido', 
            },
        },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false, // Desactiva los campos createdAt y updatedAt
    tableName: 'Clientes', 
});

// Exportación del modelo
export default Customers;