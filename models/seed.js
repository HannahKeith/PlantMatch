const affirmationPlants = new mongoose.Schema({
  affirmation: {type: String, required: true},
  housePlants:
        [  {  name: {type: String, required: true},
              chakra: {type: String, required: true},
              img: {type: String, required: true},
              tradition: {type: String, required: true}
            },

            {  name: {type: String, required: true},
               chakra: {type: String, required: true},
               img: {type: String, required: true},
               tradition: {type: String, required: true}
            },

            {  name: {type: String, required: true},
               chakra: {type: String, required: true},
               img: {type: String, required: true},
               tradition: {type: String, required: true}
            },

        ],

  gardenPlants:
        [
          { name: {type: String, required: true},
            chakra: {type: String, required: true},
            img: {type: String, required: true},
            tradition: {type: String, required: true}
          },
          { name: {type: String, required: true},
            chakra: {type: String, required: true},
            img: {type: String, required: true},
            tradition: {type: String, required: true}
          },
          { name: {type: String, required: true},
            chakra: {type: String, required: true},
            img: {type: String, required: true},
            tradition: {type: String, required: true}
          },
        ]
});
