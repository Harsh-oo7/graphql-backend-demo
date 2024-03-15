const User = require("../models/user.js");

const resolvers = {
  Query: {
    async users() {
      const users = await User.find();
      return users;
    },
    async user(parent, args) {
      const email = args.email;
      const user = await User.findOne({ email });
      return user;
    },
  },
  Mutation: {
    async createUser(parent, args) {
      let newUser = args.input;
      const userCreated = await User.create(newUser);
      return userCreated;
    },
  },
};

module.exports = { resolvers };
