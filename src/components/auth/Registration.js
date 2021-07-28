import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import { DirectUpload } from 'activestorage';


export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            username: "",
            avatar: "",
            registrationErrors: "reg error",  
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
      });
    }

    handleSubmit(event) {
        axios.post("http://localhost:3001/registrations", {
            user:{ 
            email: this.state.email, 
            password: this.state.password, 
            password_confirmation: this.state.password_confirmation,
            username: this.state.username,
            avatar: this.state.avatar
            } 
        },
        { withCredentials: true}
        )
        .then(response => {
            if (response.data.status === 'created') {
                this.props.handleSuccessfulAuth(response.data);
            } 
            // this.uploadFile(this.state.avatar, response.data.user)
        })
        .catch(error => {
        });
        event.preventDefault();
    }

    // uploadFile = (file, user) => {
    //     const upload = new DirectUpload(file, 'http://localhost:3001/rails/active_storage/direct_uploads')
    //     upload.create((error, blob) => {
    //         if (error) {
    //             console.log(error)
    //         } else {
    //             fetch(`http://localhost:3001/users/${user.id}`, {
    //                 method: 'PUT', 
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json'
    //                 },
    //                 body: JSON.stringify({avatar: blob.signed_id})
    //             })
    //             .then(response => response.json())
    //             .then(data => this.props.handleLogin(data))
    //         }
    //     })
    // }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="form.Name" className='mb-2 mr-sm-2'>
                        <Form.Control  
                            type="text" 
                            name="username" 
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="form.Email" className='mb-2 mr-sm-2'>
                        <Form.Control  
                            type="email" 
                            name="email" 
                            placeholder="Email value"
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
                    <Form.Group controlId="formBasicPasswordConfirmation" className='mb-2 mr-sm-2'>
                        <Form.Control  
                            type="password" 
                            name="password_confirmation" 
                            placeholder="Password confirmation"
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className='mb-2 mr-sm-2'>
                        <Form.Control
                            type="text" 
                            label="Upload you Avatar"
                            name="avatar" 
                            placeholder="Enter URL of your avatar"
                            onChange={this.handleChange}
                            value={this.state.avatar}
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