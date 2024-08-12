import { Router } from "express";
import { College } from "../schema/model.js";
import { createCollege, deleteCollege, readCollege, readDetailCollege, updateCollege } from "../controller/collegeController.js";


let collegeRouter = Router();

collegeRouter
.route("/")
.post(createCollege)
.get(readCollege)


collegeRouter.route("/:userId")
.delete(deleteCollege)
.get(readDetailCollege)
.patch(updateCollege)


export default collegeRouter;