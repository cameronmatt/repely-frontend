import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAsync } from '../redux/ticketSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

const AddComment = (props) => {
    const [commentValue, setCommentValue] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(
            addCommentAsync({
                comment: commentValue,
                ticket: props
            })
        )
        //console.log("WHAT IS PROPS ON COMMENTS", props)
	};


    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-2 mr-sm-2'>
                    <Form.Control  
                        type="text-area" 
                        placeholder="Add your comment"
                        value={commentValue}
                        onChange={(event) => setCommentValue(event.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </Container>

    )


}

export default AddComment