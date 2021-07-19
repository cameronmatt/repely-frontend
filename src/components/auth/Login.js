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
            loginErrors: "reg error"
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
        axios.post("http://localhost:3001/sessions", {
            user:{ 
            email: this.state.email, 
            password: this.state.password, 
            }
        },
        { withCredentials: true}
        )
        .then(response => {
            if (response.data.logged_in === true) {
                this.props.handleSuccessfulAuth(response.data);
            }
        })
        .catch(error => {
            console.log("Reg error", error)
        });
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="form.Email">
                        <Form.Control  
                            type="email" 
                            name="email" 
                            placeholder="Email address"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
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