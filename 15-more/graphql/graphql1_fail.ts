import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";
import {
  gql,
  graphqlHttp,
  makeExecutableSchema,
} from "https://deno.land/x/deno_graphql/oak.ts";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const context = (context: Context) => ({
  request: context.request,
});

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = new Application();
const router = new Router();

router.post("/graphql", graphqlHttp({ schema, context }));

app.use(router.routes());

await app.listen({ port: 4000 });
