import React from "react";
import Navibar from "../Navibar/Navibar";

import axios from "axios";
import {
  Card,
  CardGroup,
  Button,
  Container,
  Col,
  Row,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import "./Tests.css";




export default class Tests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: []
    };
  }

  componentDidMount() {
    axios.get("/api/tests/all-tests").then((res) => {
      this.setState({
        tests: res.data
      });
    });
  }

 
  takeTest = (testId) => {
    this.props.history.push("/test-start-page?id=" + testId);
  };

  render() {
    return (
      <div className="all-tests-wrapper">
        <div>
          <Navibar />
        </div>
        <Container className="mainContainer">
          <div className="body">
            <div className="p-5 mb-4 rounded-3 customJumbotron" style={{ backgroundColor: "#00a896" }} >
              <div className="container py-5">
                <h1 className="display-5 fw-bold">Tests</h1>
                <hr></hr>
              </div>
            </div>
            <Row md={4}>
              {this.state.tests.map((test, idx) => (
                <Card key={idx} className="text-center m-5">
                  {/* <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + "/course-blank-img.png"}
                  /> */}
                    <Card.Title>{test.name}</Card.Title>  
                  <Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>{test.difficulty}</ListGroupItem>
                      <ListGroupItem>
                        Number of Questions:{test.questions.length}
                      </ListGroupItem>
                      
                    </ListGroup>
                    <Button
                      variant="primary"
                      onClick={() => this.takeTest(test._id)}
                    >
                      Take Test
                    </Button>
                  </Card.Body>
                  {/* <Card.Footer className="text-muted">{test.createdAt}</Card.Footer> */}
                </Card>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}


