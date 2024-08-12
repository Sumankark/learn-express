import { Router } from "express";
import { Teacher } from "../schema/model.js";


let teacherRouter = Router();

teacherRouter
.route("/")
.post(async (req, res) => {
    let teacherData = req.body;
     
    try{
        let result = await Teacher.create(teacherData);
        res.json({
            success: true,
            message: "teacher created successfully.",
        });
    } catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
})
.get(async (req, res) => {
    try{
        let result = await Teacher.find({});
        res.json({
            success: true,
            message: "teacher data read successfully.",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }
})


teacherRouter
.route("/:teacherId")
.delete(async (req, res) => {
    let teacherId = req.params.teacherId;

    try{
        let result = await Teacher.findByIdAndDelete(teacherId);

        res.json({
            success: true,
            message: "teacher delete successfully.",
            result: result,
        });
    }catch(error){
        
        res.json({
            success: false,
            message: error.message,
        })
    }
})
export default teacherRouter;