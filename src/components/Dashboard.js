import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTicket from './AddTicket';
import TicketList from './TicketList';
import TotalCompleteTickets from './TotalCompleteTickets';

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
            <div className='container bg-white p-4 mt-5'>
              <h1>Tickets</h1>
              <AddTicket />
              <TicketList />
              <TotalCompleteTickets />
            </div>
        </div>
    </div>
   )}
}

export default Dashboard;

