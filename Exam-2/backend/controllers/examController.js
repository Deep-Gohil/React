const Exam = require("../models/createExam");


const createExam = async(req,res)=>{
    let exam = await Exam.create(req.body)
    res.status(201).json(exam)
}

const getAllExams = async(req,res)=>{
    let exams = await Exam.find()
    res.json(exams)
}

const getExamById = async(req,res)=>{
    let { id } = req.params
    let exam = await Exam.findById(id)
    if(!exam){
        return res.status(404).json({msg: "Exam not found"})
    }
    res.json(exam)
}

const updateExam = async(req,res)=>{
    let { id } = req.params
    let exam = await Exam.findByIdAndUpdate(id,req.body,{new:true})
    if(!exam){
        return res.status(404).json({msg: "Exam not found"})
    }
    res.json(exam)
}

const deleteExam = async(req,res)=>{
    let { id } = req.params
    let exam = await Exam.findByIdAndDelete(id)
    if(!exam){
        return res.status(404).json({msg: "Exam not found"})
    }
    res.json({msg: "Exam deleted"})
}

module.exports = { createExam,getAllExams,getExamById,updateExam, deleteExam}