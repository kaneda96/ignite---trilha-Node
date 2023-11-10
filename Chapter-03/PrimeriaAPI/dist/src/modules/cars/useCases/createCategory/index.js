"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
var CreateCategoryController_1 = require("./CreateCategoryController");
var CreateCategoryUseCase_1 = require("./CreateCategoryUseCase");
exports.default = (function () {
    var categoriesRepository = new CategoriesRepository_1.CategoriesRepository();
    var createCategoryUseCase = new CreateCategoryUseCase_1.CreateCategoryUseCase(categoriesRepository);
    var createCategoryController = new CreateCategoryController_1.CreateCategoryController();
    return createCategoryController;
});
