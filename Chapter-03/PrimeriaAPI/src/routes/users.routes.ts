import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/CreateUserController";
import { UpdateAvatarController } from "../modules/accounts/useCases/updateAvatar/updateAvatarController";
import uploadConfig from "../config/upload";
import multer from "multer";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const upload = multer(uploadConfig.upload('./tmp/avatar'));
const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateAvatarController = new UpdateAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch("/avatar", ensureAuthenticated,upload.single("avatar"), updateAvatarController.handle)

export { usersRoutes }