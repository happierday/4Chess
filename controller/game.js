const express = require('express');
const game = express.Router();

game.use('/',function(req,res){
	res.render('game/game');
})

module.exports = game;