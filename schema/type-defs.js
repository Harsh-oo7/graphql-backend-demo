const { gql } = require("apollo-server");

const typeDefs = gql`
  type Recipe {
    id: Int!
    name: String!
    ingredients: [String]
    instructions: [String]
    prepTimeMinutes: Int
    cookTimeMinutes: Int
    servings: Int 
    difficulty: String
    cuisine: String
    caloriesPerServing: Int
    tags: [String]
    userId: Int
    image: String
    rating: Float
    reviewCount: Int
    mealType: [String]
  }

  type RecipeList {
    recipes: [Recipe!]!
    totalCount: Int!
  }

  type Query {
    recipes : [Recipe!]!
    recipe(id: Int!): Recipe!
  }

  input CreateRecipeInput {
    name: String!
    prepTimeMinutes: Int
    cookTimeMinutes: Int
    servings: Int 
    difficulty: String
    cuisine: String
    caloriesPerServing: Int
    image: String
    rating: Float
    reviewCount: Int
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe!
  }
`;

module.exports = { typeDefs };
