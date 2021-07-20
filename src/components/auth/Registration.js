import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';


export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            avatar: {},
            registrationErrors: "reg error",  
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //   }); console.log("WHAT IS THE AVATAR", this.state)
    // }
        if (event.target.name === 'avatar') {
            this.setState({
                [event.target.name]: event.target.files[0]
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }  
    }

    handleSubmit(event) {
        axios.post("http://localhost:3001/registrations", {
            user:{ 
            username: this.state.username,
            email: this.state.email, 
            password: this.state.password, 
            password_confirmation: this.state.password_confirmation,
            avatar: this.state.avatar
            }
        },
        { withCredentials: true}
        )
        .then(response => {
            if (response.data.status === 'created') {
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
                    <Form.Group controlId="form.Name">
                        <Form.Control  
                            type="username" 
                            name="username" 
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="form.Email">
                        <Form.Control  
                            type="email" 
                            name="email" 
                            placeholder="Email value"
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
                    <Form.Group controlId="formBasicPasswordConfirmation">
                        <Form.Control  
                            type="password" 
                            name="password_confirmation" 
                            placeholder="Password confirmation"
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.File
                            type="file" 
                            id="avatar"
                            label="Upload you Avatar"
                            name="avatar" 
                            // value={this.state.avatar}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit">Register</Button>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}