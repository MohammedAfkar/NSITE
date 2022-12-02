const express=require('express');
const router=express.Router();

//database importing
var eventdata=require('./eventlist.js')

//database storing
let aero=[]
aero=eventdata.mech

abc=[]

router.get('/barch-eventpage1',function(req,res) {
    res.render("aero-eventpage1.html");
})



module.exports=router