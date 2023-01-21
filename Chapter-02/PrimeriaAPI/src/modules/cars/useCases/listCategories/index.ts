import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

const categoryRepository = CategoryRepository.getInstance();
const createCategoryUseCase = new ListCategoryUseCase(categoryRepository);
const listCategoryController = new ListCategoryController(createCategoryUseCase)


export { listCategoryController }