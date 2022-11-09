const express = require('express')
const { getGames, addGame, updateGame, deleteGame } = require('../controllers/gameController')
const router = express.Router()


router.route('/').get(getGames).post(addGame)

router.route('/:id').put(updateGame).delete(deleteGame)


module.exports = router