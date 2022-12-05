const express=require('express');
const router=express.Router();

//database importing
var eventdata=require('./eventlist.js')

//database storing
let ece=[]
ece=eventdata.ece

abc=[]

router.get('/ece-eventpage1',function(req,res) {
    res.render("ece-eventpage1.html");
})
router.get('/ece-eventpage2',function(req,res) {
    res.render("ece-eventpage2.html");
})

router.get('/ece-eventpage3',function(req,res) {
    res.render("ece-eventpage3.html");
})

router.get('/ece-eventpage4',function(req,res) {
    res.render("ece-eventpage4.html");
})


router.get('/DARK-ROOM',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/Microstrip-Antenna-Design',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/CIRCUIT-DEBUGGING',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/DIGITAL-POSTER-DESIGNING-COMPETITION',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/ELECTRONIC-PUZZLE',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/SOLDERING-COMPETITION',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/QUIZ',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/ARDUINO-CODING-COMPETITION',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/CREATIVE-PHOTOGRAPHY',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/VIRTUAL-DRIVING',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/TRACK-RACING',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/STACK-ATTACK',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/LANDING-PAD',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/BOWLING-ALLEY',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/HIT-THE-POINT',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/NUTSTACKER',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/COMBINATION-PUZZLE',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/PING-TAC-TOE',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/SUCK-UP-THE-SKITTLES',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/SUM-UP-TO-30',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/WALKER-BOTTLE',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/DART',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/RUBENS-TUBE',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/EVOLUTION-OF-ELECTRONICS',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/MINI-METRO',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/SATELLITE-BUILDING',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/ARDUINO',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/E-WASTE-MANAGEMENT',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/COMMUNICATION-SYSTEM',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/SATELLITE-COMMUNICATION',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/FM-Radio',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/CryptoMaster',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(ece))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=ece[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})




router.get(/register/,function(req,res) {
  a=req.originalUrl
  for(var [key,values] of Object.entries(ece))
    {
      console.log(a.slice(23))
      if(values.title==a.slice(3))
      {
        abc[0]=ece[key]
        break;
      }
    }
    var z=abc[0].title.toLowerCase()
    res.redirect('https://www.yepdesk.com/'+z)
  })

module.exports=router