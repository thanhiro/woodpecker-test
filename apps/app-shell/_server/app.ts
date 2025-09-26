import "react-router";
import { createRequestHandler } from "@react-router/express";
import express from "express";

export const app = express();

app.use(
  createRequestHandler({
    build: () =>
      // @ts-ignore
      import("virtual:react-router/server-build"),
  }),
);