const express=require('express');
const router=express.Router();
const path=require('path');

//database importing
var eventdata=require('./eventlist.js')

//database storing
let law=[]
law=eventdata.law

abc=[]

router.get('/law-eventpage1',function(req,res) {
    res.render("law-eventpage1.html");
})

router.get('/law-eventpage2',function(req,res) {
  res.render("law-eventpage2.html");
})

router.get('/law-eventpage3',function(req,res) {
  res.render("law-eventpage3.html");
})

router.get('/THE-SOUVENIR',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/THE-QUIZ-SHOW-school',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/THE-QUIZ-SHOW-college',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/THE-WOLF-OF-WALL-STREET',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/BRAVE-HEART-school',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/BRAVE-HEART-college',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/KNIVES-OUT',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/HAMILTON1',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/ROGUE-TRADER',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/UNCHARTED',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/THE-MAD-MEN',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/MARGIN-CALL',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/THE-CREATIVE-BRAIN',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/PHOTOGRAPHY-CONTEST-entertainment',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/STAND-UP-COMEDY',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/SPOON-AND-CUP-CHALLENGE',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/INTELLECTUAL-GAME',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/LAVA-WALK',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/PENALTY-SHOOTOUT',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/PS4-GAME',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/SUMO-WRESTLING',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/BALLOON-SHOOTING',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/ARROW-THROW',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/RING-THROW',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/PUSH-UP-CHALLENGE',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/HANGING-CHALLENGE',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})


router.get('/ARM-WRESTLING',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/CUP-AND-PLATE-TOWER-CHALLENGE',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/BALLOON-CATERPILLAR',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})

router.get('/BALLOON-POPPING',function(req,res) {
  a=req.route.path;
  for(var [key,values] of Object.entries(law))
    {
      
      if(values.title==a.slice(1))
      {
        abc[0]=law[key]
        break;
      }
    }
  res.render("eventdescript.hbs",{abc});
})



router.get(/register/,function(req,res) {
  a=req.originalUrl
  for(var [key,values] of Object.entries(law))
    {
      console.log(a.slice(23))
      if(values.title==a.slice(3))
      {
        abc[0]=law[key]
        break;
      }
    }
    var z=abc[0].title.toLowerCase()
    res.redirect('https://www.yepdesk.com/'+z)
  })



module.exports=router