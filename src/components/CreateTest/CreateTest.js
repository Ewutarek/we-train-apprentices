import React from "react";
import Navibar from "../Navibar/Navibar";
import {
  Container,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
  CloseButton
} from "react-bootstrap";
import "./CreateTest.css";
import Dialog from "../Dialog/Dialog";
import { toast } from "react-toastify";
import axios from "axios";

export default class CreateTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulties: ["Beginner", "Intermediate", "Advanced"],
      difficultyVal: "Beginner",
      questions: [],
      name: "",
      addQuestion: false,
      questionName: "",
      answers: [],
      correctAnswer: "",
    };
  }


  addAnswer = () => {
    this.setState({
      answers: this.state.answers.concat(''),
    });
  };

  updateAnswer = (e, i) => {
    let newArray = Object.assign([], this.state.answers);
    newArray[i] = e.target.value;
    this.setState({
      answers: newArray,
    });
  };

  saveQuestion = () => {
    let question = {
      answers: this.state.answers,
      correctAnswer: this.state.correctAnswer,
      questionName: this.state.questionName,
    };
    this.setState({
      questions: this.state.questions.concat(question),
      addQuestion: false,
      questionName: '',
      answers: [],
      correctAnswer: '',
    });
  };

  removeQuestion = (question) => {
    this.setState({
      question: this.state.questions.filter(
        (ques) => ques.questionName !== question.questionName
      ),
    });
  };

  saveTest = () => {
    let test = {
      name: this.state.name,
      questions: this.state.questions,
      difficulty: this.state.difficultyVal,
    };
    axios
      .post("/api/tests/create", { test })
      .then((response) => {
        if (response.data.success) {
          this.setState({
            name: "",
            difficultyVal: "Beginner",
            questions: [],
            answers: [],
          });

          toast("Test created successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="create-quiz-wrapper">
        <div>
          <Navibar />
        </div>

        <div className="main">
        <div className="p-5 mb-4 bg-light rounded-3 customJumbotron">
          <div className="container py-5">
            <h1 className="display-5 fw-bold">Create Test</h1>
            <hr></hr>
          </div>
        </div>
          <Container>
            <div className="form card">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Test Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Test Name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                    value={this.state.name}
                  />
                </Form.Group>

                <Form.Select
                  aria-label="Difficulty"
                  value={this.state.difficultyVal}
                  onChange={(e) =>
                    this.setState({ difficultyVal: e.target.value })
                  }
                  placeholder="Difficulty"
                >
                  {this.state.difficulties.map((dif, idx) => (
                    <option key={idx} value={dif}>
                      {dif}
                    </option>
                  ))}
                </Form.Select>

               

                {this.state.questions.map((ques, idx) => (
                  <ButtonToolbar
                    aria-label="Toolbar with button groups"
                    key={idx}
                  >
                    <ButtonGroup className="me-2" aria-label="First group">
                      <Button variant="outline-info">
                        {ques.questionName}
                      </Button>
                      <Button variant="outline-info">
                        Correct Answer: {ques.correctAnswer}
                      </Button>
                      <Button variant="outline-info">
                        Number of answers: {ques.answers.length}
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="Third group">
                      <Button
                        onClick={() => this.removeQuestion(ques)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                ))}

                <Button
                  variant="secondary"
                  onClick={() => this.setState({ addQuestion: true })}
                >
                  Add question
                </Button>

                <br></br>
                <br></br>
                <div className="d-grid gap-2">
                  <Button variant="success" onClick={() => this.saveTest()}>
                    Save Test
                  </Button>
                </div>
              </Form>
            </div>
          </Container>
        </div>
        <Dialog model={this.state.addQuestion}>
          <Form>
          <CloseButton onClick={() => this.setState({addQuestion: false})} />
            <Form.Group className="mb-3" controlId="formBasicQuestionName">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                placeholder="Question"
                value={this.state.questionName}
                onChange={(e) =>
                  this.setState({ questionName: e.target.value })
                }
              />
            </Form.Group>

            {this.state.answers.map((ans, idx) => (
              <div className="answer-form" key={idx}>
                <Form.Check
                  type="radio"
                  value={this.state.ans}
                  onChange={(e) => this.setState({ correctAnswer: ans })}
                  name="answer"
                />
                <Form.Control
                  type="text"
                  placeholder="Answer"
                  value={this.state.answers[idx]}
                  onChange={(e) => this.updateAnswer(e, idx)}
                />
              </div>
            ))}

            <div className="d-grid gap-2">
              <Button className="add-answer" onClick={this.addAnswer}>
                Add Answer
              </Button>
            </div>

            <Button variant="success" onClick={this.saveQuestion}>
              Submit
            </Button>
          </Form>
        </Dialog>
      </div>
    );
  }
}
