const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLFloat,
} = require("graphql");
const type = require("./type");
const User = require("./user");

// Defines the mutations
module.exports = {
  addUser: {
    type,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: User.createEntry.bind(User),
  },
  updateUser: {
    type,
    args: {
      id: { type: GraphQLID },
      name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: User.updateEntry.bind(User),
  },
};
