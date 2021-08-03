import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getTicketsAsync = createAsyncThunk(
    'tickets/getTicketsAsync', 
    async () => {
        const response = await fetch('http://localhost:3001/tickets');
        if(response.ok) {
            const tickets = await response.json();
            //console.log('TICKETS RESPONSE', tickets)
            return { tickets }
        }
    }
);

export const getTicketAsync = createAsyncThunk(
    'tickets/getTicketAsync', 
    async (payload) => {
        const response = await fetch(`http://localhost:3001/tickets/${payload.id}`);
        if(response.ok) {
            const ticket = await response.json();
            return { ticket }
        }
    }
);

export const addTicketAsync = createAsyncThunk(
    'tickets/addTicketAsync', 
    async (payload) => {
        //console.log("WHAT IS THIS NEW TICKET", payload)
        const response = await fetch('http://localhost:3001/tickets', {
            method: 'POST', 
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({ 
                title: payload.title,
                description: payload.description,
                category: payload.category,
                status: 'new'
            }) 
        });
        if(response.ok) {
            const ticket = await response.json();
            return ticket
        }
    }
);

export const addCommentAsync = createAsyncThunk(
    'tickets/addCommentAsync', 
    async (payload) => {
        //console.log("WHAT IS PROPS ON COMMENTS", payload.ticket.id)
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
            console.log("WHAT IS COMMENTS ASYNC RESPONSE", comment)
            return comment 
        }
    }
);

export const toggleStatusAsync = createAsyncThunk(
    'tickets/toggleStatusAsync', 
    async (payload) => {
        //console.log("WHAT IS THIS NEW TICKET", payload)
        const response = await fetch(`http://localhost:3001/tickets/${payload.id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({ status: payload.status })
            
        });
        //console.log("WHAT IS ToggleButton", response)
        if(response.ok) {
            const ticket = await response.json();
            return { id: ticket.id, status: ticket.status };
            
        }
    }
);

export const deleteTicketAsync = createAsyncThunk(
    'tickets/deleteTicketAsync', 
    async (payload) => {
        const response = await fetch(`http://localhost:3001/tickets/${payload.id}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({ id: payload.id })
        });
        if(response.ok) {
            const tickets = await response.json();
            return { tickets };
        }
    }
);

const ticketSlice = createSlice({
    name: "tickets",
    initialState: [],
    reducers: {
        addTicket: (state, action) => {
            const newTicket = {
                id: Date.now(), 
                title: action.payload.title, 
                status: 'new',
            };
            state.push(newTicket);
        }, 
        addComment: (state, action) => {
            const newComment = {
                comment: action.payload.comment, 
            };
            state.push(newComment);
        }, 
        showTicket: (state, action) => {
            const copyTickets = [...state]
                //console.log("GET Ticket", copyTickets)
                return copyTickets
            // const = tickets.findIndex(
            //     (ticket) => ticket.id === action.payload.id
            //     );
            //     console.log("GET Ticket", state[index].id)
            //     const oneTicket = state[index] === index
            //     return oneTicket
                // return state.filter((ticket) => ticket.id === action.payload.id) 
                // this filtered all results and could be used for search purpose
        },
        toggleStatus: (state, action) => {
            const index = state.findIndex(
                (ticket) => ticket.id === action.payload.id
                ); 
                state[index].status = action.payload.status
                
        },
        deleteTicket: (state, action) => {
            return state.filter((ticket) => ticket.id !== action.payload.id)
        },
    },
    extraReducers: {
        [getTicketsAsync.pending]: (state, action) => {
            //console.log('fetching data...') //Could be used for loading
        },
        [getTicketsAsync.fulfilled]: (state, action) => {
            //console.log("TICKETS IN REDUCER", action.payload.tickets)
            return action.payload.tickets
        },
        [getTicketAsync.fulfilled]: (state, action) => {
            console.log('One Ticket!', action.payload.ticket)
            return action.payload.ticket
        },
        [addTicketAsync.fulfilled]: (state, action) => {
            //console.log("WHAT IS THIS TICKY", action)
            console.log("WHAT IS THIS ARRAY", [...state ,action.payload])
            return [...state ,action.payload];
        },
        [addCommentAsync.fulfilled]: (state, action) => {
            console.log("COMMENTS IN REDUCER", action)
            return [...state ,action.payload];
        },
        [toggleStatusAsync.fulfilled]: (state, action) => {
            //console.log("status change id", action)
            const index = state.findIndex(
                (ticketIndex) => ticketIndex.id === action.meta.arg.id
            ); 
            state[index].status = action.meta.arg.status
        },
        [deleteTicketAsync.fulfilled]: (state, action) => {
            return state.filter((ticket) => ticket.id !== action.payload.id)
        },
    }
})

export const { 
    addTicket,
    showTicket,
    toggleStatus,
    deleteTicket,
 } = ticketSlice.actions;

export default ticketSlice.reducer;