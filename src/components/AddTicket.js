import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTicketAsync } from '../redux/ticketSlice';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export const ModalBackground = styled.div`

`;
export const ModalContainer = styled.div`

`;
export const Col = styled.div`
	
`;

const AddTicket = (props) => {
	const [value, setValue] = useState('');
	const [descriptionValue, setDescriptionValue] = useState('');
	const [categoryValue, setCategoryValue] = useState('');

    const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
            addTicketAsync({
                title: value,
				description: descriptionValue,
				category: categoryValue,
            })
        )
	};

	return (
		<ModalBackground>
			<ModalContainer>
				<div>
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
							class="form-select"
							value={categoryValue}
							onChange={(event) => setCategoryValue(event.target.value)}
							>
							<option selected>Select a category</option>
							<option value="feedback">Feedback</option>
							<option value="feature-request">Feature Request</option>
							<option value="bug">Bug</option>
						</select>
						
						<Button type='submit' variant="primary" onClick={props.onHide}>
							Submit
						</Button>
						<Button variant="danger" onClick={props.onHide}>
							Cancel
						</Button>
					</form>
				</div>
			</ModalContainer>
    	</ModalBackground>
	);
};

export default AddTicket;