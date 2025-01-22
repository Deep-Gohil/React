import React, { useState } from 'react';
import './classic-styles.css';
import axios from 'axios';

const AddQuestion = () => {
  const [question, setQuestion] = useState({
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: ''
  });
  const [message, setMessage] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setQuestion((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8090/question/create', question);
      setMessage('Question added successfully!');
      setQuestion({
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: ''
      });
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
      setMessage('Failed to add question.');
    }
  };

  return (
    <div className="container">
      <h1>Add a New Question</h1>
      {message && <p>{message}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter Question"
          value={question.question}
          onChange={handleInput}
          name="question"
        />
        <input
          type="text"
          placeholder="Enter Option A"
          value={question.optionA}
          onChange={handleInput}
          name="optionA"
        />
        <input
          type="text"
          placeholder="Enter Option B"
          value={question.optionB}
          onChange={handleInput}
          name="optionB"
        />
        <input
          type="text"
          placeholder="Enter Option C"
          value={question.optionC}
          onChange={handleInput}
          name="optionC"
        />
        <input
          type="text"
          placeholder="Enter Option D"
          value={question.optionD}
          onChange={handleInput}
          name="optionD"
        />
        <input
          type="text"
          placeholder="Enter Answer"
          value={question.correctAnswer}
          onChange={handleInput}
          name="correctAnswer"
        />
        <input type="submit" value="Add Question" />
      </form>
    </div>
  );
};

export default AddQuestion;
