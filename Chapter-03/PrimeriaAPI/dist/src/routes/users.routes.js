"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../modules/accounts/useCases/CreateUserController");
var updateAvatarController_1 = require("../modules/accounts/useCases/updateAvatar/updateAvatarController");
var upload_1 = __importDefault(require("../config/upload"));
var multer_1 = __importDefault(require("multer"));
var ensureAuthenticated_1 = require("../middleware/ensureAuthenticated");
var upload = (0, multer_1.default)(upload_1.default.upload('./tmp/avatar'));
var usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
var createUserController = new CreateUserController_1.CreateUserController();
var updateAvatarController = new updateAvatarController_1.UpdateAvatarController();
usersRoutes.post("/", createUserController.handle);
usersRoutes.patch("/avatar", ensureAuthenticated_1.ensureAuthenticated, upload.single("avatar"), updateAvatarController.handle);
