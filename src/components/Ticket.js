import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { toggleStatusAsync, deleteTicketAsync } from '../redux/ticketSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Modal } from 'react-bootstrap';
import EditTicket from './EditTicket'
import styled from 'styled-components';

export const TicketCard = styled.div`
	cursor: pointer;
	padding: 5px;
`;

const Ticket = (props) => {

    //const dispatch = useDispatch()

    // const handleStatusChange = (event) => {
	// 	dispatch(
    //         toggleStatusAsync({ id: id, status: event.target.value })
	// 	)
	// }

    // const handleDeleteClick = () => {
	// 	dispatch(
	// 		deleteTicketAsync({ id: id, status: "delete" })
	// 	)
	// }

	const[show,popup]=useState(false)
  	const modalOpen = () => popup(true)
  	const modalClose = () => popup(false)


	  //console.log('what is props', props)

	return (
		<TicketCard>
			<Card style={{ width: '18rem' }}>
				<Card.Body onClick={modalOpen}>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.id}</Card.Text>
				</Card.Body>
			</Card>
			<Modal show={show} >
				<Modal.Body>
					<EditTicket onHide={modalClose} id={props.id}/>
				</Modal.Body>
			</Modal>
		</TicketCard>
	)





    //return (
		// <li className={`list-group-item ${status && 'list-group-item-success'}`}>
		// <li  className="card">
		// 	<div className="card-body">
		// 		<h5 className="card-title">{title}</h5>
		// 			<select 
		// 				className='btn btn-warning'
		// 				value={status}
        //                 onChange={handleStatusChange}
        //                 >Change Status
        //                 <option value="new">New</option>
        //                 <option value="wip">WIP</option>
        //                 <option value="done">Done</option>
		// 			</select>
		// 			<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
		// 			<Modal show={show} >
		// 				<Modal.Body>
		// 					<EditTicket onHide={modalClose}/>
		// 				</Modal.Body>
		// 			</Modal>
		// 	</div>
		// </li>
	// );
};

export default Ticket;