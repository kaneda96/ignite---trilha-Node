import { inject, injectable } from "tsyringe"
import bcrypt from "bcrypt";
import { IUserRepository } from "../repositories/IUserRepository"
import { AppError } from "../../../Errors/AppError";

interface IRequest {
  name: string;
  email: string;
  password: string;
  driver_license: string;
}


@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ name, email, password, driver_license }: IRequest): Promise<void> {

    const emailAlreadyExists = await this.userRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new AppError('email already exists!', 409);
    }

    const passwordHash = await bcrypt.hash(password, 8);

    return this.userRepository.create({ name, email: email, password: passwordHash, driver_license });
  }
}

export { CreateUserUseCase }