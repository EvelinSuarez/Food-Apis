import { Router } from 'express';
import { EmployeesController } from '../controllers/usuario.controller.js';
import validateUser, { validateEmployeeId } from '../middlewares/validateUsuario.js';
const router = Router();

router.get('/', getAllUsers);
router.get('/:id', validateUser );

export default router;