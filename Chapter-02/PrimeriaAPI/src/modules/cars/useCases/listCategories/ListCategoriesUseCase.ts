import { Category } from "../../model/CategoryModel";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoryUseCase {

  constructor(private categoriesRepository: ICategoryRepository) { }

  execute(): Category[] {

    return this.categoriesRepository.list();

  }
}

export { ListCategoryUseCase }