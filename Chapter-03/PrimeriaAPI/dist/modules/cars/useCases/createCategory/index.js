"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
var CreateCategoryController_1 = require("./CreateCategoryController");
var CreateCategoryUseCase_1 = require("./CreateCategoryUseCase");
exports.default = (function () {
    var categoryRepository = new CategoriesRepository_1.CategoryRepository();
    var createCategoryUseCase = new CreateCategoryUseCase_1.CreateCategoryUseCase(categoryRepository);
    var createCategoryController = new CreateCategoryController_1.CreateCategoryController(createCategoryUseCase);
    return createCategoryController;
});
