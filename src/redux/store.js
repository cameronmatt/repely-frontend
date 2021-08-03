import {configureStore} from '@reduxjs/toolkit';
import ticketReducer from './ticketSlice';
import userReducer from './userSlice';
import commentReducer from './commentSlice';
import logger from 'redux-logger'
import { applyMiddleware } from 'redux';

export default configureStore({
    reducer: {
        tickets: ticketReducer,
        user: userReducer,
        comments: commentReducer
    }
},applyMiddleware(logger))