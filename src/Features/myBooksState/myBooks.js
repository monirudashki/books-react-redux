import { createSlice, current } from "@reduxjs/toolkit";
import { getMyBooksData } from "./myBooksThunk";

const myBooksInitialState = {
    data: [],
    isSuccess: false,
    message: '',
    isLoading: false,
    isEditMode: false,
    isDeleteMode: false,
    currentBook: {},
    currentBookId: ''
}

export const myBooksSlice = createSlice({
    name: 'myBooks',
    initialState: myBooksInitialState,
    reducers: {
        currentBookData: (state, { payload }) => {
            state.currentBook = payload;
        },
        editModeToggle: (state, { payload }) => {
            state.isEditMode = payload;
        },
        deleteModeToggle: (state, { payload }) => {
            state.isDeleteMode = payload
        },
        getCurrentBookId: (state, { payload }) => {
            state.currentBookId = payload;
        },
        editBook: (state, { payload }) => {
            const data = current(state.data).filter((x) => x._id !== payload._id);
            data.unshift(payload);
            state.data = data;
        },
        deleteBook: (state, { payload }) => {
            state.data = current(state.data).filter((x) => x._id !== payload);
        }
    },
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

export const {
    currentBookData,
    editModeToggle,
    getCurrentBookId,
    editBook,
    deleteModeToggle,
    deleteBook
}
    = myBooksSlice.actions

export default myBooksInitialState;