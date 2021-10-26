import express from "express";
import { graphqlHTTP } from "express-graphql";
import { connect } from "./database";
import Schema from "./schema";
const app = express();

connect()
  .then((res) => console.log(">>>Db connect"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: Schema,
    context: {
      messageId: "test",
    },
  })
);
app.listen(3000, () => console.log("Escuchando desde el port 3000"));
