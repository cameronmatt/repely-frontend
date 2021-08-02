import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import axios from 'axios';
import AddTicket from './components/AddTicket';
import Logout from "./components/auth/Logout";
import Registration from "./components/auth/Registration";
import { connect } from 'react-redux';
import { findUser } from './redux/userSlice';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //loggedInStatus: "NOT_LOGGED_IN",
    }

    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }

  // checkLoginStatus() {
  //   axios.get("http://localhost:3001/logged_in", { withCredentials: true })
  //   .then(response => {
  //     if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
  //       this.setState({
  //         loggedInStatus: "LOGGED_IN",
  //         user: response.data.user
  //       })
  //     } else if(!response.data.logged_in & this.state.loggedInStatus === "LOGGED_IN") {
  //       this.setState({
  //         loggedInStatus: "NOT_LOGGED_IN",
  //         user: {}
  //       })
  //     }
  //   })
  //   .catch(error => {
  //     console.log("catch login error", error);
  //   });
  // }

  // componentDidMount() {
  //   this.checkLoginStatus();
  // }

  // handleLogout() {
  //   this.setState({
  //     loggedInStatus: "NOT_LOGGED_IN",
  //     user: {}
  //   })
  // }

  // handleLogin(data) {
  //   console.log('WHAT IS THIS DATAAAA', data)
  //   this.setState({
  //     loggedInStatus: "LOGGED_IN",
  //     user: data.user
  //   });
    
  // }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route 
              exact path={"/"} 
              render={props => (
                <Home 
                  {...props} 
                  // handleLogout={this.handleLogout}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus} 
                />
              )} />
            <Route 
              exact path={"/logout"} 
              render={props => (
                <Logout 
                  {...props} 
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus} 
                />
              )} />
            <Route 
              exact path={"/dashboard"} 
              render={props => (
                <Dashboard 
                  {...props} 
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                />
              )} />
              <Route 
              exact path={"/registration"} 
              render={props => (
                <Registration 
                  {...props} 
                  handleLogin={this.handleLogin}
                  
                />
              )} />
            <Route path="/dashboard/new" component={AddTicket}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
