const studentModel = require('../models/student');

module.exports = {
    create: function (req, res, next) {
        studentModel.create({FirstName: req.body.FirstName, LastName: req.body.LastName, Age: req.body.Age, College: req.body.College, Batch: req.body.Batch}, function(err, result) {
            if(err){
                next(err);
            } else {
                res.json({status: "success", message: "Student Added Successfully", data: null})
            }
        })
    },
    getAll: function (req, res, next) {
        let studentList = [];
        studentModel.find({}, function (err, students) {
            if(err) {
                next(err);
            } else {
                for(let student of students){
                    studentList.push({id: student.id, firstname: student.FirstName, lastname: student.LastName, Age: student.Age, college: student.College, batch: student.Batch})
                }
                res.json({status: "success", message: "Students Found!!", data: { students: studentList }})
            }
        })
    },
    getById: function (req, res, next) {
        studentModel.findById(req.params.id, function(err, info) {
            if(err) {
                next(err)
            } else {
                res.json({status: "success", message: "Student Found!!", data: {student: info}})
            }
        })
    },
    updateById: function (req, res, next) {
        studentModel.findByIdAndUpdate(req.params.id, {FirstName: req.body.FirstName, LastName: req.body.LastName, Age: req.body.Age, College: req.body.College, Batch: req.body.Batch}, function (err, studentInfo) {
            if(err){
                next(err);
            } else {
                res.json({status: "success", message: "Student Updated Successfully"})
            }
        })
    },
    deleteById: function (req, res, next) {
        studentModel.findByIdAndRemove(req.params.id, function (err, studentInfo) {
            if(err){
                next(err)
            } else {
                res.json({status: "success", message: "Student Deleted Successfully", data: null})
            }
        })
    }
}