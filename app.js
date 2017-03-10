const express = require('express');
const app = express();
const handle = require('express-handlebars');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

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
//app.use('/profile',profile);

module.exports = app;
app.listen(8000);