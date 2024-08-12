import { Schema } from "mongoose";

//  => name, email, isMarried
let  userSchema = Schema({
    name:{
        type:String,
        required:[true, "name field is required."],
    }, 
    email:{
        type:String,
        unique: true,
        required:[true, "age field is required."],
    },
    password:{
        type: String,
        required: [true, "password field is required."]
    },
    isMarried:{
        type:Boolean, 
        required:[true, "isMarried is required."],
    },
    profileImage:{
        type: String,
        required: [true, "profileImage field is required."],
    },
    resume:{
        type: String,
        required: [true, "resume field is required"]
    },
},
{
    timestamps: true,
})

export default userSchema;