import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { IUserRepository } from "../../repositories/IUserRepository";
import { AppError } from "../../../../errors/AppErrors";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}


@injectable()
class AuthenticateUserUseCase {

  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository) {
  }


  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user)
      throw new AppError("User password or email is incorret!", 401)

    const isPasswordCorrect = bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      throw new AppError("User password or email is incorret!", 401)

    const token = jwt.sign({}, "testeGoku", {
      subject: user.id,
      expiresIn: "1d"
    })

    return { user, token };

  }

}

export { AuthenticateUserUseCase }