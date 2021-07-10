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

const ticketSlice = createSlice({
    name: "tickets",
    initialState: [
        { id: 1, title: 'ticket 1', status: 'new'},
        { id: 2, title: 'ticket 2', status: 'new'},
        { id: 3, title: 'ticket 3', status: 'done'},
    ],
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
    }
})

export const { 
    addTicket,
    toggleStatus,
    deleteTicket,
 } = ticketSlice.actions;

export default ticketSlice.reducer;