import { validationResult } from 'express-validator';

export class EmployeesController {
    constructor({ employeeService }) {
        this.employeeService = employeeService;
    }

    createEmployee = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const employee = await this.employeeService.createEmployee(req.body);
            res.status(201).json(employee);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    getAllEmployees = async (req, res) => {
        try {
            const employees = await this.employeeService.getAllEmployees();
            res.status(200).json(employees);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    getEmployeeById = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const employee = await this.employeeService.getEmployeeById(req.params.id);
            res.status(200).json(employee);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    updateEmployee = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await this.employeeService.updateEmployee(req.params.id, req.body);
            res.status(204).end();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    deleteEmployee = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await this.employeeService.deleteEmployee(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
}
