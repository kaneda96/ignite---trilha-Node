import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  // eslint-disable-next-line prettier/prettier
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;


    try {
      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.status(200).send(user);
    } catch (error) {
      return response.status(404).send({ error: error.message })
    }



  }
}

export { ShowUserProfileController };
