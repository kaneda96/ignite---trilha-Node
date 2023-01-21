import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();



specificationRoutes.get("/", (request, response) => {

  return response.status(200).json();

});

specificationRoutes.post("/", (request, response) => {

  const { name, description } = request.body;

  createSpecificationController.handle(request, response)

  return response.status(201).send({ message: 'created' });
});






export { specificationRoutes }