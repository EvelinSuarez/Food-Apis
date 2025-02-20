// employeeService.js
import { getAllEmployees as _getAllEmployees, getEmployeeById as _getEmployeeById, createEmployee as _createEmployee, updateEmployee as _updateEmployee, deleteEmployee as _deleteEmployee } from '../repositories/empleadoRepository.js';

const getAllEmployees = async () => {
  return await _getAllEmployees();
};

const getEmployeeById = async (id) => {
  return await _getEmployeeById(id);
};

const createEmployee = async (data) => {
  return await _createEmployee(data); // Aquí llamas a la función del repositorio
};

const updateEmployee = async (id, data) => {
  return await _updateEmployee(id, data); // Aquí llamas a la función del repositorio
};

const deleteEmployee = async (id) => {
  return await _deleteEmployee(id); // Aquí llamas a la función del repositorio
};

export default {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
