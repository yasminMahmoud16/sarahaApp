import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginApi = 'http://localhost:3000/auth/login';

// Async thunk for login
export const loginData = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const res = await axios.post(loginApi, userData);
            const login = res.data?.data
            console.log(login);

            // Save tokens after successful login
            if (login.accessToken) {
                localStorage.setItem("accessToken", login.accessToken);
            }
            if (res.data?.data?.refreshToken) {
                localStorage.setItem("refreshToken", login.refreshToken);
            }

            return login;
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed.';
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Initial state
const initialState = {
    isLoading: false,
    isError: null,
    data: null,

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
                state.data = null; 

            })
            .addCase(loginData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = null; 

            })
            .addCase(loginData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
                state.data = null;

            });
    }
});

export default loginSlice.reducer;
