import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import EmployeesStore from './store/EmployeesStore';

export const store = configureStore({
  reducer: {
    employees: EmployeesStore,
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
