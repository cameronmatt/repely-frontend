import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);
      }

 render() {
   return (
    <div>
        <div>
            <h1>Dashboard</h1>
            <h1>Status: {this.props.loggedInStatus}</h1>

            <Link to="dashboard/new" className="btn"> Create Ticket</Link>
            <ul>
            </ul>
        </div>
    </div>
   )}
}

export default Dashboard;

