import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateExam = () => {
  const [questions, setQuestions] = useState([]);
  const [exams, setExams] = useState([]);
  const [examData, setExamData] = useState({
    name: "",
    duration: "",
    selectedQuestions: [],
  }); 
  const [editId, setEditId] = useState(-1); 

  const fetchQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:8090/question/all");
      setQuestions(res.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setExamData({   
      ...examData,
      [name]: value,
    });
  };

  const handleQuestionSelect = (id) => {
    const updatedQuestions = examData.selectedQuestions.includes(id)
      ? examData.selectedQuestions.filter((qId) => qId !== id)
      : [...examData.selectedQuestions, id];

    setExamData({
      ...examData,
      selectedQuestions: updatedQuestions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (examData.name && examData.duration && examData.selectedQuestions.length) {
      if (editId === -1) {
        
        setExams([...exams, { ...examData, id: Date.now() }]);
      } else {
        
        setExams(
          exams.map((exam) =>
            exam.id === editId ? { ...examData, id: editId } : exam
          )
        );
      }
      resetForm();
    }
  };

  
  const resetForm = () => {
    setExamData({
      name: "",
      duration: "",
      selectedQuestions: [],
    });
    setEditId(-1);
  };

  
  const handleEdit = (exam) => {
    setExamData({
      name: exam.name,
      duration: exam.duration,
      selectedQuestions: exam.selectedQuestions,
    });
    setEditId(exam.id);
  };

  
  const handleDelete = (id) => {
    setExams(exams.filter((exam) => exam.id !== id));
  };

  return (
    <div>
      <h1>Create Exam</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          name="name"
          placeholder="Exam Name"
          value={examData.name}
          onChange={handleInput}
          style={{ padding: "10px" }}
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (in minutes)"
          value={examData.duration}
          onChange={handleInput}
          style={{ padding: "10px" }}
        />
        <h3>Select Questions:</h3>
        {questions.map((question) => (
          <div key={question._id}>
            <input
              type="checkbox"
              checked={examData.selectedQuestions.includes(question._id)}
              onChange={() => handleQuestionSelect(question._id)}
            />
            {question.question}
          </div>
        ))}
        <button type="submit" style={{ padding: "10px", background: "blue", color: "white", border: "none" }}>
          {editId === -1 ? "Create Exam" : "Update Exam"}
        </button>
      </form>

      <h2>Exams:</h2>
      {exams.length > 0 ? (
        exams.map((exam) => (
          <div key={exam.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h3>{exam.name}</h3>
            <p>Duration: {exam.duration} minutes</p>
            <p>Questions: {exam.selectedQuestions.join(", ")}</p>
            <button onClick={() => handleEdit(exam)}>Edit</button>
            <button onClick={() => handleDelete(exam.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No exams created yet.</p>
      )}
    </div>
  );
};

export default CreateExam;
