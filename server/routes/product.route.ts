import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const router = Router();

router.get("/", ProductController.getAll);

router.post("/", ProductController.create);

export default router;