import React from "react";
import Navibar from "../Navibar/Navibar";
import axios from "axios";
import {
  Card,
  Container,
  ListGroupItem,
  ListGroup,
  Row
} from "react-bootstrap";
import './Apprenticeships.css'



export default class Apprenticeships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    axios.get("/api/courses/view-courses").then((res) => {
      this.setState({
        courses: res.data,
      });
    });
  }

  render() {
    return (
      <div className="apprenticeships-wrapper">
        <div>
          <Navibar />
        </div>
        <Container className="mainContainer">
          <div className="p-5 mb-2 rounded-3 customJumbotron" style={{ backgroundColor: "#00a896" }}>
            <div className="container py-1">
              <h1 className="display-5 fw-bold">Apprenticeships</h1>
              <hr></hr>
              <p className="col-md-8 fs-4">
                Gain knowledge and skills that will propel you to the future.
                Find the programme that suits you!
              </p>
            </div>
          </div>
          <Row md={4}>
            {this.state.courses.map((course, idx) => (
              <Card style={{ width: "18rem"}} key={idx} className="text-center m-5 apprenticeships">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + '/6.jpg'}/>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>
                 {course.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{course.level}</ListGroupItem>
                <ListGroupItem>{course.duration}</ListGroupItem>
              </ListGroup>
            </Card>
            ))}

            
          </Row>
        </Container>
      </div>
    );
  }
}
