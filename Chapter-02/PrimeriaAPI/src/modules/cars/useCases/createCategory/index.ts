import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
export default (): CreateCategoryController => {
  const categoryRepository = new CategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

  const createCategoryController = new CreateCategoryController(createCategoryUseCase)


  return createCategoryController;

}