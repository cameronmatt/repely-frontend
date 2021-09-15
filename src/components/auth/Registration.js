import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //   });
    // }

    handleSubmit(event) {
        axios.post("http://localhost:3001/auth/signup", {
            user:{ 
            username: this.state.fields["username"],
            email: this.state.fields["email"], 
            password: this.state.fields["password"],
            password_confirmation: this.state.fields["password_confirmation"],
            avatar: this.state.fields["avatar"]
            } 
        })
        .then(response => {
            console.log("WHAT IS THE RESPONSE", response)
            if (response.status === 201) {
                this.props.handleSuccessfulAuth(response.data);
                localStorage.setItem("jwt", response.data.jwt)
            } 
        })
        .catch(error => {
            console.log("Reg error", error)
        });
        event.preventDefault();
    }

    ////////////////////////////////////////////////////////////
  
    handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //username
      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "Cannot be empty";
      }
  
      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          errors["username"] = "Only letters";
        }
      }
  
      //Email
      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "Cannot be empty";
      }
  
      if (typeof fields["email"] !== "undefined") {
        let lastAtPos = fields["email"].lastIndexOf("@");
        let lastDotPos = fields["email"].lastIndexOf(".");
  
        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            fields["email"].indexOf("@@") == -1 &&
            lastDotPos > 2 &&
            fields["email"].length - lastDotPos > 2
          )
        ) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
      }
  
      this.setState({ errors: errors });
      return formIsValid;
    }
  
    // contactSubmit(e) {
    //   e.preventDefault();
  
    //   if (this.handleValidation()) {
    //     alert("Form submitted");
    //   } else {
    //     alert("Form has errors.");
    //   }
    // }
  
    handleChange(field, event) {
      let fields = this.state.fields;
      fields[field] = event.target.value;
      this.setState({ fields });
      this.setState({
        [event.target.name]: event.target.value
  });
    }
    ////////////////////////////////////////////////////////////

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit.bind(this)}
                      name="contactform"
                      className="contactform"
                >
                  <fieldset>
                    <Form.Group controlId="form.Name" className='mb-2 mr-sm-2'>
                        
                          <input
                            ref="name"
                            type="text" 
                            size="30"
                            name="username" 
                            placeholder="Username"
                            value={this.state.fields["username"]}
                            onChange={this.handleChange.bind(this, "username")}
                            required
                          />
                        <span style={{ color: "red" }}>{this.state.errors["username"]}</span>
                    </Form.Group>
                    <Form.Group controlId="form.Email" className='mb-2 mr-sm-2'>
                          <input 
                            name="email" 
                            refs="email"
                            type="text"
                            size="30"
                            placeholder="Email"
                            onChange={this.handleChange.bind(this, "email")}
                            value={this.state.fields["email"]}
                            required
                        />
                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className='mb-2 mr-sm-2'>
                          <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                          />
                    </Form.Group>   
                    <Form.Group controlId="formBasicPasswordConfirmation" className='mb-2 mr-sm-2'>
                          <input 
                            type="password" 
                            name="password_confirmation" 
                            placeholder="Password confirmation"
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                            required
                          />
                    </Form.Group>

                    <Form.Group className='mb-2 mr-sm-2'>
                        <input
                            type="text" 
                            label="Add the URL to your avatar"
                            name="avatar" 
                            placeholder="Enter URL of your avatar"
                            onChange={this.handleChange}
                            value={this.state.avatar}
                            required
                        />
                    </Form.Group>
                    </fieldset>
                    <Form.Group>
                        <Button type="submit">Register</Button>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}