import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTicket from './AddTicket';
import TicketList from './TicketList';
import TotalCompleteTickets from './TotalCompleteTickets';
import { Button, Modal } from 'react-bootstrap';

function Dashboard(props) {

  // const [modalOpen, setModalOpen] = useState(false);

  const[show,popup]=useState(false)
  const modalOpen = () => popup(true)
  const modalClose = () => popup(false)

  console.log("login props", props)

   return (
    <div>
            <div class="navbar navbar-expand-md navbar-dark bg-light">
              <h1>Repely</h1>
              <Button 
                variant="success"
                onClick={modalOpen}
                >
                Create New Ticket
              </Button>
              <Modal show={show} >
                <Modal.Body>
                  <AddTicket onHide={modalClose}/>
                </Modal.Body>
              </Modal>
              {/* <Link 
                //to="dashboard/new" 
                className='btn btn-success float-right'
                onClick={() => {
                  setModalOpen(true);
                }}
              > 
              Create New Ticket
              </Link>
                {modalOpen && <AddTicket setOpenModal={setModalOpen} />} */}
              <h4 className='text-right'>{props.user.email}</h4>
            </div>

            <div className='container bg-white p-4 mt-5'>
              <h1>Tickets</h1>
              <TicketList />
              <TotalCompleteTickets />
            </div>
        
    </div>
   )}

export default Dashboard;
