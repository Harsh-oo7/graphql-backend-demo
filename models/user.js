const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
        type: Number
    },
    email: {
        type: String,
    }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

const User = mongoose.model(
  'user',
  UserSchema,
)

module.exports = User
