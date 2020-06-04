const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  affirmation: {type: String, required: true},
  housePlants:
        [  {name: {type: String, required: true},
          chakra: {type: String, required: true},
          tradition: {type: String, required: true}}],

  gardenPlants:
        [  {name: {type: String, required: true},
        chakra: {type: String, required: true},
        tradition: {type: String, required: true}}]
});


const Affirmation = mongoose.model('affirmation', plantSchema)

module.exports = Affirmation
