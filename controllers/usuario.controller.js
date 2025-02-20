export class UserController {
    constructor ({ userModel }) {
      this.userModel = userModel
    }
  
    get = async (req, res) => {
      const data = await this.userModel.get()
     
      res.status(200).json(data)
    }
  
    getById = async (req, res) => {
      const data = await this.userModel.getById(req.params.id)
      res.status(200).json(data)
    }
  
    post = async (req, res) => {
      const data = await this.userModel.post(req.body)
      res.status(201).json(data)
    }
  
    put = async (req, res) => {
      const data = await this.userModel.put(req.params.id, req.body)
      res.status(200).json(data)
    }
  
    delete = async (req, res) => {
      const data = await this.userModel.delete(req.params.id)
      res.status(200).json(data)
    }
  }
  