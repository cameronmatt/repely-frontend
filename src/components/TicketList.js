import React, { useEffect } from 'react';
import Ticket from './Ticket';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsAsync } from '../redux/ticketSlice';
import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
	height: 100vh;
`;
export const Row = styled.div`
	
`;

export const Col = styled.div`

`;

const TicketList = () => {

    const dispatch = useDispatch();

    const tickets = useSelector((state) => state.tickets);

	const newTickets = tickets.filter((ticket) => ticket.status === 'new')
	const wipTickets = tickets.filter((ticket) => ticket.status === 'wip')
	const doneTickets = tickets.filter((ticket) => ticket.status === 'done')

    useEffect(() => {
		dispatch(getTicketsAsync())
	}, [dispatch])
    
    return (
		<Grid>
			<Row>
				<Col size={1}>
				<h4>NEW</h4>
					<ul>
						{newTickets.map((ticket) => (
							<Ticket id={ticket.id} title={ticket.title} status={ticket.status} />
						))}
					</ul>
				</Col>
			</Row>
			<Row>
				<Col size={2}>
					<h4>WIP</h4>
					<ul>
						{wipTickets.map((ticket) => (
							<Ticket id={ticket.id} title={ticket.title} status={ticket.status} />
						))}
					</ul>
				</Col>
			</Row>
			<Row>
				<Col size={3}>
					<h4>DONE</h4>
					<ul>
						{doneTickets.map((ticket) => (
							<Ticket id={ticket.id} title={ticket.title} status={ticket.status} />
						))}
					</ul>
				</Col>
			</Row>
		</Grid>
		
	);

}

export default TicketList;