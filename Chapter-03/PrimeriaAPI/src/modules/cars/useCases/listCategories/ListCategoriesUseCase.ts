import { Category } from "../../entities/CategoryModel";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoryUseCase {

  constructor(private categoriesRepository: ICategoryRepository) { }

  async execute(): Promise<Category[]> {

    return await this.categoriesRepository.list();

  }
}

export { ListCategoryUseCase }