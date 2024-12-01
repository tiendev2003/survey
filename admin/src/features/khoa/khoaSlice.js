import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

const initialState = {
  khoas: [],
  khoa: {},
  loading: false,
  errors: null,
};

export const fetchKhoas = createAsyncThunk(
  "khoa/fetchKhoas",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get("/api/departments");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const khoaSlice = createSlice({
  name: "khoa",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchKhoas.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchKhoas.fulfilled, (state, action) => {
        state.khoas = action.payload.data;
        state.loading = false;
        state.errors = null;
      })
      .addCase(fetchKhoas.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.error;
      });
  },
});

export default khoaSlice.reducer;
