import Customers from '../models/clientesModels.js'; // Modelo de Sequelize

const getAllCustomers = async () => {
  return await Customers.findAll();
};

const getCustomersById = async (id) => {
  return await Customers.findByPk(id);
};
const createCustomers = async (data) => {
  return await Customers.create(data);
};

const updateCustomers = async (id, data) => {
  const customers = await Customers.findByPk(id);
  if (customers) {
    return await customers.update(data);
  }
  return null;
};

const deleteCustomers = async (id) => {
  const customers = await Customers.findByPk(id);
  if (customers) {
    await customers.destroy();
    return true;
  }
  return false;
};

export default {
  getAllCustomers,
  getCustomersById,
  createCustomers,
  updateCustomers,
  deleteCustomers
};
