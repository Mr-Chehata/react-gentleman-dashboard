import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import EmployeesSlice from './store/EmployeesSlice';

export const store = configureStore({
  reducer: {
    employees: EmployeesSlice,
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
