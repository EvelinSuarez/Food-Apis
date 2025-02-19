import { UsersSchema } from '../schemas/mongodb/users/users.model.js'
import bcrypt from 'bcryptjs'

export class AuthModel {
  async login (email, password) {
    await UsersSchema.findOne({ email })
      .then((user) => {
        if (!user) return null
        bcrypt
          .compare(password, user.password)
          .then((match) => {
            if (match) {
              const { password: _, ...publicUser } = user
              return publicUser
            }
            return null
          })
          .catch((err) => {
            return err
          })
      })
      .catch((err) => {
        return err
      })
  }
}
