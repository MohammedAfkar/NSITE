const express=require('express');
const router=express.Router();

//database importing
var eventdata=require('./eventlist.js')

//database storing
let aero=[]
aero=eventdata.aero

abc=[]

router.get('/aero-eventpage1',function(req,res) {
    res.render("aero-eventpage1.html");
})

router.get('/aero-eventpage2',function(req,res) {
    res.render("aero-eventpage2.html");
})

//Aero inside routes

    router.get('/FLIGHT-SIMULATOR',function(req,res) {
      a=req.route.path;
      for(var [key,values] of Object.entries(aero))
        {
          if(values.title==a.slice(1))
          {
            abc[0]=aero[key]
            break;
          }
        }
      res.render("eventdescript.hbs",{abc});
      })

      router.get('/GLIDER-MODELLING',function(req,res) {
        a=req.route.path;
        for(var [key,values] of Object.entries(aero))
          {
            
            if(values.title==a.slice(1))
            {
              abc[0]=aero[key]
              break;
            }
          }
        res.render("eventdescript.hbs",{abc});
        })


          router.get('/ILLUSION-HALL',function(req,res) {
            a=req.route.path;
            for(var [key,values] of Object.entries(aero))
              {
                
                if(values.title==a.slice(1))
                {
                  abc[0]=aero[key]
                  break;
                }
              }
            res.render("eventdescript.hbs",{abc});
            })


            router.get('/JET-ENGINE-PROTOTYPE',function(req,res) {
              a=req.route.path;
              for(var [key,values] of Object.entries(aero))
                {
                  
                  if(values.title==a.slice(1))
                  {
                    abc[0]=aero[key]
                    break;
                  }
                }
              res.render("eventdescript.hbs",{abc});
              })


              router.get('/BRAIN-CYCLE',function(req,res) {
                a=req.route.path;
                for(var [key,values] of Object.entries(aero))
                  {
                    
                    if(values.title==a.slice(1))
                    {
                      abc[0]=aero[key]
                      break;
                    }
                  }
                res.render("eventdescript.hbs",{abc});
                })


                router.get('/BATTLE-ROYAL',function(req,res) {
                  a=req.route.path;
                  for(var [key,values] of Object.entries(aero))
                    {
                      
                      if(values.title==a.slice(1))
                      {
                        abc[0]=aero[key]
                        break;
                      }
                    }
                  res.render("eventdescript.hbs",{abc});
                  })


                  router.get('/LASER-MAZE',function(req,res) {
                    a=req.route.path;
                    for(var [key,values] of Object.entries(aero))
                      {
                        
                        if(values.title==a.slice(1))
                        {
                          abc[0]=aero[key]
                          break;
                        }
                      }
                    res.render("eventdescript.hbs",{abc});
                    })

                    router.get('/MAGNIX',function(req,res) {
                      a=req.route.path;
                      for(var [key,values] of Object.entries(aero))
                        {
                          
                          if(values.title==a.slice(1))
                          {
                            abc[0]=aero[key]
                            break;
                          }
                        }
                      res.render("eventdescript.hbs",{abc});
                      })
  

                    router.get('/POSTER-PRESENTATION',function(req,res) {
                      a=req.route.path;
                      for(var [key,values] of Object.entries(aero))
                        {
                          
                          if(values.title==a.slice(1))
                          {
                            abc[0]=aero[key]
                            break;
                          }
                        }
                      res.render("eventdescript.hbs",{abc});
                      })

                      router.get('/PHOTOGRAPHY-COMPETITION',function(req,res) {
                        a=req.route.path;
                        for(var [key,values] of Object.entries(aero))
                          {
                            
                            if(values.title==a.slice(1))
                            {
                              abc[0]=aero[key]
                              break;
                            }
                          }
                        res.render("eventdescript.hbs",{abc});
                        })


                        router.get('/REVERSE-CAR-PARKING',function(req,res) {
                          a=req.route.path;
                          for(var [key,values] of Object.entries(aero))
                            {
                              
                              if(values.title==a.slice(1))
                              {
                                abc[0]=aero[key]
                                break;
                              }
                            }
                          res.render("eventdescript.hbs",{abc});
                          })


                          router.get('/DODGE-BALL',function(req,res) {
                            a=req.route.path;
                            for(var [key,values] of Object.entries(aero))
                              {
                                
                                if(values.title==a.slice(1))
                                {
                                  abc[0]=aero[key]
                                  break;
                                }
                              }
                            res.render("eventdescript.hbs",{abc});
                            })

                            router.get('/KICK-START',function(req,res) {
                              a=req.route.path;
                              for(var [key,values] of Object.entries(aero))
                                {
                                  
                                  if(values.title==a.slice(1))
                                  {
                                    abc[0]=aero[key]
                                    break;
                                  }
                                }
                              res.render("eventdescript.hbs",{abc});
                              })

                              router.get('/SLOW-CYCLE',function(req,res) {
                                a=req.route.path;
                                for(var [key,values] of Object.entries(aero))
                                  {
                                    
                                    if(values.title==a.slice(1))
                                    {
                                      abc[0]=aero[key]
                                      break;
                                    }
                                  }
                                res.render("eventdescript.hbs",{abc});
                                })

                                router.get('/E-Football-Tournament',function(req,res) {
                                  a=req.route.path;
                                  for(var [key,values] of Object.entries(aero))
                                    {
                                      
                                      if(values.title==a.slice(1))
                                      {
                                        abc[0]=aero[key]
                                        break;
                                      }
                                    }
                                  res.render("eventdescript.hbs",{abc});
                                  })

    router.get(/register/,function(req,res) {
      res.redirect('https://www.yepdesk.com/aeronautical-engg');
      })


module.exports=router