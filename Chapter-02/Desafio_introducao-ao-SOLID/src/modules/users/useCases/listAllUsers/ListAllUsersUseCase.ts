import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error('not Found');
    }

    const isAdmin = user.admin;

    if (!isAdmin) {
      throw new Error('User is not admin');
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
