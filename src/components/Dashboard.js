import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTicket from './AddTicket';
import TicketList from './TicketList';
import TotalCompleteTickets from './TotalCompleteTickets';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import Logout from "./auth/Logout";

export const Header = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding-left: 10px;
  color: #a66e36;
`;
export const ButtonStyle = styled.div`
  margin-left: auto;
`;
export const User = styled.div`
  margin-left: auto;
  font-size: 20px;
	font-weight: bold;
`;

function Dashboard(props) {

  // const [modalOpen, setModalOpen] = useState(false);

  const[show,popup]=useState(false)
  const modalOpen = () => popup(true)
  const modalClose = () => popup(false)

  console.log("login props", props)


   return (
    <div>
            <div className="navbar navbar-expand-md navbar-dark bg-light">
              <Header>Repely {'\uD83E\uDD9F'}</Header>
              <ButtonStyle>
                <Button 
                  variant="success"
                  onClick={modalOpen}
                  >
                  Create New Ticket
                </Button>
              </ButtonStyle>
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
              <User>{props.user.email}</User>

              <Logout />
            </div>

            <div className='container bg-white p-4 mt-5'>
              <TicketList />
              <TotalCompleteTickets />
            </div>
        
    </div>
   )}

export default Dashboard;
