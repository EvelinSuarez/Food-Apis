import { Router } from 'express';
import { UserController } from '../controllers/usuarioController.js';
import  validateUser  from '../middlewares/validateUsuario.js';


const routerUser = Router();


import userService from '../services/usuarioService.js';
const userController = new UserController({ userService });

routerUser.get('/', userController.get);
routerUser.get('/:id', validateUser, userController.getById);
routerUser.post('/', validateUser, userController.post);
routerUser.put('/:id', validateUser, userController.put);
routerUser.delete('/:id', validateUser, userController.delete);

export default routerUser;