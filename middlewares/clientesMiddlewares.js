const validateClientesId = (req, res, next) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ message: 'ID del cliente invalido' });
    }
    next();
  };
  
  export default  {
    validateClientesId,
  };
  