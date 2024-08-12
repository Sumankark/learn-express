import mongoose from "mongoose";
import { databaseLink } from "../../config.js";

// connect our application to mongoose dv 
let connectToMongoDB = async() => {
    try{
        await mongoose.connect(databaseLink);
        console.log(`application is connected to mongodb database successfully ${databaseLink}`);
    }
    catch(error){
        console.log(error.message);
    }
};

export default connectToMongoDB;


// to give access to other to put data on database

/* 
 go to security
 go to network access
 click to ADD IP ADDRESS
 you got 2 options 
 add current IP ADDRESS and allow access from anywhere
 if you want to allow this clustor to your laptop only then select and current IP ADDRESS
 if you want to allow this clustor to all laptop then select ALLOW ACCESS FROM ANYWHERE  id add 0.0.0.0/0
 if you want to allow specific laptop to access that cluster then add ip of that laptop to access list entry then click to confirm.
 (to get your ip address just search ip of my laptop on browser)
 while adding no need to add ..../32 it is automatically added.
*/