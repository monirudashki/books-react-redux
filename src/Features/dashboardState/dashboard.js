import { createSlice } from "@reduxjs/toolkit";
import { getDashboardData } from "./dashboardThunk";

const dashboardInitialState = {
    data: [],
    isSuccess: false,
    message: '',
    isLoading: false
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: dashboardInitialState,
    reducers: {},
    extraReducers: {
        [getDashboardData.pending]: (state, { payload }) => {
            state.isLoading = true;
        },
        [getDashboardData.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [getDashboardData.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.message = payload;
        },
    }
});

export default dashboardSlice;