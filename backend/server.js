const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 2000

const app = express()

// Add middleware in order to use req.body
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/games', require('./routes/gameRoutes'))

// use errorHandler to override the default express error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))