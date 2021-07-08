import { combineReducers } from 'redux';
import TicketsReducer from "./tickets_reducer"

const allReducers = combineReducers({
    tickets: TicketsReducer
})

export default allReducers