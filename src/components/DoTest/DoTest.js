import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./DoTest.css";
import { Modal, Button, Container, ProgressBar } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";
import Navibar from "../Navibar/Navibar";
const DoTest = () => {
  const _history = useHistory();

  const questionsData = _history.location.state.test.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);

  function handleAnswer(e) {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    let userAnswer = e.target.innerHTML;
    if (userAnswer === questionsData[currentQuestion].correctAnswer) {
      setPoints(points + 1);
      console.log(points);
    }
  }

  let percentage =
    (points / _history.location.state.test.questions.length) * 100;
  let pass_fail = percentage < 50 ? "FAIL" : "PASS";

  const completeTest = (props) => {
    axios
      .post("/api/tests/save-results", {
        currentUser: localStorage.getItem("_ID"),
        totalPercent: percentage,
        _testId: _history.location.state.test._id,
        _passFail: pass_fail
      })
      .then((res) => {
        if (res.data) {
        _history.push('/dashboard');
        }
      })
      .catch((error) => {
        // here you will have access to error.response
        console.log(error.response);
      });
    console.log(`Here is yourscore ${points}`);
    console.log(`Here is your Percentage ${percentage}`);
    console.log(` ${pass_fail}`);
  };

  let now = ((currentQuestion )/(questionsData.length))*100;

  return (
    <div className="test-page">
      <Navibar />
{/* 
      <Modal.Dialog className="results-modal">
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog> */}

      <Container>
      {questionsData[currentQuestion] && (
        <>
  
          <div className="p-5 mb-4 rounded-3 customJumbotron">
          <div className="container py-4">
            <h1 className="display-5 fw-bold">Q{currentQuestion + 1}</h1>
            <hr></hr>
              <p className="col-md-8 fs-4">
              {currentQuestion + 1}/{questionsData.length} completed 
              </p>
          </div>
        </div>
          <h4>{questionsData[currentQuestion].questionName}</h4>
          <div className="choice-group">
            {questionsData[currentQuestion].answers.map(
              (answerOption, index) => (
                <Button onClick={handleAnswer} className="choice">
                  {answerOption}
                </Button>
              )
            )}
          </div>
        </>
      )}
      {currentQuestion === questionsData.length && completeTest()}
      </Container>
      
    </div>
  );
};

export default DoTest;
