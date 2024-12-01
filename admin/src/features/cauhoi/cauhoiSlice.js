import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

const initialState = {
  cauhois: [],
  cauhoi: {},
  status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};
export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (role, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get("/api/questions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cauhoiSlice = createSlice({
  name: "cauhoi",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cauhois = action.payload.data;
        state.error = null;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cauhoiSlice.reducer;
