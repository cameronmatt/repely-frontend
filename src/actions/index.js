import { GET_TICKETS } from './types'
import axios from "axios"

const API_URL = "http://localhost:3001/api/v1"

export function getTickets() {
    const request = axios.get(`${API_URL}/tickets`);

    return{
        type: GET_TICKETS, 
        payload:request
    };
}