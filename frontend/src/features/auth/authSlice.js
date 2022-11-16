import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user? user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    // will be the action.payload in extraReducers that will be set to state.user
    return await authService.register(user)
  } catch (error) {

    const message = 
      (error.response && error.response.data && error.response.data.message) 
      || error.message 
      || error.toString()

    // reject and pass message to action.payload in extraReducers and will be set to state.message
    return thunkAPI.rejectWithValue(message)
  }
})

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    // will be the action.payload in extraReducers that will be set to state.user
    return await authService.login(user)
  } catch (error) {

    const message = 
      (error.response && error.response.data && error.response.data.message) 
      || error.message 
      || error.toString()

    // reject and pass message to action.payload in extraReducers and will be set to state.message
    return thunkAPI.rejectWithValue(message)
  }
})

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})


export const authSlice = createSlice({
  // state.auth
  name: 'auth',
  initialState,
  reducers: {
    // reset is a reducer, a function that reset the values below
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  }
})

// first need to export reset out from authSlice.actions and then export reducer, so we can bring reset to components
export const { reset } = authSlice.actions
export default authSlice.reducer