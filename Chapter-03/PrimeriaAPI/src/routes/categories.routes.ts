import { Router } from "express";
import multer from "multer";
import listCategoryController from "../modules/cars/useCases/listCategories";
import createCategoryController from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";


const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp'
})

categoriesRoutes.get("/", async (request, response) => {

  return response.json(await listCategoryController().handle(request, response));

});

categoriesRoutes.post("/", (request, response) => {

  return createCategoryController().handle(request, response);
});

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {

  return importCategoryController.handle(request, response);


})





export { categoriesRoutes }