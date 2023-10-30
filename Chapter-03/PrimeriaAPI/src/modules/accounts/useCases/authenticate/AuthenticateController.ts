import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUseCase";
import { Request, Response } from "express";



class AuthenticateController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    try {
      const token = await authenticateUserUseCase.execute({ email, password });
      return response.status(200).send(token);
    } catch (error) {
      return response.status(500).send(error);
    }
  }

}

export { AuthenticateController }