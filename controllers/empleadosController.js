export class EmployeesController {
    constructor ({ employeeModel }) {
        this.employeeModel = employeeModel
    }

    get = async (req, res) => {
        const data = await this.employeeModel.get()
        res.status(200).json(data)
    }

    getById = async (req, res) => {
        const data = await this.employeeModel.getById(req.params.id)
        res.status(200).json(data)
    }

    post = async (req, res) => {
        const data = await this.employeeModel.post(req.body)
        res.status(201).json(data)
    }

    put = async (req, res) => {
        const data = await this.employeeModel.put(req.params.id, req.body)
        res.status(200).json(data)
    }

    delete = async (req, res) => {
        const data = await this.employeeModel.delete(req.params.id)
        res.status(200).json(data)
    }
}
