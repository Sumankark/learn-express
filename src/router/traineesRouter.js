import { Router } from "express";
import { Trainee } from "../schema/model.js";
import { createTrainee, readTrainee } from "../controller/traneeController.js";


let traineesRouter = Router();


traineesRouter
.route("/")   
.post(createTrainee)
.get(readTrainee)


traineesRouter
.route("/:traineeId")
.delete(async (req, res) =>{
    let traineeId = req.params.traineeId; // to find the student id 
    
    try{
        let result = await Trainee.findByIdAndDelete(traineeId); // to delete the id from the database

        res.json({
            success: true,
            message: "Trainee deleted successfully",
            result: result,
        });

    }catch(error){

        res.json({
            success: false,
            message: error.message,
        });
    }
})
.get(async (req, res) => {
    let traineeId = req.params.traineeId;
    
    try{
        let result = await Student.findById(traineeId);
        res.json({
            success: true,
            message: "trainee read successfully",
            result: result,
    })
    }catch(error){
        res.json({
            success: false,
            message: message.error,
        })
    }
    

})
.patch(async (req, res) => {
    let traineeId = req.params.traineeId;
    let traineeData = req.body;

    try{
        let result = await Student.findByIdAndUpdate(traineeId, traineeData);

        res.json({
            success: true,
            message: "trainee update successfully.",
            result: result,
        });

    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }

})


export default traineesRouter;
