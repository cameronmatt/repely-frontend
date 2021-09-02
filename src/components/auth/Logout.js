import React, { Component } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Logout = (props) => {

    //this.handleLogoutClick = this.handleLogoutClick.bind(this);
    console.log("WHAT IS LOGOUT PROPS", props.currentUser)
    const history = useHistory();

      const handleLogoutClick = () => {
        localStorage.removeItem("jwt");
        history.push('/')
      }
      
    return (
        <div>
            <Button onClick={() => handleLogoutClick()}>Logout</Button>
        </div>
    );  
}

export default Logout; 

// class Logout extends Component {

//     constructor(props) {
//         super(props);

//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         console.log("WHAT IS LOGOUT PROPS", this.props)
//       }

//       handleLogoutClick() {
//           axios
//           .delete(`http://localhost:3001/users/${this.props.currentUser.id}`)
//           .then(response => {
//               this.props.handleLogout();
//           })
//           .catch(error => {
//               console.log("logout error", error)
//           })
//       }
      

//     render() {
//         return (
//             <div>
//                 <Button onClick={() => this.handleLogoutClick()}>Logout</Button>
//             </div>
//         );
//     }
// }

// export default Logout; 