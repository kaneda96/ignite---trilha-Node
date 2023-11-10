"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var CreateCategoryController_1 = require("../modules/cars/useCases/createCategory/CreateCategoryController");
var importCategoryController_1 = require("../modules/cars/useCases/importCategory/importCategoryController");
var ListCategoriesController_1 = require("../modules/cars/useCases/listCategories/ListCategoriesController");
var ensureAuthenticated_1 = require("../middleware/ensureAuthenticated");
var upload_1 = __importDefault(require("../config/upload"));
var multer_1 = __importDefault(require("multer"));
var categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
var upload = (0, multer_1.default)(upload_1.default.upload('./tmp'));
var createCategoryController = new CreateCategoryController_1.CreateCategoryController();
var listCategoryController = new ListCategoriesController_1.ListCategoryController();
var importCategoryController = new importCategoryController_1.ImportCategoryController();
categoriesRoutes.use(ensureAuthenticated_1.ensureAuthenticated);
categoriesRoutes.get("/", listCategoryController.handle);
categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.post('/import', upload.single("file"), function (request, response) {
    return importCategoryController.handle(request, response);
});
