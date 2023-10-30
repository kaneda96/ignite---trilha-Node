import { Router } from "express";
import { categoriesRoutes } from "../routes/categories.routes"
import { specificationRoutes } from "../routes/specification.routes"
import { usersRoutes } from "../routes/users.routes"
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use(authenticateRoutes)
router.use("/users", usersRoutes);
router.use("/categories", categoriesRoutes);
router.use("/specification", specificationRoutes);

export { router }