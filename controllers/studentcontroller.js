const mongoose = require('mongoose');
const Student = require('../models/student');

async function addStudent(req, res){
    try{
       console.log(req.body, 'req.body')
       let student = new Student(req.body);
       await student.save();
       console.log("data saved sucessfully...")
       res.end("added...")
    }catch(err) {
        console.log(err)
    }
}
async function getStudents(req, res){
    try{
        let rollNo = (req.params.rollNo);
        console.log(rollNo, 'rollNo')
       let students = await Student.findOne({rollno: rollNo});
       console.log(students, 'students');
       res.send(students)
    } catch(err) {
          console.log(err, 'err')
    }
}
async function getStudentByRollNo(req, res){
    try{
        let rollNo = (req.params.rollNo);
        console.log("Fetching student with rollNo: ", rollNo);
       let student = await Student.findOne({rollno: rollNo});
       console.log(student, "student");
       res.send(student);
    } catch(err) {
          console.log(err, 'err')
    }
}5