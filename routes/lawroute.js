const express=require('express');
const router=express.Router();

//database importing
var eventdata=require('./eventlist.js')

//database storing
let aero=[]
aero=eventdata.mech

abc=[]

router.get('/law-eventpage1',function(req,res) {
    res.render("aero-eventpage1.html");
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