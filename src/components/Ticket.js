import React from 'react';

const Ticket = ({ id, title, status }) => {
    return (
		<li className={`list-group-item ${status && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<button 
						type='checkbox' 
						className='btn btn-warning'
						checked={status}>Mark as Done
					</button>
					{title}
				</span>
				<button className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default Ticket;