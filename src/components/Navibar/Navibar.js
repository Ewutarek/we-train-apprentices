import React from "react";
import store from "../../store/index";
import { NavLink } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import "./Navibar.css";

export default class NaviBar extends React.PureComponent {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (store.getState().user) {
      return (
        <div className="navibar-wrapper">
          <Navbar bg="light" expand={false}>
            <Container fluid>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Navbar.Brand href="#">
                    <img
                      src={process.env.PUBLIC_URL + "/WeTrainApprentices.png"}
                      alt="logo"
                      width="auto"
                      height="30"
                      className="d-inline-block align-top"
                    />
                  </Navbar.Brand>
                  <br></br>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Signed in as:{" "}
                    <a href="#login">
                      {store.getState().user.firstName +
                        " " +
                        store.getState().user.lastName}
                    </a>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 nav nav-pills" >
                    <NavLink className="nav-item" to="/home">
                      <div className="nav-link active">Home</div>
                    </NavLink>
                    <NavLink className="nav-item" to="/about-us">
                      <div className="nav-link">About Us</div>
                    </NavLink>
                    <NavLink className="nav-item" to="/apprenticeships">
                      <div className="nav-link">Apprenticeships</div>
                    </NavLink>
                    <NavLink className="nav-item" to="/tests">
                      <div className="nav-link">Tests</div>
                    </NavLink>
                    <NavLink className="nav-item" to="/dashboard">
                      <div className="nav-link">Dashboard</div>
                    </NavLink>
                    <NavLink className="nav-item" to="/create-test">
                      <div className="nav-link">Create Test</div>
                    </NavLink>
                    <NavLink className="nav-item" to="/create-course">
                      <div className="nav-link">Create Course</div>
                    </NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <Navbar.Brand href="#">
                <img
                  src={process.env.PUBLIC_URL + "/WeTrainApprentices.png"}
                  alt="logo"
                  width="auto"
                  height="60"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
