"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
var AppError = /** @class */ (function () {
    function AppError(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }
    return AppError;
}());
exports.AppError = AppError;
