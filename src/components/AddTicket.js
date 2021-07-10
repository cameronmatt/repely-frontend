import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTicket } from '../redux/ticketSlice';

const AddTicket = () => {
	const [value, setValue] = useState('');

    const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
            addTicket({
                title: value
            })
        )
	};

	return (
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
	);
};

export default AddTicket;