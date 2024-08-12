import { Router } from "express";
import upload from "../middleware/upload.js";
import { handlefile } from "../controller/fileController.js";


let fileRouter = Router();

fileRouter
.route("/")
.post(upload.array("document", 4), handlefile);



export default fileRouter;