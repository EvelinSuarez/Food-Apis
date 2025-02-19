import Employee from '../models/empleadoModel'; // Modelo de Sequelize

const getAllEmployees = async () => {
  return await Employee.findAll();
};

const getEmployeeById = async (id) => {
  return await Employee.findByPk(id);
};

const createEmployee = async (data) => {
  return await Employee.create(data);
};

const updateEmployee = async (id, data) => {
  const employee = await Employee.findByPk(id);
  if (employee) {
    return await employee.update(data);
  }
  return null;
};

const deleteEmployee = async (id) => {
  const employee = await Employee.findByPk(id);
  if (employee) {
    await employee.destroy();
    return true;
  }
  return false;
};

export {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
