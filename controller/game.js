const express = require('express');
const game = express.Router();
const piece = require('../object/piece');

game.use('/',function(req,res){

	res.render('game/game');
})

module.exports = game;