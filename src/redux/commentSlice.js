import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addCommentAsync = createAsyncThunk(
    'comments/addCommentAsync', 
    async (payload) => {
        console.log("WHAT IS PAYLOAD ON COMMENTS", payload.ticket.id)
        const response = await fetch(`http://localhost:3001/tickets/${payload.ticket.id}/comments`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                //comments: { 
                comment: payload.comment,
                //ticket_id: payload.ticket.id
            })
        });
        if(response.ok) {
            const comment = await response.json();
            //console.log("WHAT IS COMMENTS ASYNC RESPONSE", comment)
            return comment 
        }
    }
);

export const getCommentsAsync = createAsyncThunk(
    'comments/getCommentsAsync', 
    async (payload) => {
        //console.log("WHAT IS PROPS ON GET COMMENTS", `http://localhost:3001/tickets/${payload.ticket}/comments`)
        const response = await fetch(`http://localhost:3001/tickets/${payload.ticket}/comments`);
        //console.log('COMMENTS RESPONSE OK?', response)
        if(response.ok) {
            const comments = await response.json();
            //console.log('COMMENTS RESPONSE', comments)
            return { comments }
        }
    }
);

// export const deleteCommentAsync = createAsyncThunk(
//     'tickets/deleteCommentAsync', 
//     async (payload) => {
//         const response = await fetch(`http://localhost:3001/tickets/${payload.id}/comments${payload.id}`, {
//             method: 'DELETE', 
//             headers: {
//                 'Content-Type': 'Application/json',
//             },
//             body: JSON.stringify({ id: payload.id })
//         });
//         if(response.ok) {
//             const comments = await response.json();
//             return { comments };
//         }
//     }
// );

const commentSlice = createSlice({
    name: "comments",
    initialState: [],
    reducers: {
        // addComment: (state, action) => {
        //     const newComment = {
        //         comment: action.payload.comment, 
        //     };
        //     state.push(newComment);
        // }, 
        // showComments: (state, action) => {
        //     const copyTickets = [...state]
        //         //console.log("GET Ticket", copyTickets)
        //         return copyTickets
        // },
        // deleteComment: (state, action) => {
        //     return state.filter((comment) => comment.id !== action.payload.id)
        // },
    },
    extraReducers: {
        [getCommentsAsync.fulfilled]: (state, action) => {
            console.log("GET COMMENTS FROM REDUCER", action.payload.comments)
            return action.payload.comments
        },
        [addCommentAsync.fulfilled]: (state, action) => {
            console.log("ADD COMMENTS IN REDUCER", action)
            return [...state ,action.payload];
        },
        // [deleteCommentAsync.fulfilled]: (state, action) => {
        //     return state.filter((ticket) => ticket.id !== action.payload.id)
        // },
    }
})

export const { 
    addComment,
    showComments,
 } = commentSlice.actions;

export default commentSlice.reducer;