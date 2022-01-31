import React from "react";
import qs from "qs";
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

  //   getScores() {
  //     return this.state._scores
  //         .filter(score_ => score_.userId === localStorage.getItem("_ID"))
  //         .map(score_ => (
  //             <div>
  //                  <div> {score_.totalScore}%</div>
  //                 <div> {score_.passFail}</div>
  //             </div>
  //         ));
  // }

  // getScores() {
  //   return this.state._scores
  //     .filter((scoreText) => scoreText.userId === localStorage.getItem("_ID"))
  //     .map((scoreText) => (
  //       <div>
  //         <div> {scoreText.totalScore}%</div>
  //         <div> {scoreText.passFail}</div>
  //       </div>
  //     ));
  // }

  render() {
    return (
      <div className="view-scoress-wrapper">
       
          <Navibar />

         
        <div className="p-5 mb-4 rounded-3 customJumbotron">
          <div className="container py-5">
            <h1 className="display-5 fw-bold">Dasboard</h1>
            <hr></hr>
              <p className="col-md-8 fs-4">
                Please Note that this page is not showing real time results. This is an example of how the user scores could be displayed
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
              <td>PASS</td>
            </tr>
            <tr>
              <td>2</td>
              <td>SDLC methodologies</td>
              <td>80%</td>
              <td>PASS</td>
            </tr>
            <tr>
              <td>3</td>
              <td >Azure 900</td>
              <td>10%</td>
              <td>FAIL</td>
            </tr>
            <tr>
              <td>4</td>
              <td >Azure 900</td>
              <td>15%</td>
              <td>FAIL</td>
            </tr>
            <tr>
              <td>5</td>
              <td >SDLC methodologies</td>
              <td>50%</td>
              <td>PASS</td>
            </tr>
          </tbody>
        </Table>
        </Container>
       
      </div>
    );
  }
}
