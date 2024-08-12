import { Router } from "express";
import upload from "../middleware/upload.js";
import { handleImage } from "../controller/imageController.js";


let imageRouter = Router();

imageRouter
.route("/")
.post(upload.array("file", 4), handleImage);



export default imageRouter;