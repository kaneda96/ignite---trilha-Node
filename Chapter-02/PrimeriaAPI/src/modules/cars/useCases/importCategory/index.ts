import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

//const categoryRepository = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(importCategoryUseCase);


export { importCategoryController }