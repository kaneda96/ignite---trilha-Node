import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementation/UserRepository";
import { AppError } from "../Errors/AppError";


export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader)
    throw new AppError('missing authentication token!', 401)

  const [, token] = authHeader.split(" ")

  try {
    const { sub: userId } = verify(token, "testeGoku")

    const userRepository = new UserRepository();

    const authUser = await userRepository.findById(userId.toString());

    if (!authUser)
      throw new AppError("invalid token!", 401);

    next();
  } catch (error) {
    throw new AppError("invalid token!", 401);
  }

}