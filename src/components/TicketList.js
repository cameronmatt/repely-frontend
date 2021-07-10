import React, { useEffect } from 'react';
import Ticket from './Ticket';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsAsync } from '../redux/ticketSlice';

const TicketList = () => {

    const dispatch = useDispatch();

    const tickets = useSelector((state) => state.tickets);
	// This where I will need to filter my lists ^^^

    useEffect(() => {
		dispatch(getTicketsAsync())
	}, [dispatch])
    
    return (
		<ul className='list-group'>
			{tickets.map((ticket) => (
				<Ticket id={ticket.id} title={ticket.title} status={ticket.status} />
			))}
		</ul>
	);

}

export default TicketList;