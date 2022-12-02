import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import offerService from './OfferService'

const initialState = {
  offers: [],
  offer: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new annonce
export const createOffer = createAsyncThunk(
  'offer/create',
  async (offerData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      const userId = JSON.parse(window.localStorage.getItem('userId'))

      return await offerService.createOffer(offerData, token, userId)
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

// Create new annonce
export const getMyOffers = createAsyncThunk(
  'getMyoffers',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      const userId = JSON.parse(window.localStorage.getItem('userId'))

      console.log(thunkAPI.getState().auth, userId)

      return await offerService.getMyOffers(token, userId)
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

// Get kanbans
export const getOffers = createAsyncThunk(
  'offers/getAll',
  async (_, thunkAPI) => {
    try {
      return await offerService.getOffers()
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
export const getOffer = createAsyncThunk(
  'offers/get',
  async (offerId, thunkAPI) => {
    try {
      return await offerService.getOffer(offerId)
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

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOffer.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createOffer.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.offers = action.payload
      })
      .addCase(createOffer.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.offers = null
      })
      .addCase(getOffers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.offers = action.payload
      })
      .addCase(getOffers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.offers = null
      })
      .addCase(getMyOffers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMyOffers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.offers = action.payload
      })
      .addCase(getMyOffers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.offers = null
      })
      .addCase(getOffer.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOffer.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.offer = action.payload
      })
      .addCase(getOffer.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.offer = null
      })

    // .addCase(createOffer.pending, (state) => {
    //   state.isLoading = true
    // })
    // .addCase(createOffer.fulfilled, (state, action) => {
    //   state.isLoading = false
    //   state.isSuccess = true
    //   state.offers = action.payload
    // })
    // .addCase(createOffer.rejected, (state, action) => {
    //   state.isLoading = false
    //   state.isError = true
    //   state.message = action.payload
    //   state.offers = null
    // })
  },
})

export const { reset } = offerSlice.actions
export default offerSlice.reducer
