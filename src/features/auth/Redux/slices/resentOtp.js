import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const resendOtplApi = 'http://localhost:3000/auth/request-new-confirm-email';

// Async thunk for signup
export const resendOtp = createAsyncThunk(
    'auth/request-new-confirm-email',
    async (userData, thunkAPI) => {
        try {
            const res = await axios.patch(resendOtplApi, userData);
            console.log(res.data);
            
            return res.data; 
        } catch (error) {
            const message = error.response?.data?.message || 'Resend Otp failed.';
            return thunkAPI.rejectWithValue(message);;
        }
    }
);

// Initial state
const initialState = {
    // isLoading: false,
    isError: null,
    data: null,
};

// Slice
const resendOtpSlice = createSlice({
    name: 'resendOtp',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resendOtp.pending, (state) => {
                // state.isLoading = true;
                state.isError = null;
                state.data = null; 
            })
            .addCase(resendOtp.fulfilled, (state, action) => {
                // state.isLoading = false;
                state.data = action.payload;
                state.isError = null; 
            })
            .addCase(resendOtp.rejected, (state, action) => {
                // state.isLoading = false;
                state.isError = action.payload;
                state.data = null; 
            });
    }
});

export default resendOtpSlice.reducer;;
