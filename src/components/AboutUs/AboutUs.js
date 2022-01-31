import React from "react";
import qs from "qs";
import bootstrap from "bootstrap";
import { Button } from 'react-bootstrap';
import Navibar from "../Navibar/Navibar";
import './AboutUs.css'



export default class AboutUs extends React.Component {

  learnMore = () => {
    this.props.history.push("/apprenticeships");
  }
  render() {
    return (
      <div className="about-body">
        <Navibar />

        <div >
          <div class="container py-5" >
            <div class="row h-100 align-items-center py-5" id="about-top" >
              <div class="col-lg-6" style={{ backgroundColor: "#02c39a" }}>
                <h1 class="display-4">Welcome to <strong>We Train Apprentices</strong></h1>
                <p class="lead mb-0" >
                  Here at <strong>We Train Apprentices</strong>, we aim to provide an opportunity link prospective apprentices and training providers by providing general information. 
                  We also now provide knowledge testing functionality!
                </p>
                <Button className="mb-2" onClick={this.learnMore}>
                  Learn More
                </Button>
              </div>
              <div class="col-lg-6 d-none d-lg-block h-100 right-side" >
                <img
                  src={process.env.PUBLIC_URL + "/5.jpg"}
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

       
      </div>
    );
  }
}


