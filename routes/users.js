var express = require('express')
var router = express.Router();
var user = require('../models/user')

router.post('/signup', function(req, res, next) {
    user.addUser(req.body, function(user){
        res.json(user)
    })
})

router.post('/login', function(req, res, next) {
    console.log(req.body);
    user.getUser(req.body, function(user){
        res.json(user)
    })
})

router.get('/login', function(req, res, next) {
  res.render('login');
})

router.get('/', function(req, res, next) {
    user.getUsers(function(users){
        res.json(users);
    })
})

module.exports = router
