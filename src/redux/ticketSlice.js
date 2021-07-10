import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
        }
        
    }
})

export const { 
    addTicket,
    toggleStatus,
 } = ticketSlice.actions;

export default ticketSlice.reducer;