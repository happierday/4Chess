/*
const express = require('express');
const profile = express.Router();
const models = require('../models');

profile.get('/',function(req,res){
	models.user.findAll({})
		.then(function(profile){
			if(user!= null){
				res.render('profile/profile',{user:user});
			}else{
				res.send('No user finded');
			}
		});
});

profile.post('/',function(req,res){
	console.log(req.body);
  	models.user.create({
    	email: req.body.email,
  	})
});

profile.get('/new', function (req,res) {
  res.render('profile/new');
});

module.exports  = profile;
	*/