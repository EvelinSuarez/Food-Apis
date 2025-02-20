export class RolesController {
    constructor({ roleService }) {
        this.roleService = roleService;
    }

    get = async (req, res) => {
        try {
            const data = await this.roleService.getAllRoles();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getById = async (req, res) => {
        try {
            const data = await this.roleService.getRoleById(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    post = async (req, res) => {
        try {
            const data = await this.roleService.createRole(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    put = async (req, res) => {
        try {
            const data = await this.roleService.updateRole(req.params.id, req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            const data = await this.roleService.deleteRole(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}