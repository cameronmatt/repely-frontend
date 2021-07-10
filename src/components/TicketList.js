import React, { useEffect } from 'react';
import Ticket from './Ticket';
import { useSelector } from 'react-redux';

const TicketList = () => {

    const tickets = useSelector((state) => state.tickets);
	// This where I will need to filter my lists ^^^

    return (
		<ul className='list-group'>
			{tickets.map((ticket) => (
				<Ticket id={ticket.id} title={ticket.title} status={ticket.status} />
			))}
		</ul>
	);

}

export default TicketList;