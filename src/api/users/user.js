import mongoose from 'mongoose'
let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

const UserSchema = new Schema({
  // email: ObjectId, // uuid
  name: String,
  age: Number,
  roles: Array
})

export default mongoose.model('User', UserSchema)
