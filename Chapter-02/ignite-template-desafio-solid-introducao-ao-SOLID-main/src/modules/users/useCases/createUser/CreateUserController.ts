import { Response, Request } from 'express'

import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {    
    return response.json({request})
  }
}

export { CreateUserController }