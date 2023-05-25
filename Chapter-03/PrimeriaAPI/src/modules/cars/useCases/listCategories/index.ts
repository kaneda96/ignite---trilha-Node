import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

export default () => {
  const categoryRepository = new CategoryRepository();
  const createCategoryUseCase = new ListCategoryUseCase(categoryRepository);
  const listCategoryController = new ListCategoryController(createCategoryUseCase)


  return listCategoryController

}