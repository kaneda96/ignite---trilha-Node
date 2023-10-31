"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationService = void 0;
var AppError_1 = require("../../../Errors/AppError");
var CreateSpecificationService = /** @class */ (function () {
    function CreateSpecificationService(specificationRepository) {
        this.specificationRepository = specificationRepository;
    }
    CreateSpecificationService.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        var categoryAlreadyExists = this.specificationRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new AppError_1.AppError('Category already exists!', 409);
        }
        this.specificationRepository.create({ name: name, description: description });
    };
    return CreateSpecificationService;
}());
exports.CreateSpecificationService = CreateSpecificationService;
