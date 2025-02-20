// empleadoRoutes.js
import { Router } from 'express';
import { EmployeesController } from '../controllers/empleadosController.js';  // Asegúrate de que la ruta sea correcta
import { validateEmployeeId } from '../middlewares/validateEmpleado.js';  // Asegúrate de que la ruta sea correcta

const router = Router();

// Instanciamos el controlador con el servicio
import employeeService from '../services/empleadoService.js';  // Asegúrate de que la ruta sea correcta
const employeesController = new EmployeesController({ employeeService });

// Definir las rutas y usar los métodos del controlador
router.get('/', employeesController.get);  // Método `get` del controlador
router.get('/:id', validateEmployeeId, employeesController.getById);  // Método `getById` del controlador

export default router;
