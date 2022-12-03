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

router.get('/',function(req,res) {
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
        console.log(a.slice(9))
        if(values.title==a.slice(9))
        {
          abc[0]=law[key]
          break;
        }
      }
    res.redirect('https://www.yepdesk.com/law');
    })


module.exports=router