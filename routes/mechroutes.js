const express=require('express');
const router=express.Router();
const path=require('path');

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

    router.get('/Mech-Corner',function(req,res) {
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

      router.get('/Lathe-Master',function(req,res) {
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
        router.get('/Design-Competition',function(req,res) {
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

          router.get('/Tech-Talk',function(req,res) {
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


            router.get('/Project-Expo',function(req,res) {
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

              router.get('/Bullet-Kick-Start-for-Girls',function(req,res) {
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

               
    router.get(/register/,function(req,res) {
      a=req.originalUrl
      for(var [key,values] of Object.entries(mech))
        {
          console.log(a.slice(9))
          if(values.title==a.slice(9))
          {
            abc[0]=mech[key]
            break;
          }
        }
      res.redirect('https://www.yepdesk.com/mechanical-engg');
      })



module.exports=router