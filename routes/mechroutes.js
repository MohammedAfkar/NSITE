const express=require('express');
const router=express.Router();

//database importing
var eventdata=require('./eventlist.js')

//database storing
let mech=[]
mech=eventdata.mech

abc=[]

router.get('/mech-eventpage1',function(req,res) {
    res.render("mech-eventpage1.html");
  })

router.get('/Mecholution',function(req,res) {
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

router.get('/Machinery-EXPO',function(req,res) {
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




module.exports=router