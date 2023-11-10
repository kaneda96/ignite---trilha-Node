"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationController = void 0;
var tsyringe_1 = require("tsyringe");
var CreateSpecificationUseCase_1 = require("./CreateSpecificationUseCase");
var CreateSpecificationController = /** @class */ (function () {
    function CreateSpecificationController() {
    }
    CreateSpecificationController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, description = _a.description;
        var createSpecificationUseCase = tsyringe_1.container.resolve(CreateSpecificationUseCase_1.CreateSpecificationUseCase);
        createSpecificationUseCase.execute({ name: name, description: description });
        return response.status(201).send();
    };
    return CreateSpecificationController;
}());
exports.CreateSpecificationController = CreateSpecificationController;
