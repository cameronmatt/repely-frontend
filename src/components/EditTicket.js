import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusAsync, deleteTicketAsync } from '../redux/ticketSlice';
import { showTicket } from '../redux/ticketSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const ModalBackground = styled.div`
    
`;
export const ModalContainer = styled.div`
    
`;
export const CancelButton = styled.div`
    float: right;
`;

export const DeleteButton = styled.div`
    float: right;
    padding: 10px;
`;
export const TicketTitle = styled.div`
    width: 90%;
    padding: 5px;
`;
export const TicketDescription = styled.div`
    padding: 5px;
`;
export const TicketCategory = styled.div`
    padding: 5px;
`;
export const StatusChange = styled.div`
    padding: 10px;
    float: left;
`;

const EditTicket = ({ id, onHide }) => {

    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(showTicket({ id: id }))
	}, [dispatch])

    const ticketData = useSelector((state) => state.tickets);
    const selectedTicket = ticketData.find((ticket) => ticket.id === id)

    console.log('does this get the TICKET', [selectedTicket])

    const handleStatusChange = (event) => {
		dispatch(
            toggleStatusAsync({ id: selectedTicket.id, status: event.target.value })
		)
	}

    const handleDeleteClick = () => {
		dispatch(
			deleteTicketAsync({ id: selectedTicket.id, status: "delete" })
		)
	}

    //     const [value, setValue] = useState('');
    //     const [descriptionValue, setDescriptionValue] = useState('');
    //     const [categoryValue, setCategoryValue] = useState('');
    
        // const onSubmit = (event) => {
        //     event.preventDefault();
        //     dispatch(
        //         toggleStatusAsync({
        //             title: value,
        //             description: descriptionValue,
        //             category: categoryValue,
        //         })
        //     )
        // };
	 

    return (
        <ModalBackground>
            <ModalContainer>
                <div>
                    <form className='form-inline mt-3 mb-3'>
                        <CancelButton>
                            <Button variant="outline-danger text-left" onClick={onHide}>
                                X
                            </Button>
                        </CancelButton>
                        <label className='sr-only'>Title</label>
                        <TicketTitle className="border border-1 rounded">{selectedTicket.title}</TicketTitle>
                        <label className='sr-only'>Description</label>
                        <TicketDescription className="border border-1 rounded">{selectedTicket.description}</TicketDescription>
                        <label className='sr-only'>Category</label>
                        <TicketCategory className="border border-1 rounded">{selectedTicket.category}</TicketCategory> 
                        <StatusChange>
                            <select 
                                className='btn btn-warning'
                                value={selectedTicket.status}
                                onChange={handleStatusChange}
                                >Change Status
                                <option value="new">New</option>
                                <option value="wip">WIP</option>
                                <option value="done">Done</option>
                            </select>
                        </StatusChange>
                        <DeleteButton>
                            <Button onClick={handleDeleteClick} variant='outline-primary'>Delete</Button>
                        </DeleteButton>
                    </form>
                </div>



                {/* <div>
                    <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
                        <label className='sr-only'>Title</label>
                        <input
                            type='text'
                            className='form-control mb-2 mr-sm-2'
                            placeholder='Add Title...'
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        ></input>
                        <label className='sr-only'>Description</label>
                        <input
                            type='text'
                            className='form-control mb-2 mr-sm-2'
                            placeholder='Add Description...'
                            value={descriptionValue}
                            onChange={(event) => setDescriptionValue(event.target.value)}
                        ></input>
                        <label className='sr-only'>Category</label>
                        <select 
                            className="form-select"
                            value={categoryValue}
                            onChange={(event) => setCategoryValue(event.target.value)}
                            >
                            <option defaultValue>Select a category</option>
                            <option value="feedback">Feedback</option>
                            <option value="feature-request">Feature Request</option>
                            <option value="bug">Bug</option>
                        </select>
                        <select 
                            className='btn btn-warning'
                            value={status}
                            onChange={handleStatusChange}
                            >Change Status
                            <option value="new">New</option>
                            <option value="wip">WIP</option>
                            <option value="done">Done</option>
                        </select>
                        <Button onClick={handleDeleteClick} variant='outline-danger'>Delete</Button>

                        <Button type='submit' variant="primary" onClick={onHide}>
                            Submit
                        </Button>
                        <Button variant="danger" onClick={onHide}>
                            Cancel
                        </Button>
                    </form>
                </div> */}
            </ModalContainer>
        </ModalBackground>
        
    );
};


export default EditTicket;