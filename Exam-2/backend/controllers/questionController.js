const Exam = require("../models/createExam");
const Question = require("../models/questionModel");

const createQuestion = async (req, res) => {
    const newQuestion = await Question.create(req.body);
    res.status(201).json({ msg: "Question created successfully" });
}

const getAllQuestions = async (req, res) => {
    try {
        const exams = await Question.find();
        res.json(exams);
    } catch (error) {
        console.error("Error fetching exams:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getQuestionById = async (req, res) => {
    let { id } = req.params
    const question = await Question.findById(id);
    if (!question) {
        return res.status(404).json({ msg: "Question not found" });
    }
    res.json(question);
}

const updateQuestion = async (req, res) => {
    let { id } = req.params;
    const updatedQuestion = await Question.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedQuestion) {
        return res.status(404).json({ msg: "Question not found" });
    }
    res.json(updatedQuestion);
}

const deleteQuestion = async (req, res) => {
    let { id } = req.params;
    const deletedQuestion = await Question.findByIdAndDelete(id);
    if (!deletedQuestion) {
        return res.status(404).json({ msg: "Question not found" });
    }
    res.json({ msg: "Question deleted successfully" });
}

module.exports = {createQuestion, getAllQuestions,getQuestionById,updateQuestion,deleteQuestion}