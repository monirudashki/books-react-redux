import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    message: ''
}

export const errorSlice = createSlice({
    name: 'error',
    initialState: { value: initialStateValue },
    reducers: {
        setErrorMessage: (state, { payload }) => {
            state.value.message = payload;
        }
    }
});

export const { setErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;