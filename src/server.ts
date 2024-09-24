import express from "express";
import testRouter from "./routes/test";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

async function main() {
  const app = express();

  const PORT = 3000;

  app.use(express.json());

  // create graphQl server
  const gqlServer = new ApolloServer({
    typeDefs: `
    type Query{
    hello: String
    say(name: String): String
    }
    `,
    resolvers: {
        Query: {
          hello: () => `Hey there, I'm a graphQL server`,
          say: (_, {name}: {name: String}) => `Hey ${name}, How are you?`  
        }
    },
  });

  // start the gql server
  await gqlServer.start();

  app.use("/graphql", expressMiddleware(gqlServer));

  app.use("/api", testRouter);

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

main();
