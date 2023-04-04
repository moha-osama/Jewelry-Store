import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartVisible: false,
    notification: null,
    loading: false,
    dataIsLoading: false,
  },
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
    showLoadingStatus(state) {
      state.loading = !state.loading;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
    toggleLoadingStatus(state) {
      state.dataIsLoading = !state.dataIsLoading;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
