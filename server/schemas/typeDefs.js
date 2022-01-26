const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    password: String!
    bio: String
    favorites: [Favorite]
}

type Favorite {
    _id: ID!
    title: String!
    releaseDate: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    favorites: [Favorite]
    user(username: String!): User
    favoriteByUser(username: String): [Favorite]
    favorite(favoriteId: ID!): Favorite
}

type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    removeUser(username: ID!, password: String!): Auth
    updateUser(username: ID!, password: String!): Auth
  }

`;

module.exports = typeDefs;



// User model from project two for reference

// {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     username: {
//       type: DataTypes.STRING
//     },
//     password: {
//       type: DataTypes.STRING
//     },
//     bio: {
//       type: DataTypes.STRING
//     },
//     favorites: {
//       type: DataTypes.STRING
//     }
//   },