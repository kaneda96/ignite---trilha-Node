import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

export default () => {
  const categoryRepository = new CategoriesRepository();
  const createCategoryUseCase = new ListCategoryUseCase(categoryRepository);
  const listCategoryController = new ListCategoryController()


  return listCategoryController

}