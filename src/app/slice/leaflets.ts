import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import axios from 'axios';
import { Console } from 'console';

interface Leaflets {
      key: string
      id: string
      name: string
      expTimestamp: number
      retailer: {
          id: string
          name: string
          distance: number
          priority: number
          images: {
              xs: string
              sm: string
              md: string
              lg: string
          }
      }
}

export interface CounterState {
  leaflets: Leaflets[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CounterState = {
  leaflets: [],
  status: 'idle',
};

export const fetchLeaflets = createAsyncThunk(
  'counter/fetchFlyers',
  async () => {
    const response = await axios.get('https://pq-leaflets.herokuapp.com/api/leaflets/filter');
    console.log(response.data);
    return response.data;
  }
);

console.log(fetchLeaflets.pending);

export const leafletsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaflets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLeaflets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.leaflets = action.payload.data.leaflets;
      })
      .addCase(fetchLeaflets.rejected, (state) => {
        state.status = 'failed';
        
      });
  },
});

export const selectAllLeaflets = (state: RootState) => state.leaflets.leaflets

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default leafletsSlice.reducer;
