import { Repository } from "typeorm";
import { IUserRepository } from "../IUserRepository";
import { PostgresDataSource } from "../../../../database/index";
import { User } from "../../entities/UserModel";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { deleteFile } from "../../../../utils/file";

class UserRepository implements IUserRepository {

  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = PostgresDataSource.getRepository(User)
  }
  async updateAvatar(id: string, avatarFile: string) {
    const user = await this.findById(id);
    
    if(user.avatar){
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }   
    user.avatar = avatarFile;
    await this.userRepository.update(user.id, {avatar: avatarFile});
  }
  async findById(id: string): Promise<User> {8
    const user = await this.userRepository.findOne({ where: { id: id } })
    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email: email } })
    return user;
  }

  async create({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
    const user = this.userRepository.create({ name, email, password, driver_license });
    await this.userRepository.save(user);
  }
  async turnAdmin(id: string): Promise<void> {
    await this.userRepository.update(id,{isAdmin: true});
  }
}

export { UserRepository }