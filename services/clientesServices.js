import { createCustomers as _createCustomers, deleteCustomers as _deleteCustomers, updateCustomers as _updateCustomers, getAllCustomers as _getAllCustomers, getCustomersById as _getCustomersById } from '../controllers/clientesController.js';

const customersRepository = require('../repositories/clientesRepository.js');

const getAllCustomers = async () => {
  return await customersRepository.getAllCustomers();
};

const getCustomersById = async (id) => {
  return await customersRepository.getClientesById(id);
};

const createCustomers = async (data) => {
  return await _createCustomers(data);
};

const updateCustomers = async (id, data) => {
  return await _updateCustomers(id, data);
};

const deleteCustomers = async (id) => {
  return await _deleteCustomers(id);
};

export default {
  getAllCustomers,
  getCustomersById,
  createCustomers,
  updateCustomers,
  deleteCustomers,
};
