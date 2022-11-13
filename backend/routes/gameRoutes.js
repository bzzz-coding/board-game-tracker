const express = require('express')
const { getGames, addGame, updateGame, deleteGame } = require('../controllers/gameController')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getGames).post(protect, addGame)

router.route('/:id').put(protect, updateGame).delete(protect, deleteGame)


module.exports = router