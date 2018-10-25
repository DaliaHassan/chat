var axios = require('axios');
var _ = require('underscore');
var user = require('../models/user');
require('dotenv').config()

const MOONSHOT_API = process.env.MOONSHOT_API;

module.exports = function (io) {
    var users = [];
    var conversations = [];

    io.on('connection', function (socket) {
        console.log('connected');
        socket.emit('ping');
        console.log('ping');
    })

    // io.on('connection', function(socket){
    //   console.log('connected');
    //     socket.on('ping', function(data) {
    //         console.log(data.msg);
    //     });
    //   socket.emit('ping', {msg: 'ping'});
    //   socket.on('talk', function(payload, fn){
    //     console.log(payload);
    //     const msg = 'did you say ' + payload.message + '?';
    //     fn({message: msg})
    //   })
    //   // socket.on('talk', function(payload){
    //   //   console.log(payload);
    //   //   const msg = 'did you say ' + payload.message + '?';
    //   //   socket.emit('talk', {message: msg })
    //   // })
    // })
    // io.sockets.on('connection', function( ) {
    // const access_token = socket.handshake.query.access_token;
    // axios.get(`${MOONSHOT_API}/user?access_token=${access_token}`)
    //     .then((response) => {
    //         console.log('doint ...');
    //         response.data.user.socket = socket.id;
    //         users.push(resp
    //            onse.data.user);
    //     }).catch((error) => console.log(error));
    //
    // socket.on('conversations', (data, fn) => {
    //     axios.get(`${MOONSHOT_API}/user/conversation-list?access_token=${access_token}`)
    //         .then((response) => {
    //             _.map(response.data.messages.items, (e) => {
    //               return e.online = _.find(users, (u) => u.id == e.sender_id) ? 1 : 0;
    //             });
    //             fn(response.data.messages);
    //         }).catch((error) => console.log(error));
    // });
    //
    // socket.on('conversation', (id, fn) => {
    //     axios.get(`${MOONSHOT_API}/user/conversation-list/${id}?access_token=${access_token}`)
    //         .then((response) => {
    //             fn(response.data.messages);
    //         }).catch((error) => console.log(error));
    // });
    //
    // socket.on('send', (data, fn) => {
    //     conversations.push({
    //         socket: socket.id,
    //         to: data.to,
    //         access_token: access_token,
    //         message: data.message
    //     });
    //     fn(data);
    //     let to = _.find(users, (e) => e.id == data.to);
    //     if (to){
    //         io.to(to.socket).emit('incoming', data);
    //     }
    //     // axios.post(
    //     //     `${MOONSHOT_API}/user/${data.to}/messages?access_token=${access_token}`,
    //     //     {body: data.message}
    //     // ).then((response) => {
    //     //     console.log(response.data);
    //     // }).catch((error) => console.log(error));
    // });

    // socket.on('test', function(data){
    //   console.log(data)
    //
    // })
    // socket.on('leave', function(data, cb){
    //     let messages = _.filter(conversations, c => c.socket == socket.id);
    //     cb(messages);
    // });
    //
    // socket.on('disconnect', function(){
    //     users = _.filter(users, u => u.socket !== socket.id);
    // })
    // });
}
