
// @desc Get games
// @route GET /api/games
// @access Private
const getGames = (req, res) => {
  res.status(200).json({message: 'Get games'})
}

// @desc Add game
// @route POST /api/games
// @access Private
const addGame = (req, res) => {
  console.log(req.body)
  res.status(200).json({message: 'Add game'})
}


// @desc update game
// @route PUT /api/games/:id
// @access Private
const updateGame = (req, res) => {
  res.status(200).json({message: `Update game ${req.params.id}`})
}

// @desc delete game
// @route DELETE /api/games/:id
// @access Private
const deleteGame = (req, res) => {
  res.status(200).json({message: `Delete game ${req.params.id}`})
}

module.exports = {
  getGames,
  addGame,
  updateGame,
  deleteGame
}