const express=require('express');
const router=express.Router();

//database importing
var eventdata=require('./eventlist.js')

//database storing
let cse=[]
cse=eventdata.cse

abc=[]
// cse route from home
router.get('/cse-eventpage1',function(req,res) {
    res.render("cse-eventpage1.html");
})

router.get('/cse-eventpage2',function(req,res) {
  res.render("cse-eventpage2.html");
})

router.get('/cse-eventpage3',function(req,res) {
res.render("cse-eventpage3.html");
})

router.get('/cse-eventpage4',function(req,res) {
res.render("cse-eventpage4.html");
})

  //cse inside routes
  router.get('/HOLOGRAM,AR&VR',function(req,res) {
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

    router.get('/FLURO-LEAGUE',function(req,res) {
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

      router.get('/GAMING-ROOM',function(req,res) {
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

        router.get('/HORROR-HOUSE',function(req,res) {
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

          router.get('/THIMARPPU-DJ',function(req,res) {
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

      router.get('/AMAZE-COSMOS',function(req,res) {
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

        router.get('/SPIES-IN-DISGUISE',function(req,res) {
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

          router.get('/DEBUG',function(req,res) {
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
          
            router.get('/BLIND-CODING',function(req,res) {
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

              router.get('/CRACK-THE-CODE',function(req,res) {
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
                
                router.get('/FAST-FINGERS',function(req,res) {
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
     
                  router.get('/CRYSTAL-CANVAS',function(req,res) {
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
     
                   router.get('/SPIN-THE-WEB',function(req,res) {
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
     
           router.get('/OS-MODEL-EXHIBITION',function(req,res) {
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
     
           router.get('/WORLD-OF-HARRY-POTTER',function(req,res) {
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
     
           router.get('/EDUTHO-PIDICHO',function(req,res) {
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
     
           router.get('/DARTS-SHOOTOUT',function(req,res) {
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
     
           router.get('/DARTS-SHOOTOUT',function(req,res) {
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
     
             router.get('/PERFECT-RUBIK’S-CUBE',function(req,res) {
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
     
               router.get('/HARDWARE-ASSEMBLY',function(req,res) {
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
     
               router.get('/MINUTE-TO-WIN-IT',function(req,res) {
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
     
               router.get('/FUN-TUSSLE',function(req,res) {
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
     
               router.get('/MAGIC-OF-FINGERS',function(req,res) {
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
     
               router.get('/PIC-POW',function(req,res) {
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
     
               router.get('/SUIII',function(req,res) {
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
     
               router.get('/PENALTY-SHOOTOUT',function(req,res) {
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
     
               router.get('/QUIZZIE-BUZZIE',function(req,res) {
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
     
               router.get('/ETHICAL-HACKING-WORKSHOP',function(req,res) {
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


module.exports=router