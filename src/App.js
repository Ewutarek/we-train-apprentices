import axios from "axios";
import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import AboutUs from'./components/AboutUs/AboutUs';
import Dashboard from './components/Dashboard/Dashboard';
import Apprenticeships from './components/Apprenticeships/Apprenticeships';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CreateTest from './components/CreateTest/CreateTest';
import Tests from './components/Tests/Tests';
import DoTest from './components/DoTest/DoTest';
import TestStartPage from './components/TestStartPage/TestStartPage';
import store from "./store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  

  componentDidMount() {
    if (localStorage.getItem('_ID'))
    {
      axios.get(`/api/users/${localStorage.getItem('_ID')}`).then(res => {
        store.dispatch({
          user: res.data.user,
          type: 'set_user'
        })
      }).catch(err => {
        console.error(err)
      })
    }
  }
  
  render() {
    return (
      <div className="app">

        <Router>
        <ToastContainer />
          <Switch>
            <Route exact path="/" component={Auth}/>
            <Route exact path="/about-us" component={AboutUs}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/create-test" component={CreateTest}/>
            <Route path="/tests" component={Tests}/>
            <Route path="/create-course" component={CreateCourse}/>
            <Route path="/apprenticeships" component={Apprenticeships}/>
            <Route path="/do-test" component={DoTest}/>
            <Route path="/test-start-page" component={TestStartPage}/>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
