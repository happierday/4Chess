const express = require('express');
const app = express();
const handle = require('express-handlebars')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.engine('handlebars', handle({
  layoutsDir: './views/layout',
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

const game = require('./controller/game');
//const profile = require('./controller/profile');
app.use('/game',game);
//app.use('/profile',profile);

module.exports = app;
app.listen(8000);