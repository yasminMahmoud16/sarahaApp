









import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginApi = 'http://localhost:3000/auth/login';
const loginGoogleApi = 'http://localhost:3000/auth/login/gmail';

// Email/Password login
export const loginData = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const res = await axios.post(loginApi, userData);
            const login = res.data?.data;

            if (login.accessToken) {
                localStorage.setItem("accessToken", login.accessToken);
            }
            if (login.refreshToken) {
                localStorage.setItem("refreshToken", login.refreshToken);
            }

            return login;
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed.';
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Google login
export const loginGoogleThunk = createAsyncThunk(
    'auth/loginGoogle',
    async (idToken, thunkAPI) => {
        try {
            const res = await axios.post(loginGoogleApi, { idToken });
            const login = res.data?.data;

            if (login.accessToken) {
                localStorage.setItem("accessToken", login.accessToken);
            }
            if (login.refreshToken) {
                localStorage.setItem("refreshToken", login.refreshToken);
            }

            return login;
        } catch (error) {
            const message = error.response?.data?.message || 'Google login failed.';
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const initialState = {
    isLoading: false,
    isError: null,
    data: null,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Normal login
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
            })

            // Google login
            .addCase(loginGoogleThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
                state.data = null;
            })
            .addCase(loginGoogleThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = null;
            })
            .addCase(loginGoogleThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
                state.data = null;
            });
    }
});

export default loginSlice.reducer;


