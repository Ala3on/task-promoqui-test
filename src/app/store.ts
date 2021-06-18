import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import leafletsReducer from './slice/leaflets';

export const store = configureStore({
  reducer: {
    leaflets: leafletsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
