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

// export const getTicketAsync = createAsyncThunk(
//     'todos/getTicketAsync', 
//     async (payload) => {
//         const response = await fetch(`http://localhost:3001/api/v1/tickets/${payload.id}`);
//         if(response.ok) {
//             const ticket = await response.json();
//             return { ticket }
//         }
//     }
// );

export const addTicketAsync = createAsyncThunk(
    'todos/addTicketAsync', 
    async (payload) => {
        const response = await fetch('http://localhost:3001/api/v1/tickets', {
            method: 'POST', 
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({ 
                title: payload.title,
                description: payload.description,
                category: payload.category,
            })
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
        showTicket: (state, action) => {
            console.log("WHAT IS STATE", state.tickets)
            // const index = state.find(
            //     (ticket) => ticket.id === action.payload.id
            //     );
            //     console.log("GET Ticket", action.payload)
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
            console.log('fetching data...') //Could be used for loading
        },
        [getTicketsAsync.fulfilled]: (state, action) => {
            console.log('fetched data successfully!', action.payload.tickets)
            return action.payload.tickets
        },
        // [getTicketAsync.fulfilled]: (state, action) => {
        //     console.log('One Ticket!', action.payload.ticket)
        //     return action.payload.ticket
        // },
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
    showTicket,
    toggleStatus,
    deleteTicket,
 } = ticketSlice.actions;

export default ticketSlice.reducer;