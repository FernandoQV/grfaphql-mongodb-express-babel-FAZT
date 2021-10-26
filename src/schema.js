import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `

type Taks{
  _id:ID!
  title:String!
  desc:String!
  image:String
  calification:Int
  infoComplete:String
  aproved:String
}
type Query{
  hello:String
  greet(name:String!):String
  taks:[Taks]
  findTaks(id:Int!):String
  users:[User]
}
type User{
  _id:ID
  firstName:String!
  lastName:String!
  age:Int!
}
type Mutation{
  createTask(
   input:NewTaks
  ):Taks
  createUser(input:NewUser):User
}
input NewUser{
  firstName:String!
  lastName:String!
  age:Int!
}
input NewTaks{
  title:String!
  desc:String!
  calification:Int
}
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
