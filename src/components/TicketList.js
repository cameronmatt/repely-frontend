import React, { useEffect } from 'react';
import Ticket from './Ticket';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsAsync } from '../redux/ticketSlice';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
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
	margin: 5px;
	background-color: #EAECEE;
	border-width: 40px;
`;

export const Subheader = styled.div`
	padding: 5px 0px 0px 10px;
	font-size: 20px;
	font-weight: bold;
`;

const TicketList = () => {

    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTicketsAsync())
	}, [dispatch])

    const tickets = useSelector((state) => state.tickets);

	const newTickets = tickets.filter((ticket) => ticket.status === 'new')
	const wipTickets = tickets.filter((ticket) => ticket.status === 'wip')
	const doneTickets = tickets.filter((ticket) => ticket.status === 'done')
    
    return (
		<Grid>
			<DragDropContext>
			<Row>
				<Droppable>
				<Col size={1} className="border border-3 border-primary rounded">
				<Subheader>NEW</Subheader>
					<Draggable>
					<ul>
						{newTickets.map((ticket) => (
							<Ticket id={ticket.id} title={ticket.title} status={ticket.status} />
						))}
					</ul>
				</Col>
				</Droppable>
			</Row>
			<Row>
				<Droppable>
				<Col size={2} className="border border-3 border-warning rounded">
					<Subheader>WIP</Subheader>
					<Draggable>
					<ul>
						{wipTickets.map((ticket) => (
							<Ticket id={ticket.id} title={ticket.title} status={ticket.status} />
						))}
					</ul>
					</Draggable>
				</Col>
				</Droppable>
			</Row>
			<Row>
				<Droppable>
				<Col size={3} className="border border-3 border-success rounded">
					<Subheader>DONE</Subheader>
					<Draggable>
					<ul>
						{doneTickets.map((ticket) => (
							<Ticket id={ticket.id} title={ticket.title} status={ticket.status} />
						))}
					</ul>
					</Draggable>
				</Col>
				</Droppable>
			</Row>
			</DragDropContext>
		</Grid>
		
	);

}

export default TicketList;