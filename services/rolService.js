import { 
    getAllRoles as _getAllRoles, 
    getRoleById as _getRoleById, 
    createRole as _createRole, 
    updateRole as _updateRole, 
    deleteRole as _deleteRole 
  } from '../repositories/roleRepository.js';
  
  const getAllRoles = async () => {
    return await _getAllRoles();
  };
  
  const getRoleById = async (id) => {
    return await _getRoleById(id);
  };
  
  const createRole = async (data) => {
    return await _createRole(data);
  };
  
  const updateRole = async (id, data) => {
    return await _updateRole(id, data);
  };
  
  const deleteRole = async (id) => {
    return await _deleteRole(id);
  };
  
  export default {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole,
  };
  