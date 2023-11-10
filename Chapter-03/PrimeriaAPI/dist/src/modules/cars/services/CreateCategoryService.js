"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
var AppError_1 = require("../../../Errors/AppError");
var CreateCategoryService = /** @class */ (function () {
    function CreateCategoryService(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    CreateCategoryService.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        var categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new AppError_1.AppError('Category already exists!', 409);
        }
        this.categoriesRepository.create({ name: name, description: description });
    };
    return CreateCategoryService;
}());
exports.CreateCategoryService = CreateCategoryService;
