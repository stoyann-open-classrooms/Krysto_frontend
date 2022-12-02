import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
    profil: {},
    nbUsers: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}




// Get user profil
export const getProfil = createAsyncThunk(
    'profils/getProfil',
    async (_, thunkAPI) => {
      try {
        return await userService.getProfil()
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    },
  )

// Get user profil
export const getNbUsers = createAsyncThunk(
    'profils/getNbUsers',
    async (_, thunkAPI) => {
      try {
        return await userService.getNbUsers()
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    },
  )


export const userSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
    
        .addCase(getProfil.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getProfil.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.profil = action.payload
        })
        .addCase(getProfil.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.profil = null
        })
    
        .addCase(getNbUsers.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getNbUsers.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.nbUsers = action.payload
        })
        .addCase(getNbUsers.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.nbUsers = null
        })
      
      
    }
})


export const {reset} = userSlice.actions
export default userSlice.reducer