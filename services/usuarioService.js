import { 
    getAllUsers as _getAllUsers, 
    getUserById as _getUserById, 
    createUser as _createUser, 
    updateUser as _updateUser, 
    deleteUser as _deleteUser 
  } from '../repositories/usuarioRepository.js';
  
  const getAllUsers = async () => {
    return await _getAllUsers();
  };
  
  const getUserById = async (idUsuario) => {
    return await _getUserById(idUsuario);
  };
  
  const createUser = async (data) => {
    return await _createUser(data);
  };
  
  const updateUser = async (idUsuario, data) => {
    return await _updateUser(idUsuario, data);
  };
  
  const deleteUser = async (idUsuario) => {
    return await _deleteUser(idUsuario);
  };
  
  export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
  