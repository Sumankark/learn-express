import { Router } from "express";


let bikeRouter = Router();

bikeRouter
.route("/")  // localhost:8000/bikes
.post((req, res, next) => {
    console.log("i am middleware 1");
    next("a");
},
(err, req, res, next) =>{
    console.log("i am error middleware 1");
    next();
},
(req, res, next) => {
    console.log("i am middleware 2");
    next("b");
},
(err, req, res, next) =>{
    console.log("i am error middleware 2");
},
(req, res) => {
    console.log("i am middleware 3");
    next();
})
export default bikeRouter;