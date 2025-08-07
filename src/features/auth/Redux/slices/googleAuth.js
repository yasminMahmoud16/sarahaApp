import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const signupGoogleApi = 'http://localhost:3000/auth/signup/gmail';

// Async thunk for signup
export const signupWithGoogle = createAsyncThunk(
    'auth/signup/gmail',
    async (userData, thunkAPI) => {
        try {
            const res = await axios.post(signupGoogleApi, userData);
            console.log(res.data);
            
            return res.data; 
        } catch (error) {
            const message = error.response?.data?.message || 'Signup with google failed.';
            return thunkAPI.rejectWithValue(message);;
        }
    }
);

// Initial state
const initialState = {
    isLoading: false,
    isError: null,
    data: null, // assuming one user object
};

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signupWithGoogle.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
                state.data = null; // Reset data on new request
            })
            .addCase(signupWithGoogle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = null; // Clear error on success
            })
            .addCase(signupWithGoogle.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
                state.data = null; // Clear data on error
            });
    }
});

export default authSlice.reducer;;
