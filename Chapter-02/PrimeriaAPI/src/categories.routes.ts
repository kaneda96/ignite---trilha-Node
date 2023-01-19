import { request, response, Router } from "express";
import { v4 as uuidV4 } from 'uuid';
import { Category } from "./model/CategoryModel";
import { CategoryRepository } from "./repositories/CategoriesRepository";
import { CreateCategoryService } from "./services/CreateCategoryServices";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();
const categoryService = new CreateCategoryService(categoryRepository);

const categories: Category[] = [];

categoriesRoutes.get("/categorias", (request, response) => {

  return response.status(200).json(categoryRepository.list());

});

categoriesRoutes.post("/categorias", (request, response) => {

  const { name, description } = request.body;

  categoryService.execute({ name, description });

  return response.status(201).send({ message: 'created' });
});






export { categoriesRoutes }