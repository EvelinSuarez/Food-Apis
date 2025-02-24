import { getAllEmployees as _getAllEmployees, 
  getEmployeeById as _getEmployeeById, 
  createEmployee as _createEmployee, 
  updateEmployee as _updateEmployee, 
  deleteEmployee as _deleteEmployee } from '../repositories/empleadoRepository.js';

const createEmployee = async (data) => {
    return _createEmployee(data);
};

const getAllEmployees = async () => {
    return _getAllEmployees();
};

const getEmployeeById = async (id) => {
    return _getEmployeeById(id);
};

const updateEmployee = async (id, data) => {
    return _updateEmployee(id, data);
};

const deleteEmployee = async (id) => {
    return _deleteEmployee(id);
};

export {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
};
