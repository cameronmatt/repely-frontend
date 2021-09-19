import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import AddTicket from './components/AddTicket';
import Logout from "./components/auth/Logout";
import Registration from "./components/auth/Registration";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //loggedInStatus: "NOT_LOGGED_IN",
    }
  }

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
