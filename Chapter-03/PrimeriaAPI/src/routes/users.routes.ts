import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/CreateUserController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const usersRoutes = Router();


const createUserController = new CreateUserController();

usersRoutes.use(ensureAuthenticated)
usersRoutes.post("/", createUserController.handle);

export { usersRoutes }