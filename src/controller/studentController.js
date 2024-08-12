import { Student } from "../schema/model.js";


export let createStudent = async (req, res) => {
    let studentData = req.body;

    try {
      let result = await Student.create(studentData);
      res.json({
        success: true,
        message: "student created successfully.",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
}

export let readStudent = async (req, res) => {
  let query = req.query
  let brake = query.brake
  let page = query.page
    try {
      // let result = await Student.find({ name: { $regex: '^(.{2})*$', $options: 'i' } }){
      let result = await Student.find({}).limit(brake).skip((page-1)*2);
      // for searching.
      // let result = await Student.find({})
      // let result = await Student.find({name:"nitan"})
      // let result = await Student.find({name:"nitan",age:29})
      // let result = await Student.find({age:27})
      // let result = await Student.find({age:"27"})
      // let result = await Student.find({age:22, isMarried:"false"})
      // in searching type does not matter
      // let result = await Student.find({age:25})
      // let result = await Student.find({age:{$gt:25}})
      // let result = await Student.find({age:{$gte:25}})
      // let result = await Student.find({age:{$lt:25}})
      // let result = await Student.find({age:{$lte:25}})
      // let result = await Student.find({name:"nitan"})
      // let result = await Student.find ({name:{$ne:"nitan"}})

      // let result = await Student.find({age:{$gt:18,$lt:25}})

      // let result = await Student.find({ name: { $in: ["niki", "anjali", "bidambana"] } });
      // let result = await Student.find({name: { $regex: '^.{2}*(.{2})$', $options: 'i' } });

      // sorting.(unlike js mongoose db sorting works for number.)
      // ascending sort.
      // let result = await Student.find({}).sort("name")
      // let result = await Student.find({}).sort("name age")

      // descending sort.
      // let result = await Student.find({}).sort("-name")
      // let result = await Student.find({}).sort("name -age")

      


      // for select.
      // let result = await Student.find({name: "nitan"}).select("age")
      // let result = await Student.find({}).skip("3")
      // let result = await Student.find({}).limit("5")
      // let result = await Student.find({}).skip("3").limit("5")
      // let result = await Student.find({}).limit("5").skip("3")
      // let result = await Student.skip({3})

      // whatever the position the order it work as => find, sort, select, skip , limit.

      res.json({
        success: true,
        message: "student read successfully.",
        noOfData: result.length,
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
}

export let readStudentDetails = async (req, res) => {
    let studentId = req.params.studentId;
    try {
      let result = await Student.findById(studentId);
      res.json({
        success: true,
        message: "student read successfully",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
}

export let deleteStudent = async (req, res) => {
    let studentId = req.params.studentId;

    try {
      let result = await Student.findByIdAndDelete(studentId);

      res.json({
        success: true,
        message: "student deleted successfully",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
}

export let updateStudent = async (req, res) => {
    let studentId = req.params.studentId;
    let studentData = req.body;

    try {
      let result = await Student.findByIdAndUpdate(studentId, studentData);
      res.json({
        success: true,
        message: "student updated successfully.",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
}

