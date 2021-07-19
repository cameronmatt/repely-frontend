import React, { Component } from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
//import Logout from "./auth/Logout";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Modal } from 'react-bootstrap';
import styled from 'styled-components';

export const Header = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding-left: 10px;
  color: #a66e36;
`;
export const LogReg = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    height: 20vh;
    width: 50vh;
`;
export const OR = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`;
export const LoginButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`;
export const RegisterButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`;

export default class Home extends Component {

    constructor(props) {
        super(props);
        console.log("login props", this.props)
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        //this.handleLogoutClick = this.handleLogoutClick.bind(this);
      }

    state = {
        isLoginOpen: false,
        isRegOpen: false
    };

    

    openLoginModal = () => this.setState({ isLoginOpen: true });
    closeLoginModal = () => this.setState({ isLoginOpen: false });

    openRegModal = () => this.setState({ isRegOpen: true });
    closeRegModal = () => this.setState({ isRegOpen: false });


      handleSuccessfulAuth(data) {
          this.props.handleLogin(data);
          this.props.history.push("/dashboard")
      }

    //   handleLogoutClick() {
    //       axios
    //       .delete("http://localhost:3001/logout", { withCredentials: true })
    //       .then(response => {
    //           this.props.handleLogout();
    //       })
    //       .catch(error => {
    //           console.log("logout error", error)
    //       })
    //   }

    render() {
        return (
            <Container>
                <div className="navbar navbar-expand-md navbar-dark bg-light">
                    <Header>Repely {'\uD83E\uDD9F'}</Header>
                    <p>Status: {this.props.loggedInStatus}</p>
                </div>
                <LogReg>
                    <LoginButton>
                        <Button type="submit" size="lg" onClick={this.openLoginModal}>Login</Button>
                    </LoginButton>
                    <OR>
                        <h4>OR</h4>
                    </OR>
                    <RegisterButton>
                        <Button type="submit" size="lg" onClick={this.openRegModal}>Register</Button>
                    </RegisterButton>
                </LogReg>
                <div>
                    {/* <button onClick={() => this.handleLogoutClick()}>Logout</button> */}
                </div>


                <Modal show={this.state.isLoginOpen} onHide={this.closeLoginModal}>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeLoginModal}>
                    Close
                    </Button>
                </Modal.Footer>
                </Modal>

                <Modal show={this.state.isRegOpen} onHide={this.closeRegModal}>
                <Modal.Header>
                    <Modal.Title>Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeRegModal}>
                    Close
                    </Button>
                </Modal.Footer>
                </Modal>

            </Container>
            
        );
    }
}