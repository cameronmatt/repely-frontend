import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatusAsync, deleteTicketAsync } from '../redux/ticketSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ticket = ({ id, title, status }) => {

    const dispatch = useDispatch()

    const handleStatusChange = (event) => {
		dispatch(
            toggleStatusAsync({ id: id, status: event.target.value })
		)
	}

    const handleDeleteClick = () => {
		dispatch(
			deleteTicketAsync({ id: id, status: "delete" })
		)
	}
	

    return (
		// <li className={`list-group-item ${status && 'list-group-item-success'}`}>
		<li  className="card">
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
					<select 
						className='btn btn-warning'
						value={status}
                        onChange={handleStatusChange}
                        >Change Status
                        <option value="new">New</option>
                        <option value="wip">WIP</option>
                        <option value="done">Done</option>
					</select>
					
				
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default Ticket;