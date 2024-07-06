import { App } from "./app";

try {
  const app = new App();
  app.setApolloServer();
} catch (error) {
  console.log(error);
  throw error;
}

// import express, { Request, Response } from 'express';
//
// const app = express();
// const port = 3000;
//
// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, TypeScript with Express!');
// });
//
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
//
//
// import { ApolloServer } from 'apollo-server-express';
// import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
// import express from 'express';
// import http from 'http';
//
// async function startApolloServer(typeDefs, resolvers) {
//     const app = express();
//     const httpServer = http.createServer(app);
//     const server = new ApolloServer({
//         typeDefs,
//         resolvers,
//         csrfPrevention: true,
//         cache: 'bounded',
//         plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), ApolloServerPluginLandingPageLocalDefault({ embed: true })],
//     });
//     await server.start();
//     server.applyMiddleware({ app });
//     await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
// }
//
// await startApolloServer()
