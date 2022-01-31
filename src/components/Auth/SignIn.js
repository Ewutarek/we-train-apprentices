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
        {/* <div className="form">
                    <div className="input-wrapper">
                        <div>Email Address</div>
                        <input className="input" type="text" placeholder="Email Adress" value={this.state.email} onChange={e => this.setState({ email: e.target.value})}/>
                    </div>

                    <div className="input-wrapper">
                        <div>Password</div>
                        <input className="input" type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value})}/>
                    </div>
                    
                    <div className="btn" onClick={() => this.props.signIn(this.state.email, this.state.password)}>Sign In</div>
                </div> */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
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
