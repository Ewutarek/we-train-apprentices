import React from "react";
import { Button, Form } from "react-bootstrap";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  render() {
    return (
      <div className="sign-up-wrapper">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
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

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Control
              type="text"
              placeholder="First name"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Control
              type="text"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="mb"
              onClick={() => this.props.signUp({ ...this.state })}
            >
              Sign up
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
