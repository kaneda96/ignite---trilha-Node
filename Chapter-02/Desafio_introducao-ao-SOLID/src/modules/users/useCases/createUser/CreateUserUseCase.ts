import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {

  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) {

  }

  execute({ email, name }: IRequest): User {

    const emailTakenUser = this.usersRepository.findByEmail(email);
    if (emailTakenUser) {
      throw new Error('email already taken!');
    }
    const user = this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
