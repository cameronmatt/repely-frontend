import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const NewTicketsCount = styled.div`
	padding: 5px 0px 0px 10px;
	font-size: 20px;
	font-weight: bold;
`; 

const TotalNewTickets = () => {

    const newTickets = useSelector((state) => 
        state.tickets.filter((ticket) => ticket.status === 'new')
    );

	return (
        <NewTicketsCount>
            ({newTickets.length})
        </NewTicketsCount>
    )
    
};

export default TotalNewTickets;
