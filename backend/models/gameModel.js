const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Please add a title value']
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('Game', gameSchema)