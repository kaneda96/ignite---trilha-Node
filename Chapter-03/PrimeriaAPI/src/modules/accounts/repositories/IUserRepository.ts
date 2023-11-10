import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/UserModel";

interface IUserRepository {
  create({ name, email, password, driver_license }: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  turnAdmin(id: string): Promise<void>
  updateAvatar(id: string, avatarFile: string): Promise<void>
}

export { IUserRepository };