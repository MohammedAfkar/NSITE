var express=require('express')
var app = express();
const path = require('path');
const handlebars=require("express-handlebars");
const { K } = require('handlebars');

//database importing
var eventdata=require('./eventlist.js')

//database storing
let cse=[]
cse=eventdata.cse

let mech=[]
mech=eventdata.mech

let civil=[]
civil=eventdata.civil


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

  //cse routes
  app.get('/HOLOGRAM,AR&VR',function(req,res) {
    a=req.route.path;
    for(var [key,values] of Object.entries(cse))
      {
        console.log(a.slice(1))
        if(values.title==a.slice(1))
        {
          abc[0]=cse[key]
          break;
        }
      }
    res.render("eventdescript.hbs",{abc});
    })

    app.get('/FLURO-LEAGUE',function(req,res) {
      a=req.route.path;
      for(var [key,values] of Object.entries(cse))
        {
          console.log(a.slice(1))
          if(values.title==a.slice(1))
          {
            abc[0]=cse[key]
            break;
          }
        }
      res.render("eventdescript.hbs",{abc});
      })

      app.get('/GAMING-ROOM',function(req,res) {
        a=req.route.path;
        for(var [key,values] of Object.entries(cse))
          {
            console.log(a.slice(1))
            if(values.title==a.slice(1))
            {
              abc[0]=cse[key]
              break;
            }
          }
        res.render("eventdescript.hbs",{abc});
        })

        app.get('/HORROR-HOUSE',function(req,res) {
          a=req.route.path;
          for(var [key,values] of Object.entries(cse))
            {
              console.log(a.slice(1))
              if(values.title==a.slice(1))
              {
                abc[0]=cse[key]
                break;
              }
            }
          res.render("eventdescript.hbs",{abc});
          })

          app.get('/THIMARPPU-DJ',function(req,res) {
            a=req.route.path;
            for(var [key,values] of Object.entries(cse))
              {
                console.log(a.slice(1))
                if(values.title==a.slice(1))
                {
                  abc[0]=cse[key]
                  break;
                }
              }
            res.render("eventdescript.hbs",{abc});
            })

      app.get('/AMAZE-COSMOS',function(req,res) {
        a=req.route.path;
        for(var [key,values] of Object.entries(cse))
          {
            console.log(a.slice(1))
            if(values.title==a.slice(1))
            {
              abc[0]=cse[key]
              break;
            }
          }
        res.render("eventdescript.hbs",{abc});
        })

        app.get('/SPIES-IN-DISGUISE',function(req,res) {
          a=req.route.path;
          for(var [key,values] of Object.entries(cse))
            {
              console.log(a.slice(1))
              if(values.title==a.slice(1))
              {
                abc[0]=cse[key]
                break;
              }
            }
          res.render("eventdescript.hbs",{abc});
          })
          
          
        //mech routes
        app.get('/Mecholution',function(req,res) {
            a=req.route.path;
            for(var [key,values] of Object.entries(mech))
              {
                console.log(a.slice(1))
                if(values.title==a.slice(1))
                {
                  abc[0]=mech[key]
                  break;
                }
              }
            res.render("eventdescript.hbs",{abc});
            })

        app.get('/Machinery-EXPO',function(req,res) {
            a=req.route.path;
            for(var [key,values] of Object.entries(mech))
              {
                console.log(a.slice(1))
                if(values.title==a.slice(1))
                {
                  abc[0]=mech[key]
                  break;
                }
              }
            res.render("eventdescript.hbs",{abc});
            })


app.listen(8000);