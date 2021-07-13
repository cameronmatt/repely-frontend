import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatusAsync, deleteTicketAsync } from '../redux/ticketSlice';

const Ticket = ({ id, title, status }) => {

    const dispatch = useDispatch()

    const handleStatusClick	 = () => {
		dispatch(
			// toggleStatus({ id: id, status: option.value})
            toggleStatusAsync({ id: id})
		)
	}

    const handleDeleteClick = () => {
		dispatch(
			deleteTicketAsync({ id: id })
		)
	}

    return (
		// <li className={`list-group-item ${status && 'list-group-item-success'}`}>
		<li  class="card">
			<div class="card-body">
				<h5 class="card-title">{title}</h5>
					<select 
						// type='checkbox' 
						className='btn btn-warning'
						// value={option.value}
                        onChange={handleStatusClick}
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