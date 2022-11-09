const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title value']
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model('Game', gameSchema)