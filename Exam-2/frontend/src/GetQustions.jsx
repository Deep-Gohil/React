import React, { useState, useEffect } from "react";
import axios from "axios";

const GetQuestions = () => {
    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async () => {
        try {
            const res = await axios.get("http://localhost:8090/question/all");
            setQuestions(res.data);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    const onClickHandler = (e, id, currOption) => {
        const question = questions.find((ele) => ele._id === id);

        const clicked = e.target;

        if (question) {
            if (currOption === question.correctAnswer) {
                console.log("Correct answer!");
                clicked.style.backgroundColor = "green";
                clicked.style.color = "white";
            } else {
                console.log("Wrong answer!");
                clicked.style.backgroundColor = "red";
                clicked.style.color = "white";
            }
        } else {
            console.error("Question not found!");
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <div>
            {questions.length > 0 ? (
                questions.map((question) => (
                    <div key={question._id} style={{ marginBottom: "20px" }}>
                        <h2>{question.question}</h2>
                        <p
                            style={{
                                padding: "10px",
                                backgroundColor: "white",
                                color: "black",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                            onClick={(e) => onClickHandler(e, question._id, question.optionA)}
                        >
                            A: {question.optionA}
                        </p>
                        <p
                            style={{
                                padding: "10px",
                                backgroundColor: "white",
                                color: "black",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                            onClick={(e) => onClickHandler(e, question._id, question.optionB)}
                        >
                            B: {question.optionB}
                        </p>
                        <p
                            style={{
                                padding: "10px",
                                backgroundColor: "white",
                                color: "black",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                            onClick={(e) => onClickHandler(e, question._id, question.optionC)}
                        >
                            C: {question.optionC}
                        </p>
                        <p
                            style={{
                                padding: "10px",
                                backgroundColor: "white",
                                color: "black",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                            onClick={(e) => onClickHandler(e, question._id, question.optionD)}
                        >
                            D: {question.optionD}
                        </p>
                    </div>
                ))
            ) : (
                <p>Loading questions...</p>
            )}
        </div>
    );
};

export default GetQuestions;
