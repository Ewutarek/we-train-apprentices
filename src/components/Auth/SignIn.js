import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Auth.css";

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="sign-in-wrapper">

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="mb"
              onClick={() =>
                this.props.signIn(this.state.email, this.state.password)
              }
            >
              Sign in
            </Button>
          </div>
        </Form>
      </div>

     
    );
  }
}
