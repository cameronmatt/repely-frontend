import React, { useEffect } from 'react';
import Ticket from './Ticket';

const TicketList = () => {

    const tickets = [
        { id: 1, title: 'ticket 1', status: 'new'},
        { id: 2, title: 'ticket 2', status: 'new'},
        { id: 3, title: 'ticket 3', status: 'new'},
        { id: 4, title: 'ticket 4', status: 'new'},
        { id: 5, title: 'ticket 5', status: 'done'},
    ]

    return (
		<ul className='list-group'>
			{tickets.map((ticket) => (
				<Ticket id={ticket.id} title={ticket.title} status={ticket.status} />
			))}
		</ul>
	);

}

export default TicketList;