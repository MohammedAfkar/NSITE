const express=require('express');
const router=express.Router();

//database importing
var eventdata=require('./eventlist.js')

//database storing
let civil=[]
civil=eventdata.civil

abc=[]

router.get('/civil-eventpage1',function(req,res) {
    res.render("civil-eventpage1.html");
})


    router.get('/OOZE-LAGOON',function(req,res) {
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


      router.get('/Music-floor-jcet',function(req,res) {
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

            router.get('/FAST-TRACK',function(req,res) {
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

              router.get('/NOSTALGIC-SHOP',function(req,res) {
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

                router.get('/3s-FOOTBALL',function(req,res) {
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

                  router.get('/WOODEN-CASTLE',function(req,res) {
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

                    router.get('/Face-painting3',function(req,res) {
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

                      router.get('/metronome',function(req,res) {
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


                    router.get(/register/,function(req,res) {
                      a=req.originalUrl
                      for(var [key,values] of Object.entries(civil))
                        {
                          console.log(a.slice(23))
                          if(values.title==a.slice(3))
                          {
                            abc[0]=civil[key]
                            break;
                          }
                        }
                        var z=abc[0].title.toLowerCase()
                        res.redirect('https://www.yepdesk.com/'+z)
                      })
      

module.exports=router