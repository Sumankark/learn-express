import { User } from "../schema/model.js";
import { College } from "../schema/model.js";


export let createCollege = async (req, res) => {
    let collegeData = req.body;
     
    try{
        let result = await College.create(collegeData);
        res.json({
            success: true,
            message: "College created successfully.",
            result: result,
        });
    } catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
}


export let readCollege = async (req, res) => {
    try{
        let result = await College.find({});
        res.json({
            success: true,
            message: "College data read successfully.",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let readDetailCollege =async (req, res) =>{
    let collegeId = req.params.collegeId; // to find the User id 
    
    try{
        let result = await User.findByIdAndDelete(collegeId); // to delete the id from the database

        res.json({
            success: true,
            message: "College deleted successfully",
            result: result,
        });

    }catch(error){

        res.json({
            success: false,
            message: error.message,
        });
    }
}

export let deleteCollege = async (req, res) =>{
    let collegeId = req.params.collegeId; // to find the User id 
    
    try{
        let result = await User.findByIdAndDelete(collegeId); // to delete the id from the database

        res.json({
            success: true,
            message: "College deleted successfully",
            result: result,
        });

    }catch(error){

        res.json({
            success: false,
            message: error.message,
        });
    }
}
export let updateCollege = async (req, res) => {
    let collegeId = req.params.collegeId;
    let collegeData = req.body;

    try{
        let result = await User.findByIdAndUpdate(collegeId, collegeData);

        res.json({
            success: true,
            message: "College update successfully.",
            result: result,
        });

    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }

}