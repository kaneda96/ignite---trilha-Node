import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";
import { Request, Response } from "express";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    try {
      await createUserUseCase.execute({ name, email, password, driver_license });
      return response.status(201).send();
    } catch (error) {
      return response.status(500).send({ message: error.message });
    }
  }
}


export { CreateUserController }