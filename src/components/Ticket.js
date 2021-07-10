import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatus } from '../redux/ticketSlice';

const Ticket = ({ id, title, status }) => {

    const dispatch = useDispatch()

    const handleStatusClick	 = () => {
		dispatch(
			// toggleStatus({ id: id, status: option.value})
            toggleStatus({ id: id})
		)
	}

    return (
		<li className={`list-group-item ${status && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
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
					{title}
				</span>
				<button className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default Ticket;