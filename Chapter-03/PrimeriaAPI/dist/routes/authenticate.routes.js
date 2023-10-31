"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoutes = void 0;
var express_1 = require("express");
var AuthenticateController_1 = require("../modules/accounts/useCases/authenticate/AuthenticateController");
var authenticateRoutes = (0, express_1.Router)();
exports.authenticateRoutes = authenticateRoutes;
var authenticateController = new AuthenticateController_1.AuthenticateController();
authenticateRoutes.post("/sessions", authenticateController.handle);
