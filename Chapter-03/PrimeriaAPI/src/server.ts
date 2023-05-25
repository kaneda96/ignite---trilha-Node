
import express from "express";
import swagger from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { PostgresDataSource } from "./database/index"

PostgresDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app = express();

app.use(express.json());

app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile))

app.use(router);

app.listen(3333, () => console.log("server running on 3333!"));
