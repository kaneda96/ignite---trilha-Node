import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from "tsyringe";
import { Request, Response } from "express";




class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    try {
      await createCategoryUseCase.execute({ name, description });
      return response.status(201).send();
    } catch (error) {
      return response.status(500).send({ message: error.message });
    }
  }

}

export { CreateCategoryController }