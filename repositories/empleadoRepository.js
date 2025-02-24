import Employee from '../models/empleadoModel.js'; // Modelo de Sequelize

const createEmployee = async (data) => {
    return Employee.create(data);
};

const getAllEmployees = async () => {
    return Employee.findAll();
};

const getEmployeeById = async (id) => {
    return Employee.findByPk(id);
};

const updateEmployee = async (id, data) => {
    return Employee.update(data, { where: { id } });
};

const deleteEmployee = async (id) => {
    return Employee.destroy({ where: { id } });
};

export {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
};
