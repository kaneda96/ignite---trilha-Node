import { createCourse } from "./routes";
import express from "express";

const app = express();

app.get("/", createCourse);

app.get("/teste", (request, response) => {
  response.json({ message: "HelloWorl!" });
});

app.listen(3000, () => console.log("server running on 3000!"));
