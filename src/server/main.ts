import { createServer } from "@graphql-yoga/node";
import express from "express";
import "express-async-errors";
import helmet from "helmet";
import path from "path";
import context from "./context.js";
import errorHandler from "./errorHandler.js";
import schema from "./schema.js";
import uiRouter from "./ui.js";
import plugins from "./yogaPlugins.js";

const isProd = process.env.NODE_ENV === "production";

const getApp = async () => {
  const app = express();

  if (isProd) {
    app.use(
      helmet({
        referrerPolicy: { policy: "origin" },
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false,
      })
    );
  }

  if (isProd) {
    app.use(express.static(path.resolve("dist/client/")));
  }

  const graphQLServer = createServer({ schema, context, plugins });

  app.use("/graphql", graphQLServer);

  app.use(uiRouter);

  app.use(errorHandler);

  return app;
};

export default getApp;
