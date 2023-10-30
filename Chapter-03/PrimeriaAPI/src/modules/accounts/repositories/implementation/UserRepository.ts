import { Repository } from "typeorm";
import { IUserDTO, IUserRepository } from "../IUserRepository";
import { PostgresDataSource } from "../../../../database/index";
import { User } from "../../entities/UserModel";




class UserRepository implements IUserRepository {

  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = PostgresDataSource.getRepository(User)
  }
  findById(id: string): Promise<User> {
    const user = this.userRepository.findOne({ where: { id: id } })
    return user;
  }
  findByEmail(email: string): Promise<User> {
    const user = this.userRepository.findOne({ where: { email: email } })
    return user;
  }

  async create({ name, email, password, driver_license }: IUserDTO): Promise<void> {
    const user = this.userRepository.create({ name, email, password, driver_license });
    await this.userRepository.save(user);
  }
  async turnAdmin(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }


}

export { UserRepository }