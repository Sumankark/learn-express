import { Schema } from "mongoose";


let teacherSchema = Schema({
    name:{
        type:String,
        required:[true, "name field is required."],
    }, 
    age:{
        type:Number,
        required:[true, "age field is required."],
    },
    isMarried:{
        type:Boolean, 
        required:[true, "isMarried is required."],
    },
    subject:{
        type:String,
        required:[true, "subject field is required."],
    },
});

export default teacherSchema;