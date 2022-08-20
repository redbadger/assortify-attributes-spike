import { createServer } from "@graphql-yoga/node";
import compression from "compression";
import express from "express";
import path from "path";
import schema from "./schema.js";
import uiRouter from "./ui.js";

const isProd = process.env.NODE_ENV === "production";

const getApp = async () => {
  const app = express();

  app.use(compression());

  if (isProd) {
    app.use(express.static(path.resolve("dist/client/")));
  }

  const graphQLServer = createServer({ schema });

  app.use("/graphql", graphQLServer);

  app.use(uiRouter);

  return app;
};

export default getApp;
