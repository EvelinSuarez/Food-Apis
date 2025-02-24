// middlewares/validateEmpleado.js
import { body, param } from 'express-validator';

// Definición de las validaciones
const validateEmployeeCreation = [
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    // Otras validaciones para la creación de empleados
];

const validateEmployeeUpdate = [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('email').optional().isEmail().withMessage('Valid email is required'),
    // Otras validaciones para la actualización de empleados
];

const validateEmployeeId = [
    param('id').isInt().withMessage('ID must be an integer'),
    // Otras validaciones para ID
];

// Exporta correctamente las validaciones
export { 
    validateEmployeeCreation, 
    validateEmployeeUpdate,
    validateEmployeeId 
};
