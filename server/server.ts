import express from "express";
import productRoutes from "./routes/product.route.ts";
import cartRoutes from "./routes/cart.route.ts"
import cartItemRoutes from "./routes/cart_item.route.ts";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/products", productRoutes);
app.use("/carts", cartRoutes);
app.use("/cart_item", cartItemRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});