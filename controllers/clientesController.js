export class CustomersController {
    constructor({ customersService }) {
        this.customersService = customersService;
    }

    get = async (req, res) => {
        try {
            const customers = await this.customersService.getAllCustomers();
            res.status(200).json(customers);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    getById = async (req, res) => {
        try {
            const customer = await this.customersService.getCustomersById(req.params.id);
            if (!customer) {
                return res.status(404).json({ message: 'Cliente no encontrado' });
            }
            res.status(200).json(customer);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    post = async (req, res) => {
        try {
            const idCustomers = await this.customersService.createCustomers(req.body);
            res.status(201).json({ idCustomers, message: 'Cliente creado exitosamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    put = async (req, res) => {
        try {
            await this.customersService.updateCustomers(req.params.id, req.body);
            res.status(200).json({ message: 'Cliente actualizado exitosamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    delete = async (req, res) => {
        try {
            await this.customersService.deleteCustomers(req.params.id);
            res.status(200).json({ message: 'Cliente eliminado exitosamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
}
