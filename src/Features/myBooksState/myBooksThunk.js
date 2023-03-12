import { createAsyncThunk } from "@reduxjs/toolkit";
//import { useSelector } from "react-redux";
import { getMyBooks } from "../../Services/data";
import { getUserData } from "../../Services/util";


export const getMyBooksData = createAsyncThunk("myBooks/getMyBooksData", async (args, {
    rejectWithValue
}) => {

    try {
        const user = getUserData();
        const userId = user._id;
        const data = await getMyBooks(userId);
        return data;
    } catch (error) {
        rejectWithValue(error.response.data);
    }
});