import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTicketsAsync = createAsyncThunk(
    'todos/getTicketsAsync', 
    async () => {
        const response = await fetch('http://localhost:3001/api/v1/tickets');
        if(response.ok) {
            const tickets = await response.json();
            return { tickets }
        }
    }

);

export const addTicketAsync = createAsyncThunk(
    'todos/addTicketAsync', 
    async (payload) => {
        const response = await fetch('http://localhost:3001/api/v1/tickets', {
            method: 'POST', 
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({ title: payload.title })
        });
        if(response.ok) {
            const ticket = await response.json();
            return { ticket }
        }
    }
);

export const toggleStatusAsync = createAsyncThunk(
    'todos/toggleStatusAsync', 
    async (payload) => {
        const response = await fetch(`http://localhost:3001/api/v1/tickets/${payload.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({ status: payload.status })
        });
        if(response.ok) {
            const ticket = await response.json();
            return { id: ticket.id, status: ticket.status };
        }
    }

);

export const deleteTicketAsync = createAsyncThunk(
    'todos/deleteTicketAsync', 
    async (payload) => {
        const response = await fetch(`http://localhost:3001/api/v1/tickets/${payload.id}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({ id: payload.id })
        });
        console.log("looking for response", response.ok)
        if(response.ok) {
            const tickets = await response.json();
            console.log("looking for tickets", tickets)
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
        toggleStatus: (state, action) => {
            const index = state.findIndex(
                (ticket) => ticket.id ===action.payload.id
                );
                state[index].status = action.payload.status
        },
        deleteTicket: (state, action) => {
            return state.filter((ticket) => ticket.id !== action.payload.id)
        },
    },
    extraReducers: {
        [getTicketsAsync.pending]: (state, action) => {
            console.log('fetching data...') //Could be used for loading
        },
        [getTicketsAsync.fulfilled]: (state, action) => {
            console.log('fetched data successfully!')
            return action.payload.tickets
        },
        [addTicketAsync.fulfilled]: (state, action) => {
            state.push(action.payload.ticket);
        },
        [toggleStatusAsync.fulfilled]: (state, action) => {
            const index = state.findIndex(
                (ticket) => ticket.id === action.payload.id
            );
            state[index].status = action.payload.status
        },
        [deleteTicketAsync.fulfilled]: (state, action) => {
            return state.filter((ticket) => ticket.id !== action.payload.id)
        },
    }
})

export const { 
    addTicket,
    toggleStatus,
    deleteTicket,
 } = ticketSlice.actions;

export default ticketSlice.reducer;