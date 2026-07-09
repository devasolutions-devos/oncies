import express from "express";
import productRoutes from "./routes/product.route.ts";
import cartRoutes from "./routes/cart.route.ts"
const app = express();

app.use(express.json());

app.use("/products", productRoutes);
app.use("/carts", cartRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});