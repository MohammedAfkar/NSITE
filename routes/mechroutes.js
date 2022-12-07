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
        router.get('/Design-Enthusiast',function(req,res) {
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


            router.get('/Project-Expo-mech',function(req,res) {
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

                router.get('/wake-the-kid-inside-you',function(req,res) {
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

                  router.get('/basket-ball',function(req,res) {
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

                    router.get('/balloon-pyramid',function(req,res) {
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

                      router.get('/bowling-competition',function(req,res) {
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

                        router.get('/wire-loop-game',function(req,res) {
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

                          router.get('/removethe-ring',function(req,res) {
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

                            router.get('/guess-the-name',function(req,res) {
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

                              router.get('/water-balloon-competition',function(req,res) {
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

                                router.get('/selfie-point',function(req,res) {
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

                                  router.get('/cycle-stunt2',function(req,res) {
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

                                    router.get('/roll-and-kick-challenge',function(req,res) {
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
                      console.log(a.slice(23))
                      if(values.title==a.slice(3))
                      {
                        abc[0]=mech[key]
                        break;
                      }
                    }
                    var z=abc[0].title.toLowerCase()
                    res.redirect('https://www.yepdesk.com/'+z)
                  })
  


module.exports=router