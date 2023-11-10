"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var routes_1 = require("./routes");
var swagger_json_1 = __importDefault(require("./swagger.json"));
require("./database");
require("./shared/container");
var AppError_1 = require("./Errors/AppError");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.router);
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).send({ message: err.message });
    }
    return response.status(500).json({ status: 500, message: "Internal erver Error - ".concat(err.message) });
});
app.listen(3333, function () { return console.log("server running on 3333!"); });
