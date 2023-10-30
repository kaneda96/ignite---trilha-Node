import { User } from "../entities/UserModel";

interface IUserDTO {
  name: string,
  email: string,
  password: string,
  driver_license: string;
}

interface IUserRepository {
  create({ name, email, password, driver_license }: IUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  turnAdmin(id: string): Promise<void>
}

export { IUserRepository, IUserDTO };