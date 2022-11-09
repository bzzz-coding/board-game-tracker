const express = require('express')
const { getGames, addGame, updateGame, deleteGame } = require('../controllers/gameController')
const router = express.Router()

router.get('/', getGames)

router.post('/', addGame)

router.put('/:id', updateGame)

router.delete('/:id', deleteGame)

module.exports = router