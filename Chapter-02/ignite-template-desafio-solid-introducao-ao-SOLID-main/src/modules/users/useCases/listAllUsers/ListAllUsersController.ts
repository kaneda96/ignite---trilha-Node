import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { id } = request.body
    try {
      const users = this.listAllUsersUseCase.execute({ user_id: id });
      return response.status(200).send(users.map((user => user)));
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }

  }
}

export { ListAllUsersController };
