import { Router } from 'express';
import { RolesController } from '../controllers/rolesController.js'; // Asegúrate de que la ruta sea correcta
import { validateRole } from '../middlewares/validateRole.js'; // Middleware para validar roles

// Instanciamos el controlador con el servicio
import roleService from '../services/roleService.js'; // Asegúrate de que la ruta sea correcta
const rolesController = new RolesController({ roleService });

const router = Router();

// Definir las rutas y usar los métodos del controlador
router.get('/', rolesController.get);  
router.get('/:id', validateRole, rolesController.getById);
router.post('/', validateRole, rolesController.post);
router.put('/:id', validateRole, rolesController.put);
router.delete('/:id', validateRole, rolesController.delete);

export default router;
