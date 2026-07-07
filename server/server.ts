import express from "express";
import productRoutes from "./routes/product.route";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors())

app.use("/products", productRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});