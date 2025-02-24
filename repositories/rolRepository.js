import Role from '../models/roleModel.js'; // Asegúrate de que el modelo esté bien importado

const getAllRoles = async () => {
  return await Role.findAll();
};

const getRoleById = async (id) => {
  return await Role.findByPk(id);
};

const createRole = async (data) => {
  return await Role.create(data);
};

const updateRole = async (id, data) => {
  const role = await Role.findByPk(id);
  if (role) {
    return await role.update(data);
  }
  return null;
};

const deleteRole = async (id) => {
  const role = await Role.findByPk(id);
  if (role) {
    await role.destroy();
    return true;
  }
  return false;
};

export {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
