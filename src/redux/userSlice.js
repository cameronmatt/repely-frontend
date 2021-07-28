import { createSlice } from '@reduxjs/toolkit';
import { User } from '../components/Dashboard';

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        findUser: (state, action) => {
            console.log('USER IN STORE', action)
            // const currentUser = action.payload.map(user => {
            //     return user
            // })
        }
    },
})

export const {findUser} = userSlice.actions;

export default userSlice.reducer;