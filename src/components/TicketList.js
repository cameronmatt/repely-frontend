import React, { useEffect } from 'react';
import Ticket from './Ticket';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsAsync } from '../redux/ticketSlice';
import styled from 'styled-components';
import TotalNewTickets from './TotalNewTickets';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
	height: 100vh;
	margin: auto;
	width: 60rem;
`;
export const Row = styled.div`
	
`;

export const Col = styled.div`
	margin: 5px;
	background-color: #EAECEE;
	border-width: 40px;
	border-color: blue;
	width: 19rem
`;

export const Subheader = styled.div`
	padding: 5px 0px 0px 10px;
	font-size: 20px;
	font-weight: bold;
`; 
export const ColumnHeader = styled.div`
	display: flex;
`;

const TicketList = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTicketsAsync())
	}, [dispatch])

	const tickets = useSelector((state) => state.tickets);
	//console.log("CURRENT TICKETS", tickets)

	const newTickets = tickets.filter((ticket) => ticket.status === 'new')
	const wipTickets = tickets.filter((ticket) => ticket.status === 'wip')
	const doneTickets = tickets.filter((ticket) => ticket.status === 'done')

	return (

		<Grid>
			<Row>
				<Col size={1} className="border border-3 rounded">
					<ColumnHeader>
						<Subheader>NEW</Subheader><TotalNewTickets />
					</ColumnHeader>
						{newTickets.map((ticket, index) => (
							<Ticket id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} index={index} />
						))}
				</Col>
			</Row>
			<Row>
				<Col size={2} className="border border-3 border-warning rounded">
					<Subheader>WIP</Subheader>
						{wipTickets.map((ticket, index) => (
							<Ticket id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} index={index} />
						))}
				</Col>
			</Row>
			<Row>
				<Col size={3} className="border border-3 border-success rounded">
					<Subheader>DONE</Subheader>

						{doneTickets.map((ticket, index) => (
							<Ticket id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} index={index} />
						))}
				</Col>
			</Row>
		</Grid>

	);

}

export default TicketList;

