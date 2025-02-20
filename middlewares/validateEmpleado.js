// validateEmpleado.js
export const validateEmployeeId = (req, res, next) => {
  const { id } = req.params;
  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid employee ID' });
  }
  next();
};
