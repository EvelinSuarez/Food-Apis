import { body, validationResult } from 'express-validator';

const validateUser = [
  body('documentType').notEmpty().withMessage('Document type is required').isString().isLength({ max: 30 }),
  body('document').notEmpty().withMessage('Document number is required').isString().isLength({ max: 30 }),
  body('cellphone').optional().isString().isLength({ max: 15 }).withMessage('Cellphone must have a maximum of 15 characters'),
  body('fullName').notEmpty().withMessage('Full name is required').isString().isLength({ max: 60 }),
  body('email').notEmpty().withMessage('Email is required').isEmail().isLength({ max: 250 }),
  body('idRole').notEmpty().withMessage('Role is required').isInt(),
  body('state').isBoolean().withMessage('State must be a boolean value'),
  body('password').notEmpty().withMessage('Password is required').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match');
    }
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export default validateUser;
