import { Router } from "express";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/importCategoryController";
import { ListCategoryController } from "../modules/cars/useCases/listCategories/ListCategoriesController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import uploadConfig from "../config/upload";
import multer from "multer";


const categoriesRoutes = Router();
const upload = multer(uploadConfig.upload('./tmp'));

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.use(ensureAuthenticated)
categoriesRoutes.get("/", listCategoryController.handle);
categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {

  return importCategoryController.handle(request, response);


})





export { categoriesRoutes }