// import React, { Component } from "react";
// import { connect } from 'react-redux';

// const Dashboard = props => {



//     return (
//         <div>
//             <div>
//                 <h1>Dashboard</h1>
//                 <h1>Status: {props.loggedInStatus}</h1>
//             </div>
//         </div>
//     );
// };

// export default connect(null, {getTickets})(Dashboard);


import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        // this.componentWillMount = this.componentWillMount.bind(this);
      }

    // componentWillMount() {
    //     this.props.getTickets();
    // }

 render() {
   return (
    <div>
        <div>
            <h1>Dashboard</h1>
            <h1>Status: {this.props.loggedInStatus}</h1>
            <Link to="dashboard/new" class="btn"> Create Ticket</Link>
        </div>
    </div>
   )}
}

// export default connect(null, {getTickets})(Dashboard);
export default Dashboard;