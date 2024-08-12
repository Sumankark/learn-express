import { Schema } from "mongoose";


let productSchema = Schema({
    name:{
        type:String,
        required:[true, "name field is required."],
    },
    price:{
        type: Number,
        required: [true, "price filed is required."],
    },
    quantity:{
        type: Number,
        required: [true, "quantity field is required."],
    }
},
{
    timestamps: true,
})

export default productSchema;