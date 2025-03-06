import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axios';

// Load user from localStorage safely
const loadUserFromStorage = () => {
  try {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
};

const initialState = {
  user: loadUserFromStorage(),
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Register User
export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/auth/register', userData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Registration failed');
  }
});

// Login User
export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/auth/login', userData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// Logout User
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosInstance.post('/auth/logout'); // Call backend logout API
    localStorage.removeItem('user');
    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue('Logout failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isSuccess = true;
        state.isError = false;
        state.message = 'Logout successful';
      })
      .addCase(logout.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
