// console.log("hello world")

// make an  express application
import express, { Router, json } from "express";
import connectToMongoDB from "./src/connectToDb/connectToMongooseDb.js";
import bikeRouter from "./src/router/bikeRouter.js";
import bookRouter from "./src/router/bookRouter.js";
import collegeRouter from "./src/router/collegeRouter.js";
import firstRouter from "./src/router/firstRouter.js";
import productRouter from "./src/router/productRouter.js";
import reviewRouter from "./src/router/reviewRouter.js";
import schoolRouter from "./src/router/schoolRouter.js";
import secondRouter from "./src/router/secondRouter.js";
import studentRouter from "./src/router/studentRouter.js";
import teacherRouter from "./src/router/teacherRouter.js";
import thirdRouter from "./src/router/thirdRouter.js";
import traineesRouter from "./src/router/traineesRouter.js";
import userRouter from "./src/router/userRouter.js";
import webuserRouter from "./src/router/webuserRouter.js";
import fileRouter from "./src/router/fileRouter.js";
import imageRouter from "./src/router/imageRouter.js";
import { port } from "./config.js";
import cors from "cors";

let expressApp = express();
expressApp.use(cors()); // cors always place at top to hit by all
// attach port to that application
expressApp.listen(port, () => {
  console.log(`express application is listening at port ${port}`);
});
expressApp.use(json()); // used to take data

expressApp.use(express.static("./public"));

connectToMongoDB();

expressApp.use("/firsts", firstRouter);
expressApp.use(secondRouter);
expressApp.use(thirdRouter);
expressApp.use("/bikes", bikeRouter);
expressApp.use("/trainees", traineesRouter);
expressApp.use("/school", schoolRouter);
expressApp.use("/students", studentRouter);
expressApp.use("/teachers", teacherRouter);
expressApp.use("/books", bookRouter);
expressApp.use("/users", userRouter);
expressApp.use("/colleges", collegeRouter);
expressApp.use("/web-users", webuserRouter);
expressApp.use("/products", productRouter);
expressApp.use("/reviews", reviewRouter);
expressApp.use("/files", fileRouter);
expressApp.use("/images", imageRouter);
// middleware
// middleware

// Generate hash password.
// let password = "nitan123";
// let hashPassword =await bcrypt.hash(password,10)
// console.log(hashPassword)

// let hashPassword = "$2b$10$Wvn3UuMgkzFn5FV0ItmpW.Nrmhzr7UX/5gvdUAvv/3ARmP5jBp.sa";

// let password = "nitan123"

// let isValidPassword = await bcrypt.compare(password, hashPassword)
// console.log(isValidPassword)

// localhost:8000/users/login.
// method post
// date:{}
// email:"  "
// password:"  "

// token

// let infoObj = {
//     id : "1234231212",
// }
// let secretKey = secretKey;
// let expiryInfo = {
//     expiresIn: "365d"
// }

// let token = jwt.sign(infoObj, secretKey, expiryInfo)

// console.log(token)

// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibml0YW4iLCJhZ2UiOjM0LCJpYXQiOjE3MDIwMjIwMDQsImV4cCI6MTczMzU1ODAwNH0.t-UHGhCzh5aXKoYJ-0R6VbJmCkDhFDitMpvx5V9ruEs";

// try{
//     let infoObj = jwt.verify(token, "dw10");
//     console.log(infoObj)
// }catch(error){
//     console.log(error.message);
// }
// to be verified.
// token must be made from the given securityKey.
// must not expire

//if token is valid => infoObj
// if token is not valid => error

// let files = [
//   {
//     destination: "./public",
//     filename: "abc.jpg",
//   },
//   {
//     destination: "./public",
//     filename: "nitan.jpg",
//   },
//   {
//     destination: "./public",
//     filename: "ram.jpg",
//   },
// ];

// let value = files.map((value, i) =>{
//     return `http:localhost:8000/${value.filename}`
// })

// console.log(value)

// [
//   "http://localhost:8000/abc.jpg",
//   "http://localhost:8000/nitan.jpg",
//   "http://localhost:8000/ram.jpg",
// ]

let fileName = Router();
fileName.route("/").post((req, res) => {
  console.log(req.query);
  res.json("file created successfully.");
});

expressApp.use("/files", fileName);
