export class EmployeesController {
    constructor ({ employeeService }) {
        this.employeeService = employeeService;
    }

    get = async (req, res) => {
        try {
            const data = await this.employeeService.getAllEmployees();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getById = async (req, res) => {
        try {
            const data = await this.employeeService.getEmployeeById(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    post = async (req, res) => {
        try {
            const data = await this.employeeService.createEmployee(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    put = async (req, res) => {
        try {
            const data = await this.employeeService.updateEmployee(req.params.id, req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            const data = await this.employeeService.deleteEmployee(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
