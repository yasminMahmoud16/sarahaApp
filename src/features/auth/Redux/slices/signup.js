import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const signupApi = 'http://localhost:3000/auth/signup';

// Async thunk for signup
export const signup = createAsyncThunk(
    'auth/signup',
    async (userData, thunkAPI) => {
        try {
            const res = await axios.post(signupApi, userData);
            console.log(res.data);

            return res.data; 
        } catch (error) {
            const message = error.response?.data?.message || 'Signup failed.';

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
const signupSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
                state.data = null; 
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = null; 
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
                state.data = null; 
            });
    }
});

export default signupSlice.reducer;;
