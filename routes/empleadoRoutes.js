import { Router } from 'express';
import { EmployeesController } from '../controllers/empleadosController.js';  // Asegúrate de que la ruta sea correcta
const router = Router();

// Importa las funciones del servicio
import { 
    createEmployee, 
    getAllEmployees, 
    getEmployeeById, 
    updateEmployee, 
    deleteEmployee 
} from '../services/empleadoService.js';  // Asegúrate de que la ruta sea correcta

// Importa las funciones de validación
import { 
    validateEmployeeCreation, 
    validateEmployeeUpdate, 
    validateEmployeeId 
} from '../middlewares/validateEmpleado.js';  // Asegúrate de que la ruta sea correcta

// Crear instancia del controlador y pasar los servicios como un objeto
const employeesController = new EmployeesController({ 
    createEmployee, 
    getAllEmployees, 
    getEmployeeById, 
    updateEmployee, 
    deleteEmployee 
});

// Definir las rutas
router.get('/', employeesController.getAllEmployees);  // Método get del controlador (todos los empleados)
router.get('/:id', validateEmployeeId, employeesController.getEmployeeById);  // Método getById
router.post('/', validateEmployeeCreation, employeesController.createEmployee);  // Método post
router.put('/:id', validateEmployeeId, validateEmployeeUpdate, employeesController.updateEmployee);  // Método put
router.delete('/:id', validateEmployeeId, employeesController.deleteEmployee);  // Método delete

export default router;
