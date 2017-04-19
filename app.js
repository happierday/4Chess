const express = require('express');
const handle = require('express-handlebars');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

class room{
  constructor(counter) {
      this.roomID = counter;
      this.currentPlayer = 0;
      this.roomName = '';
  }
}
let socketID = new Map();
let totalPlayer = 0;
let roomList = [];
let counter = 0;
let tempRoom;
let hasRoom = false;

let totalGame = 0;
let exitGame = false;

io.on('connection', function(socket){
    //console.log(counter);
    if(!hasRoom && counter == totalGame) {
        roomList[counter] = new room(counter);
    }

    hasRoom = true;
    tempRoom = roomList[counter];
    ++totalPlayer;
    socketID.set(socket.id,counter);
    tempRoom.currentPlayer++;
    tempRoom.roomName = 'room' + tempRoom.roomID;
    socket.join(tempRoom.roomName);

    io.to(tempRoom.roomName).emit('room number', tempRoom);
    io.to(tempRoom.roomName).emit('start', false);

    if(tempRoom.currentPlayer == 2) {
        ++totalGame;
        //console.log(totalGame);
        hasRoom = false;
        io.to(tempRoom.roomName).emit('start',true);
        tempRoom.full = true;

        while(counter <totalGame && !exitGame) {
            counter++;
            //console.log(counter);
        }
        exitGame = false;
    }
    socket.on('disconnect', function(){
        --totalPlayer;
        if(socketID.get(socket.id) != counter){
            --totalGame;
        }
        counter = socketID.get(socket.id);
        console.log(counter);
        socketID.delete(socket.id);
        --roomList[counter].currentPlayer;
        io.to(roomList[counter].roomName).emit('room number',roomList[counter]);
        io.to(roomList[counter].roomName).emit('start',false);
        exitGame = true;
        io.emit('total player', totalPlayer);
    });
    io.emit('total player', totalPlayer);

    socket.on('update board', function(piece,myRoomName){
        io.to(myRoomName).emit('update board',piece);
    });
});

server.listen(8000,function(){
  console.log('listening on port 8000');
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.engine('handlebars', handle({
  layoutsDir: './views/layout',
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);


app.use(serveStatic(__dirname + '/object'));

const game = require('./controller/game');
//const profile = require('./controller/profile');
app.get('/',function(req,res){
  res.send('this is main page')
})

app.use('/game',game);

module.exports = app;
