const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 2000

const app = express()

app.get('/api/games', (req, res) => {
  res.send('Get games')
})

app.listen(port, () => console.log(`Server started on port ${port}`))