const express=require('express');
const router=express.Router();

//database importing
var eventdata=require('./eventlist.js')

//database storing
let civil=[]
civil=eventdata.mech

abc=[]

router.get('/civil-eventpage1',function(req,res) {
    res.render("civil-eventpage1.html");
})

router.get('/Machinery-EXPO',function(req,res) {
    a=req.route.path;
    for(var [key,values] of Object.entries(civil))
      {
        console.log(a.slice(1))
        if(values.title==a.slice(1))
        {
          abc[0]=civil[key]
          break;
        }
      }
    res.render("eventdescript.hbs",{abc});
    })





module.exports=router