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
import { useHistory } from "react-router-dom";

export const Header = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding-left: 10px;
  color: #a66e36;
`;
export const ButtonStyle = styled.div`
  margin: auto;
`;
export const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;
export const Avatar = styled.div`
width: 30px;
height: 30px;
`;

const Dashboard = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
      dispatch(getCurrentUserAsync())
      }, [dispatch, localStorage])
      
  const user = useSelector((state) => state.user);
  //console.log("CURRENT USER.....ID", user)

  const[show,popup]=useState(false)
  const modalOpen = () => popup(true)
  const modalClose = () => popup(false)

  useEffect(() => {
    const userToken = localStorage.getItem("jwt");
    //console.log('IS USER LOGGED IN', userToken)
    if (userToken) {
      history.push("/dashboard")
    } else {
      history.push("/")
    }
  }, [])

   return (
    <div>
      {/* {localStorage.getItem('jwt')
            ? */}
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
                <Wrapper>
                  <img src={user.avatar} alt={user.name} className="Avatar"></img>
                </Wrapper>
                  <Logout currentUser={user}/>
                </div>
                
              </div>

              <div className='container bg-white p-4 mt-5'>
                <TicketList />
              </div>
            </Fragment> 
        {/* :
        <Home />
      } */}
    </div>
   )
}
  
export default Dashboard;
