import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getCurrentUserAsync = createAsyncThunk(
    'users/getCurrentUserAsync', 
    async () => {
        const response = await fetch('http://localhost:3001/userauth', {
          method: 'GET',
          headers:{
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
          }
        }
        );
        if(response.ok) {
            const currentUser = await response.json();
            console.log("THIS IS THE CURRENT USER", currentUser)
            return currentUser
            
        }
    }
);

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
    extraReducers: {
      [getCurrentUserAsync.fulfilled]: (state, action) => {
          console.log('fetching user...', action)
      },
    }
})

export const {findUser} = userSlice.actions;

export default userSlice.reducer;