import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EmployeesService } from "../../Services/EmployeesService";
import { RootState } from "../store";
import EmployeeInterface from "../../Models/EmployeeInterface";

export interface EmployeesFetchState {
  employees: EmployeeInterface[];
  employee: EmployeeInterface | null;
  status: "idle" | "loading" | "failed";
  status_message: string | null;
}

const initialState: EmployeesFetchState = {
  employees: [],
  employee: null,
  status: "idle",
  status_message: null,
};

const employeesService = new EmployeesService();

export const fetchEmployees = createAsyncThunk(
  "employees/getAll",
  async (data, { rejectWithValue }) => {
    try {
      const response = await employeesService.getEmployees();
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchEmployeeById = createAsyncThunk(
  "employees/getById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await employeesService.getEmployeeWithProjects(id);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const EmployeesSlice = createSlice({
  name: "EmployeesSlice",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
        state.status_message = "loading data...";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "idle";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = "failed";
        state.status_message = "Fetching Employees Data error, try again...";
      });

    builder
      .addCase(fetchEmployeeById.pending, (state) => {
        state.status = "loading";
        state.status_message = "loading data...";
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.status = "idle";
        state.employee = action.payload;
      })
      .addCase(fetchEmployeeById.rejected, (state) => {
        state.status = "failed";
        state.status_message = "Fetching Employee Data error, try again...";
      });
  },
});

export const getEmployeesStore = (state: RootState) => state.employees;

export default EmployeesSlice.reducer;
