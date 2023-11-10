"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var CategoriesRepository_1 = require("../../modules/cars/repositories/implementations/CategoriesRepository");
var SpecificationsRepository_1 = require("../../modules/cars/repositories/implementations/SpecificationsRepository");
var UserRepository_1 = require("../../modules/accounts/repositories/implementation/UserRepository");
tsyringe_1.container.registerSingleton("CategoriesRepository", CategoriesRepository_1.CategoriesRepository);
tsyringe_1.container.registerSingleton("SpecificationRepository", SpecificationsRepository_1.SpecificationRepository);
tsyringe_1.container.registerSingleton("UserRepository", UserRepository_1.UserRepository);
