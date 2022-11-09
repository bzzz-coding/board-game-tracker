const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({message: 'Get games'})
})

router.post('/', (req, res) => {
  res.status(200).json({message: 'Add game'})
})

router.put('/:id', (req, res) => {
  res.status(200).json({message: `Update game ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({message: `Delete game ${req.params.id}`})
})

module.exports = router