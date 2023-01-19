import { Category } from "../model/CategoryModel";

interface ICategoryDTO {
  name: string,
  description: string,
}

interface ICategoryRepository {
  findByName(name: string): Category
  create({ name, description }: ICategoryDTO): void
  list(): Category[]
}

export { ICategoryRepository, ICategoryDTO };