import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks } from "../../Services/data";


export const getDashboardData = createAsyncThunk("dashboard/getDashboardData", async (args, {
    rejectWithValue
}) => {

    try {
        const data = await getAllBooks();
        return data;
    } catch (error) {
        rejectWithValue(error.response.data);
    }
});