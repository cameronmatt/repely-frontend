import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserAsync } from '../redux/userSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTicket from './AddTicket';
import TicketList from './TicketList';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import Logout from "./auth/Logout";
import Home from './Home'
import { Fragment } from "react";

export const Header = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding-left: 10px;
  color: #a66e36;
`;
export const ButtonStyle = styled.div`
  margin: auto;
`;

const Dashboard = () => {

      const dispatch = useDispatch();

      useEffect(() => {
          dispatch(getCurrentUserAsync())
      }, [dispatch, localStorage])
      
      const user = useSelector((state) => state.user[0].status);
      console.log("CURRENT USER", user)

  const[show,popup]=useState(false)
  const modalOpen = () => popup(true)
  const modalClose = () => popup(false)

   return (
    <div>
      {localStorage.getItem('jwt')
            ?
            <Fragment>    
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
                <div>
                  <img src={user} alt={user}></img>
                  <Logout currentUser={user}/>
                </div>
                
              </div>

              <div className='container bg-white p-4 mt-5'>
                <TicketList />
              </div>
            </Fragment> 
        :
        <Home />
      }
    </div>
   )}

export default Dashboard;
