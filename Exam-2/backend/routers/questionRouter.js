const { Router } = require("express")
const { getAllQuestions, getQuestionById, createQuestion, updateQuestion, deleteQuestion } = require("../controllers/questionController")

const questionRouter = Router()

questionRouter.get("/all",getAllQuestions)
questionRouter.get("/:id",getQuestionById)
questionRouter.post("/create",createQuestion)
questionRouter.patch("/update/:id",updateQuestion)
questionRouter.delete("/delete/:id",deleteQuestion)

module.exports = questionRouter