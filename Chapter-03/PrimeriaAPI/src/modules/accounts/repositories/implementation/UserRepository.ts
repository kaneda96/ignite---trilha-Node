import { Repository } from "typeorm";
import { IUserDTO, IUserRepository } from "../IUserRepository";
import { PostgresDataSource } from "../../../../database/index";
import { User } from "../../entities/UserModel";




class UserRepository implements IUserRepository {

  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = PostgresDataSource.getRepository(User)
  }
  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: id } })
    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email: email } })
    return user;
  }

  async create({ name, email, password, driver_license }: IUserDTO): Promise<void> {
    const user = this.userRepository.create({ name, email, password, driver_license });
    await this.userRepository.save(user);
  }
  async turnAdmin(id: string): Promise<void> {
    await this.userRepository.update(id,{isAdmin: true});
  }


}

export { UserRepository }