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
            const user = await response.json();
            //console.log('USER RESPONSE', [{ user }])
            return [{ user }]
            
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        findUser: (state, action) => {
            console.log('USER IN STORE', action)
        }
    },
    extraReducers: {
      [getCurrentUserAsync.fulfilled]: (state, action) => {
          //console.log("USER IN REDUCER", action.payload)
          return action.payload
      },
    }
})

export const {findUser} = userSlice.actions;

export default userSlice.reducer;