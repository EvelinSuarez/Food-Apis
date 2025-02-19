export class AuthController {
    constructor ({ authModel }) {
      this.authModel = authModel
    }
  
    login = async (req, res) => {
      const { email, password } = req.body
      const data = await this.authModel.post(email, password)
      res.status(201).json(data)
    }
  }
  