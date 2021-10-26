import User from "./models/User";
import { taks } from "./sample";
export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world";
    },
    greet: (root, args, ctx) => {
      console.log(args, ctx);
      return `Bienvenido ${args.name}`;
    },
    taks: () => {
      return taks;
    },
    users: async () => {
      return await User.find();
    },
    findTaks: (root, { id }) => {
      const tk = taks.find((ta) => {
        return ta._id === id;
      });
      return tk ? "Existe" : "Noexits";
    },
  },
  Mutation: {
    createTask: (root, { input }) => {
      console.log(input);
      const newTaks = { ...input, _id: taks.length + 1 };
      taks.push(newTaks);
      return newTaks;
    },
    createUser: async (root, { input }) => {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
  },
  Taks: {
    infoComplete: (root) => {
      return `${root._id} title is ${root.title}`;
    },
    aproved: ({ calification }) => {
      return calification > 10 ? "Si" : "No";
    },
  },
};
