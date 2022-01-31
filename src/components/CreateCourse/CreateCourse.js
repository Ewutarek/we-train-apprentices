import React from "react";
import Navibar from "../Navibar/Navibar";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import "../CreateTest/CreateTest.css";

export default class CreateCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseNames: [
        "Softaware Developer",
        "Software Tester",
        "Project Management",
        "Business Analyst",
        "Data Fellowship",
        "Digital Marketing",
      ],
      courseNameVal: "Software Developer",
      courseLevels: [
        "Level 3",
        "Level 4",
        "Bachelors Degree",
        "Masters Degree",
      ],
      courseLevelVal: "Level 3",
      courseDurations: [
        "12-13 months",
        "13-15 months",
        "15-18 months",
        "2 years",
        "2-3 years",
      ],
      courseDurationVal: "12-13 months",
      courseDescription: "",
    };
  }

 

  saveSelections = () => {
    this.setState({
      courseNameVal: "Software Developer",
      courseDescription: "",
      courseDurationVal: "12-13 months",
      courseLevelVal: "Level 3",
    });
  };

  onNameChange = (e) => {
    this.setState({
      courseNameVal: e.target.value,
    });
  };

  onDescriptionChange = (e) => {
    this.setState({
      courseDescription: e.target.value,
    });
  };

  onDurationChange = (e) => {
    this.setState({
      courseDurationVal: e.target.value,
    });
  };

  onLevelChange = (e) => {
    this.setState({
      courseLevelVal: e.target.value,
    });
  };

  saveCourse = () => {
    let course = {
      name: this.state.courseNameVal,
      duration: this.state.courseDurationVal,
      level: this.state.courseLevelVal,
      description: this.state.courseDescription,
    };
    axios
      .post("/api/courses/create", { course })
      .then((response) => {
        if (response.data.success) {
          this.setState({
            courseNameVal: "Software Developer",
            courseDescription: "",
            courseDurationVal: "12-13 months",
            courseLevelVal: "Level 3",
          });
          toast("Course created successfully", {
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
      <>
        <Navibar />

        <div className="main-create-test py-5 ">
          <Container className="mt-5 create-test-container">
            <Row>
              <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                <div className="p-5 mb-4 rounded-3 customJumbotron">
                  <div className="container py-5">
                    <h1 className="display-5 fw-bold">Create Course</h1>
                    <hr></hr>
                  </div>
                </div>
              </Col>

              <Col lg={8} md={6} sm={12}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Select
                      aria-label="Course Name"
                      value={this.state.courseNameVal}
                      onChange={this.onNameChange}
                      placeholder="Course Name"
                    >
                      {this.state.courseNames.map((crs, idx) => (
                        <option key={idx} value={crs}>
                          {crs}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Level</Form.Label>
                    <Form.Select
                      aria-label="Level"
                      value={this.state.courseLevelValVal}
                      onChange={this.onLevelChange}
                      placeholder="Level"
                    >
                      {this.state.courseLevels.map((lvl, idx) => (
                        <option key={idx} value={lvl}>
                          {lvl}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Duration</Form.Label>
                    <Form.Select
                      aria-label="Duration"
                      value={this.state.courseDurationVal}
                      onChange={this.onDurationChange}
                      placeholder="Duration"
                    >
                      {this.state.courseDurations.map((dur, idx) => (
                        <option key={idx} value={dur}>
                          {dur}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Course Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="A short description of the course"
                      onChange={this.onDescriptionChange}
                      value={this.state.description}
                    />
                  </Form.Group>
                  <br></br>
                  <br></br>
                  <div className="d-grid gap-2">
                    <Button variant="success" onClick={() => this.saveCourse()}>
                      Save Course
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
