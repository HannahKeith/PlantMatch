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

// middleware
// use the public folder
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

// routes
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/Love', (req, res) => {
  Posts.find({category: "Love"}, (error, lovePosts) => {
    res.render('showlove.ejs',
    {
      lovePosts: lovePosts
    }
  );
});
})

app.get('/protection', (req, res) => {
  res.render('showprotection.ejs')
})

app.get('/sleep', (req, res) => {
  res.render('showsleep.ejs')
})

app.get('/health', (req, res) => {
  res.render('showhealth.ejs')
})

app.get('/happiness', (req, res) => {
  Posts.find({})
  res.render('showhappiness.ejs')
})

  // Posts.get(Posts.find({category: "Love"}))






// Posts.create(loveSeedPosts, (err, seedPosts) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(seedPosts);
//       }
// })






app.listen(PORT, () => {
  console.log('Listening on port:', PORT)
})
