import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

const initialState = {
  lophocs: [],
  lophoc: {},
  loading: false,
  errors: null,
};

export const fetchLophocs = createAsyncThunk(
  "lophoc/fetchLophocs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get("/api/classes");
      console.log(response.data.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const lophocSlice = createSlice({
  name: "lophoc",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLophocs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLophocs.fulfilled, (state, action) => {
        state.lophocs = action.payload.data;
        state.loading = false;
        state.errors = null;
      })
      .addCase(fetchLophocs.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.error;
      });
  },
});

export default lophocSlice.reducer;
