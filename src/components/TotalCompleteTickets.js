import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteTickets = () => {

    const completedTickets = useSelector((state) => 
        state.tickets.filter((ticket) => ticket.status === 'done')
    );

	return <h4 className='mt-3'>Total Done Tickets: {completedTickets.length}</h4>;
};

export default TotalCompleteTickets;
