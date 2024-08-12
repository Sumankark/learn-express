import { Router } from "express";

let firstRouter = Router();

firstRouter
  .route("/") // localhost:8000
  .post(
    (req, res, next) => {
      // console.log(req.body);
      console.log(req.query);
      res.json("home post");
      req.name = "Suman Karki";
      req.age = 34;
      req.address = "Kathmandu";
      next();
    },
    (req, res) => {
      console.log(req.name);
      console.log(req.age);
      console.log(req.address);
    }
  )

  .get((req, res) => {
    res.json("home get");
  })

  .patch((req, res) => {
    res.json("home patch");
  })
  .delete((req, res) => {
    res.json("home delete");
  });

firstRouter
  .route("/name")
  .post((req, res) => {
    res.json("name post");
  })
  .get((req, res) => {
    res.json("name get");
  })
  .patch((req, res) => {
    res.json("name patch");
  })
  .delete((req, res) => {
    res.json("name delete");
  });

export default firstRouter;

// url = facebook.com
// meethod = get, post patch, delete

// url = localhost:8000, post at response "home post"
// url = localhost:8000, get at response "home get"
// url = localhost:8000, patch at response "home patch"
// url = localhost:8000, delete at response "home delete"

// making api
// defining task for each request is called making api.
