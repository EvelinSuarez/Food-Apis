import { Router } from 'express';
import { EmployeesController } from '../controllers/empleadosController.js';  // Asegúrate de que la ruta sea correcta
import { validateEmployeeId } from '../middlewares/validateEmpleado.js';  // Asegúrate de que la ruta sea correcta

const router = Router();

// Instanciamos el controlador con el servicio
import employeeService from '../services/empleadoService.js';  // Asegúrate de que la ruta sea correcta
const employeesController = new EmployeesController({ employeeService });

router.get('/', employeesController.get);  // Método `get` del controlador (todos los empleados)
router.get('/:id', validateEmployeeId, employeesController.getById); // Método `getById` del controlador (un empleado por ID)
router.post('/', employeesController.post);  // Método `post` del controlador (crear empleado)
router.put('/:id', validateEmployeeId, employeesController.put);  // Método `put` del controlador (actualizar empleado)
router.delete('/:id', validateEmployeeId, employeesController.delete);  // Método `delete` del controlador (eliminar empleado)

export default router;
