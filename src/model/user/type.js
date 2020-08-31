let {
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
} = require("graphql");

// Defines the type
module.exports = new GraphQLObjectType({
  name: "User",
  description: "A bacon",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});
