import { Router } from "express";
import { ProductController } from "../controllers/product.controller.ts";

const router = Router();

router.get("/", ProductController.getAll);

router.post("/", ProductController.create);

export default router;