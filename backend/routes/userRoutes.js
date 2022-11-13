const express = require('express')
const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')



router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/current', protect, getCurrentUser)


module.exports = router