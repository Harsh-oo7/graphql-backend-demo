const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },  
    name: {
      type: String,
    },
    ingredients: {
        type: Array
    },
    instructions: {
        type: Array,
    },
    prepTimeMinutes: {
      type: Number,
    },
    cookTimeMinutes: {
      type: Number,
    },
    servings: {
      type: Number,
    },
    difficulty: {
      type: String,
    },
    cuisine: {
      type: String,
    },
    caloriesPerServing: {
      type: Number,
    },
    tags: {
      type: Array,
    },
    userId: {
      type: Number,
    },
    image: {
      type: String,
    },
    rating: {
      type: Number,
    },
    reviewCount: {
      type: Number,
    },
    mealType: {
      type: Array,
    }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

const Recipe = mongoose.model(
  'recipe',
  RecipeSchema,
)

module.exports = Recipe
