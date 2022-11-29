var express=require('express')
var app = express();
const path = require('path');
const handlebars=require("express-handlebars");
const { K } = require('handlebars');

//route importing
const cseroute=require('./routes/cseroute')
const mechroute=require('./routes/mechroutes')
const civilroute=require('./routes/civilroute')



app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.engine('hbs',handlebars.engine({
  defaultLayout: 'main.hbs',
  layoutsDir :__dirname + '/views'
}));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/',function(req,res) {
    res.render("index.html");
    })

app.get('/home',function(req,res) {
    res.render("home.html");
  })



  app.get('/aero-eventpage1',function(req,res) {
    res.render("aero-eventpage1.html");
  })

  app.get('/ece-eventpage1',function(req,res) {
  res.render("ece-eventpage1.html");
  })

  app.get('/mba-eventpage1',function(req,res) {
    res.render("mba-eventpage1.html");
  })


    app.use(cseroute)
    app.use(mechroute)
    app.use(civilroute)
        


app.listen(8000);