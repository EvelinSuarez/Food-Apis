export const validatePermission = (req, res, next) => {
    const { id } = req.params;
    const { nombre, estado } = req.body;
  
    // Validación del ID (cuando se pasa como parámetro)
    if (id && isNaN(id)) {
      return res.status(400).json({ message: 'Invalid permission ID' });
    }
  
    // Validación del nombre del permiso (en creación/actualización)
    if (nombre && typeof nombre !== 'string') {
      return res.status(400).json({ message: 'Permission name must be a valid string' });
    }
  
    // Validación del estado (si aplica)
    const validStates = ['activo', 'inactivo'];
    if (estado && !validStates.includes(estado.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid status. Allowed values: activo, inactivo' });
    }
  
    next();
  };
  