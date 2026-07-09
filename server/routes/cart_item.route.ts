import { Router } from "express";
import { CartItemController } from "../controllers/cart_item.controller.ts";

const router = Router();

router.get("/", CartItemController.getAll);
router.post("/", CartItemController.create);

export default router;