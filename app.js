const express = require('express');
const handle = require('express-handlebars');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function(socket){
  socket.on('update board', function(piece){
    io.emit('update board',piece);
  });
});

server.listen(8000,function(){
  console.log('listening on');
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
