import { Router } from 'express';
import { getAllEmployees, getEmployeeById } from '../controllers/empleadosController.js';
import { validateEmployeeId } from '../middlewares/validateEmpleado.js';
const router = Router();

router.get('/employees', getAllEmployees);
router.get('/employees/:id', validateEmployeeId, getEmployeeById);

export default router;

