const {Router} = require("express")
const { getAllExams, createExam, updateExam, deleteExam } = require("../controllers/examController")

const examRouter = Router()

examRouter.get("/all",getAllExams);
examRouter.post("/create",createExam);
examRouter.patch("/update/:id",updateExam);
examRouter.delete("/delete/:id",deleteExam);


module.exports = examRouter