import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import { axiosInterceptors } from "../../../utils/axiosInstance";

//custion action for redirect

const resetEmailAction = createAction("mail/reset");

//action
export const sendMailAction = createAsyncThunk(
  "mail/sent",
  async (email, { rejectWithValue, getState, dispatch }) => {
    //http call
    try {
      const { data } = await axiosInterceptors.post(`/api/email`, {
        to: email?.recipientEmail,
        subject: email?.subject,
        message: email?.message,
      });
      dispatch(resetEmailAction());
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slices

const sendMailSlices = createSlice({
  name: "mail",
  initialState: {},
  extraReducers: (builder) => {
    //create
    builder.addCase(sendMailAction.pending, (state, action) => {
      state.loading = true;
    });
    //disoatch redirect action
    builder.addCase(resetEmailAction, (state, action) => {
      state.isMailSent = true;
    });
    builder.addCase(sendMailAction.fulfilled, (state, action) => {
      state.mailSent = action?.payload;
      state.isMailSent = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(sendMailAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default sendMailSlices.reducer;
