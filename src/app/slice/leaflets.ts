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

function encodeQueryData(params: any) {
  const ret = [];
  for (let p in params)
    ret.push('?' + encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
  return ret.join('&');
}

export interface CounterState {
  leaflets: Leaflets[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  searchText: string;
}

const initialState: CounterState = {
  leaflets: [],
  status: 'idle',
  searchText: ''
};

export const fetchLeaflets = createAsyncThunk(
  'counter/fetchFlyers',
  async (params: any) => {
    const query=encodeQueryData(params)
    console.log(query, 'QUERY')
    const url = `https://pq-leaflets.herokuapp.com/api/leaflets/filter${query}`;
    const response = await axios.get(url);
    return response.data;
  }
);

export const leafletsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    onSearchInputChange: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaflets.pending, (state, action) => {
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

export const leafletsSelector = (state: RootState) => state.leaflets.leaflets && state.leaflets.leaflets.filter((l) => {
  if (state.leaflets.searchText.length === 0) return true;
  return l.name.toLowerCase().includes(state.leaflets.searchText.toLowerCase());
})

export const { onSearchInputChange } = leafletsSlice.actions;

export default leafletsSlice.reducer;
