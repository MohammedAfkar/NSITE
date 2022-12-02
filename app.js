var express=require('express')
var app = express();
const path = require('path');
const handlebars=require("express-handlebars");
const { K } = require('handlebars');

//route importing
const cseroute=require('./routes/cseroute')
const mechroute=require('./routes/mechroutes')
const civilroute=require('./routes/civilroute')
const aeroroute=require('./routes/aeroroute')
const eceroute=require('./routes/eceroute')
const mbaroute=require('./routes/mbaroute')
const lawroute=require('./routes/lawroute')





app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.engine('hbs',handlebars.engine({
  defaultLayout: 'main.hbs',
  layoutsDir :__dirname + '/views'
}));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/cse-eventpage',express.static(path.join(__dirname, 'public')));
app.use('/aero-eventpage',express.static(path.join(__dirname, 'public')));
app.use('/mech-eventpage',express.static(path.join(__dirname, 'public')));
app.use('/ece-eventpage',express.static(path.join(__dirname, 'public')));
app.use('/civil-eventpage',express.static(path.join(__dirname, 'public')));
app.use('/mba-eventpage',express.static(path.join(__dirname, 'public')));
app.use('/law-eventpage',express.static(path.join(__dirname, 'public')));





app.get('/',function(req,res) {
    res.render("index.html");
    })

app.get('/home',function(req,res) {
    res.render("home.html");
  })




    app.use('/cse-eventpage',cseroute)
    app.use('/aero-eventpage',aeroroute)
    app.use('/mech-eventpage',mechroute)
    app.use('/ece-eventpage',eceroute)
    app.use('/law-eventpage',lawroute)
    app.use('/mba-eventpage',mbaroute)
    app.use('/civil-eventpage',civilroute)
        


app.listen(8000);