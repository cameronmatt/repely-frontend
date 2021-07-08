import { GET_TICKETS } from '../actions/index'

const INITIAL_STATE = {all: [], ticket: null};

export default function(state = INITIAL_STATE, action ){
    switch(action.type){
        case GET_TICKETS:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}