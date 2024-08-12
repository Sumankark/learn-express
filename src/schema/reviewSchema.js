import { Schema } from "mongoose";


let reviewSchema = Schema({
    productId:{
        type: Schema.ObjectId,
        ref: "Product",
        required: [true, "productId field is required."],
        
    },
    userId: {
        type: Schema.ObjectId,
        ref: "User",
        required: [true, "userId field is required."],
    },
    rating:{
        type: Number,
        required: [true, "rating field is required."],
    },
    description:{
        type: String,
        required: [true, "description filed is required."]
    },
},
{
    timestamps: true,
})

export default reviewSchema;