import { model } from "mongoose";
import bookSchema from "./bookSchema.js";
import collegeSchema from "./collegeSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";
import studentSchema from "./studentSchema.js";
import teacherSchema from "./teacherSchema.js";
import traineeSchema from "./traineeSchema.js";
import userSchema from "./userSchema.js";
import webuserSchema from "./webuserSchema.js";

export let Student = model("Student", studentSchema);

// model name is singular and first latter is capital.
// must match with the variable name.

export let Teacher = model("Teacher", teacherSchema);

export let Book = model("Book", bookSchema);

export let User = model("User", userSchema);

export let Trainee = model("Trainee", traineeSchema);

export let College = model("College", collegeSchema);

export let Webuser = model("Webuser", webuserSchema);

export let Product = model("Product", productSchema);

export let Review = model("Review", reviewSchema);
