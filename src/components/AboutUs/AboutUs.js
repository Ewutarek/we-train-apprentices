import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import Navibar from "../Navibar/Navibar";
import "./AboutUs.css";

export default class AboutUs extends React.Component {
  learnMore = () => {
    this.props.history.push("/apprenticeships");
  };
  render() {
    return (
      <div>
        <Navibar />
        <div className="main-about-us py-5 ">
          <Container className="mt-5 about-us-container">
            <Row>
              <Col lg={4} md={6} sm={12} className="text-center">
                <img
                  src={process.env.PUBLIC_URL + "/5.jpg"}
                  className="w-100"
                  alt="student"
                />
              </Col>

              <Col lg={8} md={6} sm={12}>
                <h1 class="text-center mt-5 p-3">
                  Here at <strong>We Train Apprentices</strong>, we aim to
                  provide an opportunity link prospective apprentices and
                  training providers by providing general information. We also
                  now provide knowledge testing functionality!
                  <Button className="mt-5" onClick={this.learnMore}>
                    Learn More
                  </Button>
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
