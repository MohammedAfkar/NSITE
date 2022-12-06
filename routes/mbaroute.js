const express=require('express');
const router=express.Router();

//database importing
var eventdata=require('./eventlist.js')

//database storing
let mba=[]
mba=eventdata.mba

abc=[]

router.get('/mba-eventpage1',function(req,res) {
    res.render("mba-eventpage1.html");
})

//mba inside routes
router.get('/WISDOM-MAN-CORPORATE-MANAGER',function(req,res) {
    a=req.route.path;
    for(var [key,values] of Object.entries(mba))
      {
        
        if(values.title==a.slice(1))
        {
          abc[0]=mba[key]
          break;
        }
      }
    res.render("eventdescript.hbs",{abc});
    })

    router.get('/DRAGON-SHOE',function(req,res) {
        a=req.route.path;
        for(var [key,values] of Object.entries(mba))
          {
            
            if(values.title==a.slice(1))
            {
              abc[0]=mba[key]
              break;
            }
          }
        res.render("eventdescript.hbs",{abc});
   })
   router.get('/BOOM-BANG',function(req,res) {
       a=req.route.path;
       for(var [key,values] of Object.entries(mba))
         {
           
           if(values.title==a.slice(1))
           {
             abc[0]=mba[key]
             break;
           }
         }
       res.render("eventdescript.hbs",{abc});
       })
       router.get('/FOOTBALL-FEVER1',function(req,res) {
           a=req.route.path;
           for(var [key,values] of Object.entries(mba))
             {
               
               if(values.title==a.slice(1))
               {
                      abc[0]=mba[key]
                      break;
                    }
                  }
                res.render("eventdescript.hbs",{abc});
                })

                router.get('/PARALLEL-WORLD-AR-VR',function(req,res) {
                  a=req.route.path;
                  for(var [key,values] of Object.entries(mba))
                    {
                      
                      if(values.title==a.slice(1))
                      {
                             abc[0]=mba[key]
                             break;
                           }
                         }
                       res.render("eventdescript.hbs",{abc});
                       })

     
     router.get('/STEP-UP-spot-choreo',function(req,res) {
         a=req.route.path;
         for(var [key,values] of Object.entries(mba))
           {
             
             if(values.title==a.slice(1))
             {
               abc[0]=mba[key]
               break;
             }
           }
         res.render("eventdescript.hbs",{abc});
         })
         router.get('/MIND-TWISTER',function(req,res) {
       a=req.route.path;
       for(var [key,values] of Object.entries(mba))
         {
           
           if(values.title==a.slice(1))
           {
             abc[0]=mba[key]
             break;
           }
         }
       res.render("eventdescript.hbs",{abc});
       })

       
       router.get(/register/,function(req,res) {
        a=req.originalUrl
        for(var [key,values] of Object.entries(mba))
          {
            console.log(a.slice(23))
            if(values.title==a.slice(3))
            {
              abc[0]=mba[key]
              break;
            }
          }
          var z=abc[0].title.toLowerCase()
          res.redirect('https://www.yepdesk.com/'+z)
        })


module.exports=router