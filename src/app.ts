import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import bodyParser from "body-parser";

export class App {
  public app;

  constructor() {
    this.app = express();
    this.setMiddlewares();
    // this.setErrorHandler();
    this.setNotFoundHandler();
  }

  private setMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  // private setErrorHandler(): void {
  //     this.app.use(errorMiddleware);
  // }

  private setNotFoundHandler(): void {
    this.app.use((req, res) => {
      res.status(404).json({ message: "Not found", status: 404 });
    });
  }

  public async setApolloServer(typeDefs: any, resolvers: any) {
    const httpServer = http.createServer(this.app);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: true,
      cache: "bounded",
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app: this.app });
    await new Promise<void>((resolve) =>
      httpServer.listen({ port: 4000 }, resolve),
    );
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    );
  }
}
