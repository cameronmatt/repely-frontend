import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsAsync } from '../redux/commentSlice';
import Comment from './Comment';

const AddComment = ({id}) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getCommentsAsync({
            ticket: id
            })
        )
	}, [dispatch])

    const ticketComments = useSelector((state) => state.comments);
    //console.log("WHAT IS COMMENTS", ticketComments)

    return(
        <div>
            <p>Comments</p>
            {ticketComments.map((comment, index) => (
                <Comment index={index} usedId={comment.user_id} comment={comment.comment} />
            ))}
        </div>
    )
}

export default AddComment