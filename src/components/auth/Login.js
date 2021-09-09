import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: "reg error",
            isLoggedIn: !!localStorage.jwt
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        axios.post("http://localhost:3001/auth/signin", {
            auth:{ 
            email: this.state.email, 
            password: this.state.password, 
            }
        })
        .then(response => { 
            if (response.status === 201) {
                this.props.handleSuccessfulAuth(response.data);
                localStorage.setItem("jwt", response.data.jwt)
            }
        })
        .catch(error => {
            console.log("Login error", error)
        });
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="form.Email" className='mb-2 mr-sm-2'>
                        <Form.Control  
                            type="email" 
                            name="email" 
                            placeholder="Email address"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className='mb-2 mr-sm-2'>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit">Login</Button>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}