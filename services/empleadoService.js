import { getAllEmployees as _getAllEmployees, getEmployeeById as _getEmployeeById } from '../repositories/empleadoRepository.js';

const getAllEmployees = async () => {
  return await _getAllEmployees();
};

const getEmployeeById = async (id) => {
  return await _getEmployeeById(id);
};

const createEmployee = async (data) => {
  return await createEmployee(data);
};

const updateEmployee = async (id, data) => {
  return await updateEmployee(id, data);
};

const deleteEmployee = async (id) => {
  return await deleteEmployee(id);
};

export default {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
