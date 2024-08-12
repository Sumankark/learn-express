import { User } from "../schema/model.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendemail.js";
import { secretKey } from "../../config.js";
import jwt from "jsonwebtoken";

export let createUser = async (req, res) =>{
    let userData = req.body;    
    let password = userData.password

    try{
        let hashPassword = await bcrypt.hash(password, 10);
        userData.password = hashPassword

        let result = await User.create(userData);
        await sendEmail({
            from: "Un <karkisuman0001@gmail.com>",
            to: [req.body.email],
            subject: "Email verification.",
            html:`<h1>You have successfully register.</h1> 
            <img src="public/1702366415092359640763_2340383196169819_6948863311832055921_n.jpg"  width="500" height="600">`,
        });
        res.status(201).json({
            success: true,
            message:"User created successfully.",
            result: result,
        });
    } catch(error){
        res.status(409).json({
            success:false,
            message:error.message,
        });
    }
}


export let readUser = async (req, res) =>{
    let query = req.query
    try{
        let result = await User.find(query);

        res.status(400).json({
            success: true,
            message: "User read successfully.",
            result: result,
        });
    }catch(error){
        res.status(200).json({
            success: false,
            message: error.message,
        });

    }
}

export let readDetailUser = async (req, res) =>{
    let userId = req.params.userId; // to find the User id 
    
    try{
        let result = await User.find({}); 

        res.status(400).json({
            success: true,
            message: "User deleted successfully",
            noOfData: result.length,
            result: result,
        });

    }catch(error){

        res.status(200).json({
            success: false,
            message: error.message,
        });
    }
}

export let deleteUser = async (req, res) =>{
    let userId = req.params.userId; // to find the User id 
    
    try{
        let result = await User.findByIdAndDelete(userId); // to delete the id from the database

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            result: result,
        });

    }catch(error){

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export let updateUser = async (req, res) => {
    let userId = req.params.userId;
    let userData = req.body;

    try{
        let result = await User.findByIdAndUpdate(userId, userData);

        res.status(201).json({
            success: true,
            message: "User update successfully.",
            result: result,
        });

    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }

}

export let loginUser = async (req, res) =>{
    let email = req.body.email;
    let password = req.body.password;

    try {
        let user = await User.findOne({email: email});
        let hashPassword = user.password;
        console.log(hashPassword)
        if(user === null){
            req.json({
                success: false,
                message: "email or password does not match."
            })
        }
        else{
            let isValidPassword = await bcrypt.compare(password, hashPassword);
                if(isValidPassword){
                    // generate token

                    let infoObj = {
                        id: user._id,
                    };
                    let expireInfo ={
                        expiresIn: "365d",
                    }
                    let token = jwt.sign(infoObj,  secretKey, expireInfo)

                    res.status(201).json({
                        success: true,
                        message: "User login successfully.",
                        result: token,
                })
            }
            else{
                res.status(400).json({
                    success: false,
                    message: "email or password does not match."
                })
            }
        }
        
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
    
}

export let myProfile = async (req, res) => {
   let id = req.id;

   try {
        let result = await User.findById(id);
        res.json({
            success: true,
            message: "Profile read successfully.",
            result: result,
        })
   } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
   }
}

export let updateMyProfile = async (req, res)  =>{
    let id = req.id
    let data = req.body

    try {
        let result = await User.findByIdAndUpdate(id, data);

        res.json({
            success: true,
            message: "My profile update successfully.",
            result: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let deleteMyProfile = async (req, res, next) => {
    let id = req.id;

    try {
        let result = await User.findByIdAndDelete(id)
        res.json({
            success: true, 
            message: "My profile delete Successfully.",
            result: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}


/*

post email, password
back get email, password
find the user whose email is (postman email)
if not => success: false, message: "Email or Password doesn't match."
if user exist => 
    check password match (using bcrypt)
    if password does not match => success: false, message: "Email or Password doesn't match."
    if password match => success: true, message: user logged in successfully.

*/

// API
// CURD (database)
// hashing
// jwt
// convert file to link.
// save file to server.
// send email.

// register.
// login.
// my profile.
