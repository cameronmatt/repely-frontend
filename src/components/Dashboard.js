import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTicket from './AddTicket';
import TicketList from './TicketList';
import TotalCompleteTickets from './TotalCompleteTickets';

function Dashboard(props) {

  const [modalOpen, setModalOpen] = useState(false);

  console.log("login props", props)

   return (
    <div>
        <div>
            <h1>Dashboard</h1>
            <h1>Status: {props.loggedInStatus}</h1>
            <Link 
            //to="dashboard/new" 
            className="btn"
            onClick={() => {
              setModalOpen(true);
            }}
            > 
            Create New Ticket
            </Link>
            {modalOpen && <AddTicket setOpenModal={setModalOpen} />}
            <div className='container bg-white p-4 mt-5'>
              <h1>Tickets</h1>
              <TicketList />
              <TotalCompleteTickets />
            </div>
        </div>
    </div>
   )}

export default Dashboard;



// const [modalOpen, setModalOpen] = useState(false);

// class Dashboard extends Component {

//     constructor(props) {
//         super(props);
//       }

//  render() {
//    return (
//     <div>
//         <div>
//             <h1>Dashboard</h1>
//             <h1>Status: {this.props.loggedInStatus}</h1>
//             <Link 
//             // to="dashboard/new" 
//             className="btn"
//             onClick={() => {
//               setModalOpen(true);
//             }}
//             > 
//             Create New Ticket
//             </Link>
//             <div className='container bg-white p-4 mt-5'>
//               <h1>Tickets</h1>
//               <TicketList />
//               <TotalCompleteTickets />
//             </div>
//             {modalOpen && <AddTicket setOpenModal={setModalOpen} />}
//         </div>
//     </div>
//    )}
// }

// export default Dashboard;

