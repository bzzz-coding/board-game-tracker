import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import authService from './authService'

const initialState = {
  games: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: (state) => initialState
  }
})

export const { reset } = gameSlice.actions
export default gameSlice.reducer