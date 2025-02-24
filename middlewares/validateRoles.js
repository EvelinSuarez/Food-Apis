import { validateRole } from '../middlewares/validateRole.js';

router.post('/roles', validateRole, rolesController.post);
router.put('/roles/:id', validateRole, rolesController.put);
router.delete('/roles/:id', validateRole, rolesController.delete);
router.get('/roles/:id', validateRole, rolesController.getById);
router.get('/roles', validateRole, rolesController.get);