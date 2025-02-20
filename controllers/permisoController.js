export class PermissionsController {
    constructor({ permissionService }) {
        this.permissionService = permissionService;
    }

    // Crear un permiso
    create = async (req, res) => {
        try {
            const data = await this.permissionService.createPermission(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    // Inhabilitar un permiso (desactivación lógica)
    disable = async (req, res) => {
        try {
            const data = await this.permissionService.disablePermission(req.params.id);
            if (!data) {
                return res.status(404).json({ message: 'Permission not found' });
            }
            res.status(200).json({ message: 'Permission disabled successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    // Editar un permiso
    update = async (req, res) => {
        try {
            const data = await this.permissionService.updatePermission(req.params.id, req.body);
            if (!data) {
                return res.status(404).json({ message: 'Permission not found' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    // Eliminar un permiso
    delete = async (req, res) => {
        try {
            const data = await this.permissionService.deletePermission(req.params.id);
            if (!data) {
                return res.status(404).json({ message: 'Permission not found' });
            }
            res.status(200).json({ message: 'Permission deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    // Cambiar estado de un permiso (activar/inactivar)
    toggleStatus = async (req, res) => {
        try {
            const data = await this.permissionService.togglePermissionStatus(req.params.id);
            if (!data) {
                return res.status(404).json({ message: 'Permission not found' });
            }
            res.status(200).json({ message: 'Permission status updated successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
}