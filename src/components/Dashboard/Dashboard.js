import React from "react";
import axios from "axios";
import "./Dashboard.css";
import { Table, Container } from "react-bootstrap";
import Navibar from "../Navibar/Navibar";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: [],
      _scores: [],
    };
  }

  componentDidMount() {
    axios.get("/api/tests/all-tests-results").then((res) => {
      this.setState({
        tests: res.data.test,
        _scores: res.data.score,
      });
    });
    console.log(this.state._scores);
  }

  render() {
    return (
      <>
        <Navibar />

        <Container
          
        >
          <div className="p-5 mb-4 rounded-3 customJumbotron" style={{ backgroundColor: "#00a896" }}>
            <div className="container py-5">
              <h1 className="display-5 fw-bold">Dashboard</h1>
              <hr></hr>
              <p className="col-md-8 fs-4">
                Please Note that this page is not showing real time results.
                This is an example of how the user scores could be displayed
              </p>
            </div>
          </div>

          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Test</th>
                  <th>Score</th>
                  <th>Pass/Fail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>SDLC methodologies</td>
                  <td>90%</td>
                  <td style={{ backgroundColor: "#02c39a" }}> PASS</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SDLC methodologies</td>
                  <td>80%</td>
                  <td  style={{ backgroundColor: "#02c39a" }} >PASS</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Azure 900</td>
                  <td>10%</td>
                  <td style={{ backgroundColor: "red" }}>FAIL</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Azure 900</td>
                  <td>15%</td>
                  <td style={{ backgroundColor: "red" }}>FAIL</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>SDLC methodologies</td>
                  <td>50%</td>
                  <td style={{ backgroundColor: "#02c39a" }}>PASS</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
      </>
    );
  }
}
