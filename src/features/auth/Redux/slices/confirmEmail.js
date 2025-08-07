import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const confirmEmailApi = 'http://localhost:3000/auth/confirm-email';

// Async thunk for signup
export const confirmEmail = createAsyncThunk(
    'auth/confirm-email',
    async (userData, thunkAPI) => {
        try {
            const res = await axios.patch(confirmEmailApi, userData);
            console.log(res.data);
            
            return res.data; 
        } catch (error) {
            const message = error.response?.data?.message || 'OTP confirmation failed.';
            return thunkAPI.rejectWithValue(message);;
        }
    }
);

// Initial state
const initialState = {
    // isLoading: false,
    isError: null,
    data: null, // assuming one user object
};

// Slice
const confirmEmailSlice = createSlice({
    name: 'confirmEmail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(confirmEmail.pending, (state) => {
                // state.isLoading = true;
                state.isError = null;
                state.data = null; // Reset data on new request
            })
            .addCase(confirmEmail.fulfilled, (state, action) => {
                // state.isLoading = false;
                state.data = action.payload;
                state.isError = null; // Clear error on success
            })
            .addCase(confirmEmail.rejected, (state, action) => {
                // state.isLoading = false;
                state.isError = action.payload;
                state.data = null; // Clear data on error
            });
    }
});

export default confirmEmailSlice.reducer;;
