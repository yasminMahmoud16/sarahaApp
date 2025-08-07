import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginApi = 'http://localhost:3000/auth/login';

// Async thunk for signup
export const loginData = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const res = await axios.post(loginApi, userData);
            console.log(res.data);
            
            return res.data; 
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed.';
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
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginData.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
                state.data = null; // Reset data on new request
            })
            .addCase(loginData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = null; // Clear error on success
            })
            .addCase(loginData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
                state.data = null; // Clear data on error
            });
    }
});

export default loginSlice.reducer;;
