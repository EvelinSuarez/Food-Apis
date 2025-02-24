import Permission from '../models/permissionModel.js'; // Asegúrate de importar correctamente el modelo

const getAllPermissions = async () => {
  try {
    return await Permission.findAll();
  } catch (error) {
    throw new Error(`Error retrieving permissions: ${error.message}`);
  }
};

const getPermissionById = async (id) => {
  try {
    const permission = await Permission.findByPk(id);
    if (!permission) throw new Error('Permission not found');
    return permission;
  } catch (error) {
    throw new Error(`Error retrieving permission: ${error.message}`);
  }
};

const createPermission = async (data) => {
  try {
    return await Permission.create(data);
  } catch (error) {
    throw new Error(`Error creating permission: ${error.message}`);
  }
};

const updatePermission = async (id, data) => {
  try {
    const permission = await Permission.findOne({ where: { id } });
    if (!permission) throw new Error('Permission not found');

    return await permission.update(data);
  } catch (error) {
    throw new Error(`Error updating permission: ${error.message}`);
  }
};

const deletePermission = async (id) => {
  try {
    const permission = await Permission.findOne({ where: { id } });
    if (!permission) throw new Error('Permission not found');

    await permission.destroy();
    return true;
  } catch (error) {
    throw new Error(`Error deleting permission: ${error.message}`);
  }
};

// Cambiar estado de un permiso (activar/inactivar)
const togglePermissionStatus = async (id) => {
  try {
    const permission = await Permission.findOne({ where: { id } });
    if (!permission) throw new Error('Permission not found');

    // Cambia el estado entre 'activo' y 'inactivo'
    const newStatus = permission.estado === 'activo' ? 'inactivo' : 'activo';
    await permission.update({ estado: newStatus });

    return permission;
  } catch (error) {
    throw new Error(`Error toggling permission status: ${error.message}`);
  }
};

// Restaurar un permiso eliminado (si usaste `paranoid: true`)
const restorePermission = async (id) => {
  try {
    const permission = await Permission.findOne({ where: { id }, paranoid: false });
    if (!permission) throw new Error('Permission not found');

    await permission.restore();
    return true;
  } catch (error) {
    throw new Error(`Error restoring permission: ${error.message}`);
  }
};

export {
  getAllPermissions,
  getPermissionById,
  createPermission,
  updatePermission,
  deletePermission,
  togglePermissionStatus,
  restorePermission, // Nuevo método para restaurar permisos eliminados
};
