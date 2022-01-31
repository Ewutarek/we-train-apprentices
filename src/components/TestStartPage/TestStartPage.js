import React from "react";
import Navibar from "../Navibar/Navibar";
import qs from "qs";
import axios from "axios";
import {Button} from 'react-bootstrap'

export default class TestStartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      test: {},
      isLoading: true,
      isAuthenticated: true,
    };
  }

  checkAuth = () => {
    if (localStorage.getItem("JWT_PAYLOAD") && localStorage.getItem("_ID")) {
      this.setState({ isAuthenticated: true });
    } else if (this.state.test.mustBeSigned) {
      this.setState({ isAuthenticated: false });
    }
  };

  componentDidMount() {
    let id = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).id;
    this.setState({ id: id });
    this.refreshTest();
  }

  refreshTest = () => {
    axios
      .get(
        "/api/tests/test-start-page/" +
          qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).id
      )
      .then((res) => {
        if (res.data) {
          this.setState({ isLoading: false, test: res.data.test });
          this.checkAuth();
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };

  doTest = () => {
    let _pathname = `/do-test/${this.state.id}`;
    this.props.history.push({
      pathname: _pathname,
      state: {
        test: this.state.test,
      },
    });
    console.log(this.props.navigate.pathname);
  };

  render() {
    return (
      <div>
        <Navibar />
        <div className="auth-body p-5 ">
        <div class="p-5 mt-10 rounded-3 text-center" style={{ backgroundColor: "#f0f3bd" }} >
          <div class="container py-10">
            <h1 class="display-5 fw-bold">Are you ready to start the test??</h1>
            <Button onClick={this.doTest}>Start Test</Button>
          </div>
        </div>
       
      </div>
      </div>

    );
  }
}
