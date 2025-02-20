import { Router } from 'express';
import { EmployeesController } from '../controllers/empleadosController.js';
import { validateEmployeeId } from '../middlewares/validateEmpleado.js';
const router = Router();

router.get('/', getAllEmployees);
router.get('/:id', validateEmployeeId, getEmployeeById);

export default router;