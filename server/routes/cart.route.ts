import { Router } from "express";
import { CartController } from "../controllers/cart.controller.ts";

const router = Router();

router.get("/", CartController.getAll);
router.post("/", CartController.create);

export default router;