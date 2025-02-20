import { Router } from 'express';
import { getAllCustomers, getCustomersById } from '../controllers/clientesController.js';
import { validateCustomersId } from '../middlewares/clientesMiddlewares.js';
const router = Router();

router.get('/customers', getAllCustomers);
router.get('/customers/:id', validateCustomersId, getCustomersById);

export default router;

