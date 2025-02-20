const { body, validationResult } = require('express-validator');

const validateUser = [
  body('tipoDocumento').notEmpty().withMessage('El tipo de documento es obligatorio').isString().isLength({ max: 30 }),
  body('documento').notEmpty().withMessage('El número de documento es obligatorio').isString().isLength({ max: 30 }),
  body('celular').optional().isString().isLength({ max: 15 }).withMessage('El celular debe tener máximo 15 caracteres'),
  body('nombreCompleto').notEmpty().withMessage('El nombre completo es obligatorio').isString().isLength({ max: 60 }),
  body('correo').notEmpty().withMessage('El correo es obligatorio').isEmail().isLength({ max: 250 }),
  body('rol').notEmpty().withMessage('El rol es obligatorio').isInt(),
  body('estado').isBoolean().withMessage('El estado debe ser booleano'),
  body('contraseña').notEmpty().withMessage('La contraseña es obligatoria').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
  body('confirmarContraseña').custom((value, { req }) => {
    if (value !== req.body.contraseña) {
      throw new Error('Las contraseñas no coinciden');
    }
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    next();
  }
];

module.exports = validateUser;

