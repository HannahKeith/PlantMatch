// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
require('dotenv').config()

// PORT
const PORT = process.env.PORT || 3333

// Database
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//models
const Posts = require('./models/plants.js')
const loveSeedPosts = require ('./models/seed.js')
const happySeedPosts = require ('./models/seed.js')
const protecSeedPosts = require ('./models/seed.js')
const healthSeedPosts = require ('./models/seed.js')

// middleware
// use the public folder
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

// routes
//new route
app.get('/new', (req, res) => {
   res.render('new.ejs')
})

//index route
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/', (req, res) => {
  Posts.create(req.body, (error, createdPost) => {
      res.redirect('/');
  });
});

//show love page
app.get('/Love', (req, res) => {
  Posts.find({category: "Love"}, (error, lovePosts) => {
    res.render('showlove.ejs',
    {
      lovePosts: lovePosts
    }
  );
});
})
//delete love route
app.delete('/Love/:id', (req, res) => {
  Posts.findByIdAndRemove( req.params.id,  (error, deletedPost) => {
    res.redirect('/Love');
  })
})
//edit love route
app.put('/Love/:id', (req, res) => {
  Posts.findByIdAndUpdate( req.params.id, req.body, {new: true}, (error, updatedPost) => {
    res.redirect('/Love');
  })
})

app.get('/Love/:id/edit', (req, res) => {
  Posts.findById(req.params.id, (error, lovePosts) => {
    res.render('editlove.ejs',
    {
      lovePosts: lovePosts
    }
  );
  })
})




//show protection page
app.get('/protection', (req, res) => {
  Posts.find({category: "Protection"}, (error, protecPosts) => {
    res.render('showprotection.ejs',
    {
      protecPosts: protecPosts
    }
  );
});
})

//edit protection route
app.put('/protection/:id', (req, res) => {
  Posts.findByIdAndUpdate( req.params.id, req.body, {new: true}, (error, updatedPost) => {
    res.redirect('/protection');
  })
})

app.get('/protection/:id/edit', (req, res) => {
  Posts.findById(req.params.id, (error, protPosts) => {
    res.render('editProtection.ejs',
    {
      protPosts: protPosts
    }
  );
  })
})



//show health page
app.get('/health', (req, res) => {
  Posts.find({category: "Health"}, (error, healthPosts) => {
    res.render('showhealth.ejs',
      {
        healthPosts: healthPosts
      }
  )
  })
})

//edit health Posts
app.put('/health/:id', (req, res) => {
  Posts.findByIdAndUpdate( req.params.id, req.body, {new: true}, (error, updatedPost) => {
    res.redirect('/health');
  })
})

app.get('/health/:id/edit', (req, res) => {
  Posts.findById(req.params.id, (error, healthPosts) => {
    res.render('edithealth.ejs',
    {
      healthPosts: healthPosts
    }
  );
  })
})



//show happiness page
app.get('/happiness', (req, res) => {
  Posts.find({category: "Happiness"}, (error, happyPosts) => {
    res.render('showhappiness.ejs',
    {
      happyPosts: happyPosts
    }
  );
});
})

//edit happiness Page
app.put('/happiness/:id', (req, res) => {
  Posts.findByIdAndUpdate( req.params.id, req.body, {new: true}, (error, updatedPost) => {
    res.redirect('/happiness');
  })
})

app.get('/happiness/:id/edit', (req, res) => {
  Posts.findById(req.params.id, (error, happyPosts) => {
    res.render('edithappiness.ejs',
    {
      happyPosts: happyPosts
    }
  );
  })
})






// Posts.create(happySeedPosts, (err, happyPosts) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(happyPosts);
//       }
// })

// Posts.create(protecSeedPosts, (err, protecPosts) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(protecPosts);
//       }
// })
// Posts.create(healthSeedPosts, (err, healthPosts) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(healthPosts);
//       }
// })





app.listen(PORT, () => {
  console.log('Listening on port:', PORT)
})
