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

router.get('/litricon',function(req,res) {
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


      router.get('/Piano',function(req,res) {
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

        router.get('/Autocad-Workshop',function(req,res) {
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

          router.get('/CIVIL-SPECTACLE',function(req,res) {
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




    router.get(/register/,function(req,res) {
      res.redirect('https://www.yepdesk.com/civil-engg');
      })



module.exports=router