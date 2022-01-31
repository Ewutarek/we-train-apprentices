import React from "react";

import Signin from "./SignIn";
import Signup from "./SignUp";
import axios from "axios";
import store from "../../store/index";
//import Toast from '../Toast/Toast'
import { Col, Container,Row } from "react-bootstrap";
import "./Auth.css";
import { toast } from "react-toastify";


export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "signin",
    };
  }

  signIn = (email, password) => {
    axios
      .post("/api/users/login", { email, password })
      .then((res) => {
        if (res.data.success) {
          store.dispatch({
            type: "login",
            _id: res.data.user._id,
            user: res.data.user,
            token: res.data.token,
          });
          this.props.history.push("/about-us");
        } else {
          // console.log(res.data.errors);
          toast.error("Incorrect login", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  signUp = ({ firstName, lastName, email, password }) => {
    axios
      .post("/api/users/register", { firstName, lastName, email, password })
      .then((res) => {
        //console.log(res.data);
        if (res.data.success) {
          this.setState({ tab: "signin" });
        } else {
          console.log(res.data.errors.error);
          toast.error(
            res.data.errors.email ||
              res.data.errors.password ||
              res.data.errors.firstName,
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changeTab = () => {
    this.setState({
      tab: this.state.tab === "signup" ? "signin" : "signup",
    });
  };

  render() {
    let page =
      this.state.tab === "signin" ? (
        <Signin signIn={this.signIn} />
      ) : (
        <Signup signUp={this.signUp} />
      );
    return (
     
      <div className="main-auth py-5 ">
      <Container className="mt-5 auth-container" >
        <Row>
          <Col lg={4} md ={6} sm={12} className="text-center mt-5 p-3">
            <img src={process.env.PUBLIC_URL + "/WeTrainApprentices.png" } alt="logo" className="logo"/>
          {page}
          <div className="new text-center" onClick={this.changeTab}>
               {this.state.tab === "signin"
               ? "Sign up here"
                : "Already have an account? Sign in"}
            </div>
          </Col>
          
          <Col  lg={8} md ={6} sm={12}>
            <img src={process.env.PUBLIC_URL + "/6.jpg"} className="w-100" alt="student-img"/>
          </Col>
        </Row>
      </Container>
      </div>
    
    );
  }
}
