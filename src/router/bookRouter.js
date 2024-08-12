import { Router } from "express";
import { Book } from "../schema/model.js";


let bookRouter = Router();

bookRouter
.route("/")
.post(async (req, res) => {
    let bookData = req.body;

    try{
        let result = await Book.create(bookData);
        res.json({
            success: true,
            message: "book created successfully.",
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
})
.get(async(req, res) => {
    let result = await Book.find({});
    try{
        let result = await Book.find({});

        res.json({
            success: true,
            message: "book read successfully.",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });

    }


})

bookRouter
.route("/:bookId")
.delete(async (req, res) =>{
    let bookId = req.params.bookId; // to find the student id 
    
    try{
        let result = await Book.findByIdAndDelete(bookId); // to delete the id from the database

        res.json({
            success: true,
            message: "book deleted successfully",
            result: result,
        });

    }catch(error){

        res.json({
            success: false,
            message: error.message,
        });
    }
})


export default bookRouter;
