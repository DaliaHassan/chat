var mongoose = require('mongoose')
var bcrypt   = require('bcrypt-nodejs')

var schema = mongoose.Schema({
    username: String
    // password: String
})

const User = mongoose.model('user', schema)

module.exports = {
    getUser: function(data, cb){
        User.findOne(data, function(err, user){
            cb(user)
        })
    },
    getUsers: function(cb) {
        User.find({}, function(err, users) {
            cb(users)
        })
    },
    addUser: function(data, cb) {
        User.create({
            username: data.username
        }, function(err, user) {
            cb(user)
        })
    },
    getCount: function(cb){
        User.count({}, function( err, count){
            cb(count)
        })
    },
    hash: function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    }
}
