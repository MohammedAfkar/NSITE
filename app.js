var express=require('express')
var app = express();
const path = require('path');
const handlebars=require("express-handlebars");
const { K } = require('handlebars');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.engine('hbs',handlebars.engine({
  defaultLayout: 'main.hbs',
  layoutsDir :__dirname + '/views'
}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'views')));

let events=[{title:"litricon",para:"Internet services and applications have become an inextricable part of daily lifeenabling communication and the management of personal information from anywhere",room:"201",fee1:"40",fee2:"60",coordinator1:"Afkar",coordinator1no:"1234567890",coordinator2:"mrudula",coordinator2no:"0987654321"},
{title:"oozelagoon",para:"Internet services and applications have become an inextricable part of daily lifeenabling communication and the management of personal information from anywhere",room:"221",fee1:"30",fee2:"70",coordinator1:"Afkar2",coordinator1no:"12345678",coordinator2:"mrudula2",coordinator2no:"09876541"},
{title:"piano",para:"Internet services and applications have become an inextricable part of daily lifeenabling communication and the management of personal information from anywhere",room:"221",fee1:"30",fee2:"70",coordinator1:"sunny2",coordinator1no:"12345678",coordinator2:"ramanan2",coordinator2no:"09876541"},
{title:"AutocadWorkshop",para:"Internet services and applications have become an inextricable part of daily lifeenabling communication and the management of personal information from anywhere",room:"221",fee1:"30",fee2:"70",coordinator1:"Affkk2",coordinator1no:"12345678",coordinator2:"sugu2",coordinator2no:"0987677541"}]
app.get('/',function(req,res) {
    res.render("index.html");
    })

app.get('/home',function(req,res) {
    res.render("home.html");
  })

  app.get('/cse-eventpage1',function(req,res) {
      res.render("cse-eventpage1.html");
  })
  app.get('/aero-eventpage1',function(req,res) {
    res.render("aero-eventpage1.html");
  })
  app.get('/mech-eventpage1',function(req,res) {
    res.render("mech-eventpage1.html");
  })
  app.get('/ece-eventpage1',function(req,res) {
  res.render("ece-eventpage1.html");
  })
  app.get('/civil-eventpage1',function(req,res) {
      res.render("civil-eventpage1.html");
  })
  app.get('/mba-eventpage1',function(req,res) {
    res.render("mba-eventpage1.html");
  })
  app.get('/cse-evyentpage1',function(req,res) {
  res.render("cse-eventpage1.html");
  })

    abc=[]
    app.get('/litricon',function(req,res) {
      a=req.route.path;
      for(var [key,values] of Object.entries(events))
        {
          console.log(a.slice(1))
          if(values.title==a.slice(1))
          {
            abc[0]=events[key]
            break;
          }
        }
      res.render("litricon.hbs",{abc});
      })

      app.get('/oozelagoon',function(req,res) {
        a=req.route.path;
        for(var [key,values] of Object.entries(events))
          {
            console.log(a.slice(1))
            if(values.title==a.slice(1))
            {
              abc[0]=events[key]
              break;
            }
          }
        res.render("litricon.hbs",{abc});
        })

        app.get('/piano',function(req,res) {
          a=req.route.path;
          for(var [key,values] of Object.entries(events))
            {
              console.log(a.slice(1))
              if(values.title==a.slice(1))
              {
                abc[0]=events[key]
                break;
              }
            }
          res.render("litricon.hbs",{abc});
          })

          
        app.get('/AutocadWorkshop',function(req,res) {
          a=req.route.path;
          for(var [key,values] of Object.entries(events))
            {
              console.log(a.slice(1))
              if(values.title==a.slice(1))
              {
                abc[0]=events[key]
                break;
              }
            }
          res.render("litricon.hbs",{abc});
          })

app.listen(8000);