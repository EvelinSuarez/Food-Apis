import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';  // Usamos la instancia de sequelize exportada desde db.js


export class UserModel {
  async get () {
    const data = await UserSchema.find()
    return data
  }

  async getById (id) {
    const data = await UserSchema.findOne({ id })
    return data
  }

  async post (obj) {
    const data = await UserSchema(obj).save()
    return data
  }

  async put (_id, obj) {
    const data = await UserSchema.findByIdAndUpdate(_id, obj)
    return data
  }

  async delete (_id) {
    const data = await UserSchema.findByIdAndDelete(_id)
    return data
  }
}
