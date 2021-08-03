import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAsync } from '../redux/ticketSlice';

const AddComment = () => {
    
    const comments = useSelector((state) => console.log("WHAT IS COMMENTS STORE", state));
    //console.log("WHAT IS COMMENTS", comments)

    return(
        <div>
            
        </div>

    )


}

export default AddComment