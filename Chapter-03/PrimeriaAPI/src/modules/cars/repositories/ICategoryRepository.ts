import { Category } from "../entities/CategoryModel";

interface ICategoryDTO {
  name: string,
  description: string,
}

interface ICategoryRepository {
  findByName(name: string): Promise<Category>
  create({ name, description }: ICategoryDTO): Promise<void>
  list(): Promise<Category[]>
}

export { ICategoryRepository, ICategoryDTO };