const Recipe = require("../models/recipe.js");

const resolvers = {
  Query: {
    // async recipes() {
    //   const recipes = await Recipe.find();
    //   return recipes;
    // },
    async recipes() {
      // const limit = args?.limit ?? 10
      // const offset = args?.offset ?? 0
      const recipes = await Recipe.find();
      // const totalCount = await Recipe.countDocuments()
      return recipes;
    },
    async recipe(parent, args) {
      const id = args.id;
      const recipe = await Recipe.findOne({ id });
      return recipe;
    },
  },
  Mutation: {
    async createRecipe(parent, args) {
      let newRecipe = args.input;
      newRecipe.id = Math.floor(Math.random() * (100000 - 50 + 1)) + 50;
      const userCreated = await Recipe.create(newRecipe);
      return userCreated;
    },
  },
};

module.exports = { resolvers };
