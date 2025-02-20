import User from '../models/usuarioModel.js'; // Importamos el modelo de Usuario

// Obtener todos los usuarios
const getAllUsers = async () => {
  return await User.findAll();
};

// Obtener un usuario por ID
const getUserById = async (idUsuario) => {
  return await User.findByPk(idUsuario);
};

// Crear un nuevo usuario
const createUser = async (data) => {
  return await User.create(data);
};

// Actualizar datos de un usuario
const updateUser = async (idUsuario, data) => {
  const user = await User.findByPk(idUsuario);
  if (user) {
    return await user.update(data);
  }
  return null;
};

// Eliminar un usuario
const deleteUser = async (idUsuario) => {
  const user = await User.findByPk(idUsuario);
  if (user) {
    await user.destroy();
    return true;
  }
  return false;
};

export {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
