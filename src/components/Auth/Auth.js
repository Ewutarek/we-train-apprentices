import React from "react";

import Signin from "./SignIn";
import Signup from "./SignUp";
import axios from "axios";
import store from "../../store/index";
//import Toast from '../Toast/Toast'
import { Container } from "react-bootstrap";
import "./Auth.css";
import { toast } from "react-toastify";
import { Image } from "react-bootstrap";




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
      <div className="auth-body">
        <div className="auth-wrapper">
          <Container>
            {/* <div className="header">WE TRAIN APPRENTICES</div> */}

            <div className=" bg-light rounded-3 customJumbotron">
              <div className="container">
                <h1 className="display-5 fw-bold">Welcome</h1>
              </div>
            </div>
            <Image
              className="logo mb-5"
              src={process.env.PUBLIC_URL + "/WeTrainApprentices.png"}
              alt="logo"
              fluid
            />
            {page}
            <div className="new text-center" onClick={this.changeTab}>
              {this.state.tab === "signin"
                ? "Sign up here"
                : "Already have an account? Sign in"}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}


