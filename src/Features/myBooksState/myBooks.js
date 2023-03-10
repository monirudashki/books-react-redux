import { createSlice } from "@reduxjs/toolkit";
import { getMyBooksData } from "./myBooksThunk";

const myBooksInitialState = {
    data: [],
    isSuccess: false,
    message: '',
    isLoading: false,
    isEditMode: false,
    isDeleteMode: false
}

export const myBooksSlice = createSlice({
    name: 'myBooks',
    initialState: myBooksInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMyBooksData.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(getMyBooksData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.data = payload;
                state.isSuccess = true;
            })
            .addCase(getMyBooksData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.message = payload;
            })
    }
});

export default myBooksInitialState;