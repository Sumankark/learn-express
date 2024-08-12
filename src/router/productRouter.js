import { Router } from "express";
import { createProduct, deleteProduct, readDetailProduct, readProduct, updateProduct } from "../controller/productController.js";


let productRouter = Router();

productRouter
.route("/")
.post(createProduct)
.get(readProduct)

productRouter
.route("/:productId")
.get(readDetailProduct)
.delete(deleteProduct)
.patch(updateProduct);

export default productRouter;