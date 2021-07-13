import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTicketAsync } from '../redux/ticketSlice';
import styled from 'styled-components';

export const modalBackground = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(200, 200, 200);
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const modalContainer = styled.div`
	width: 500px;
	height: 500px;
	border-radius: 12px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	display: flex;
	flex-direction: column;
	padding: 25px;
`;
export const Col = styled.div`
	
`;

const AddTicket = () => {
	const [value, setValue] = useState('');

    const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
            addTicketAsync({
                title: value
            })
        )
	};

	return (
		<modalBackground>
			<modalContainer>
				<div className="titleCloseBtn">
					<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
						<label className='sr-only'>Title</label>
						<input
							type='text'
							className='form-control mb-2 mr-sm-2'
							placeholder='Add ticket...'
							value={value}
							onChange={(event) => setValue(event.target.value)}
						></input>

						<button type='submit' className='btn btn-primary mb-2'>
							Submit
						</button>
					</form>
				</div>
			</modalContainer>
    	</modalBackground>
	);
};

export default AddTicket;