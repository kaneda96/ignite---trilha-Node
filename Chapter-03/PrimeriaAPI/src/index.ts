
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"
import swagger from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";
import "./shared/container";
import { AppError } from "./Errors/AppError";

const app = express();

app.use(express.json());

app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile))

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).send({ message: err.message })
  }
  return response.status(500).json({status: 500, message: `Internal erver Error - ${err.message}` })
})

app.listen(3333, () => console.log("server running on 3333!"));
