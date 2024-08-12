import { Router } from "express";
import { createStudent, deleteStudent, readStudent, readStudentDetails, updateStudent } from "../controller/studentController.js";

let studentRouter = Router();

studentRouter
  .route("/") //localhost:8000/students
  .post(createStudent)
  .get(readStudent)
  

studentRouter
  .route("/:studentId") //localhstudentIdost:8000/student/:
  .delete(deleteStudent)
  .get(readStudentDetails)
  .patch(updateStudent);

export default studentRouter;

// Student.create(studentData)
// Student.find({})
// Student.findById(id)
// Student.findByIdAndDelete(id)
// Student.findByIdAndUpdated(id,data)

// update
// read details


