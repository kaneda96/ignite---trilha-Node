"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importCategoryController = void 0;
var importCategoryController_1 = require("./importCategoryController");
var importCategoryUseCase_1 = require("./importCategoryUseCase");
var categoryRepository = null;
var importCategoryUseCase = new importCategoryUseCase_1.ImportCategoryUseCase(categoryRepository);
var importCategoryController = new importCategoryController_1.ImportCategoryController();
exports.importCategoryController = importCategoryController;
