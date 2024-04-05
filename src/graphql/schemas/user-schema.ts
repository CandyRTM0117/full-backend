import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String
    surname: String
    email: String!
    password: String
    image: String
    country: String!
  }

  input UserRegisterInput {
    name: String!
    surname: String!
    email: String!
    password: String!
    country: String!
  }

  type Query {
    getUsers: [User]!
    getUser(id: ID!): User
  }

  type Mutation {
    registerUser(input: UserRegisterInput!): User!
  }
`;