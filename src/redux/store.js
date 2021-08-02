import {configureStore} from '@reduxjs/toolkit';
import ticketReducer from './ticketSlice';
import userReducer from './userSlice';

export default configureStore({
    reducer: {
        tickets: ticketReducer,
        currentUser: userReducer
    }
})