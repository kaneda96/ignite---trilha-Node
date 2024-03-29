import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { Request, Response } from "express";

class CreateSpecificationController {

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);

    createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();

  }

}

export { CreateSpecificationController }