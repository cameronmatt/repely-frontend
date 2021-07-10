import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
    name: "tickets",
    initialState: [
        { id: 1, title: 'ticket 1', status: 'new'},
        { id: 2, title: 'ticket 2', status: 'new'},
        { id: 3, title: 'ticket 3', status: 'new'},
        { id: 4, title: 'ticket 4', status: 'new'},
        { id: 5, title: 'ticket 5', status: 'done'},
    ],
    reducers: {
        addTicket: (state, action) => {
            const newTicket = {
                id: Date.now(), 
                title: action.payload.title, 
                status: 'new',
            };
            state.push(newTicket);
        }
    }
})

export const { addTicket } = ticketSlice.actions;

export default ticketSlice.reducer;