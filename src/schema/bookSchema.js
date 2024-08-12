import { Schema } from "mongoose";


let bookSchema = Schema({
    name:{
        type: String,
        required: [true, "name field is required."],
    },
    author:{
        type: String,
        required: [true, "author filed is required."],
    },
    price:{
        type: Number,
        required: [true, "price field is required."],
    },
    isAvailable:{
        type: Boolean,
        required: [true, "price filed is required."],
    }
});

export default bookSchema;
