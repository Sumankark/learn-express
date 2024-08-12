import { Router } from "express";

let schoolRouter = Router();

schoolRouter
.route("/")
.post((req, res, next) => {
    res.json("school post");
})
.get((req, res, next) => {
    res.json("school get")
})
.patch((req, res, next) =>{
    res.json("school patch")
})


export default schoolRouter;