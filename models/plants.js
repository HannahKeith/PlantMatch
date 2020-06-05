const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  plantName: {type: String},
  image: {type: String},
  tradition: {type: String},
  category: {type: String},

});


const Post = mongoose.model('post', plantSchema)

module.exports = Post
