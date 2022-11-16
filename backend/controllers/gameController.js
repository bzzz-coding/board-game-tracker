const asyncHandler = require('express-async-handler')
const Game = require('../models/gameModel')
const User = require('../models/userModel')

// @desc Get games
// @route GET /api/games
// @access Private
const getGames = asyncHandler(async (req, res) => {
  const games = await Game.find({ user: req.user.id })
  res.status(200).json(games)
})

// @desc Add game
// @route POST /api/games
// @access Private
const addGame = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    // client error
    res.status(400)
    throw new Error('Please add a title field')
  }

  const game = await Game.create({
    title: req.body.title,
    user: req.user.id
  })

  res.status(200).json(game)
})


// @desc update game
// @route PUT /api/games/:id
// @access Private
const updateGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id)

  if (!game) {
    res.status(400)
    throw new Error('Game not found')
  }


  // check for user
  if(!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // make sure current user matches game's user
  if(game.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGame)
})

// @desc delete game
// @route DELETE /api/games/:id
// @access Private
const deleteGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id)

  if (!game) {
    res.status(400)
    throw new Error('Game not found')
  }


  // check for user
  if(!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // make sure current user matches game's user
  if(game.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await game.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGames,
  addGame,
  updateGame,
  deleteGame
}