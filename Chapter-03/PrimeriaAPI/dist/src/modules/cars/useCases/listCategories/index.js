"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
var ListCategoriesController_1 = require("./ListCategoriesController");
var ListCategoriesUseCase_1 = require("./ListCategoriesUseCase");
exports.default = (function () {
    var categoryRepository = new CategoriesRepository_1.CategoriesRepository();
    var createCategoryUseCase = new ListCategoriesUseCase_1.ListCategoryUseCase(categoryRepository);
    var listCategoryController = new ListCategoriesController_1.ListCategoryController();
    return listCategoryController;
});
