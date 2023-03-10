import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from '../../Services/util';

const initialStateValue = getUserData();

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: initialStateValue },
    reducers: {
        loginUser: (state, action) => {
            state.value = action.payload;
        },

        logoutUser: (state, action) => {
            state.value = undefined;
        }
    }
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;