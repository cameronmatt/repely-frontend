import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default class Logout extends Component {

    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
      }

      handleLogoutClick() {
          axios
          .delete("http://localhost:3001/logout", { withCredentials: true })
          .then(response => {
              this.props.handleLogout();
          })
          .catch(error => {
              console.log("logout error", error)
          })
      }

    render() {
        return (
            <div>
                <Button onClick={() => this.handleLogoutClick()}>Logout</Button>
            </div>
        );
    }
}


// import React, { Component } from "react";
// import axios from 'axios';

// const Logout = (props) => {

//     const handleLogoutClick = () => {
//         axios
//         .delete("http://localhost:3001/logout", { withCredentials: true })
//         .then(response => {
//             props.handleLogout();
//         })
//         .catch(error => {
//               console.log("logout error", error)
//         })
//     }

//     return (
//         <div>
//             <button onClick={() => handleLogoutClick()}>Logout</button>
//         </div>
//     );


// }

// export default Logout;