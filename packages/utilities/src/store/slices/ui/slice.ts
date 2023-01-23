import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  headerVisible: boolean;
  sideBarVisible: boolean;
}

const initialState = (): UiState => {
  return {
    headerVisible: true,
    sideBarVisible: true
  };
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSidebarVisibility: (state, action: PayloadAction<boolean>) => {
      state.sideBarVisible = action.payload;
    },
    setHeaderVisibility: (state, action: PayloadAction<boolean>) => {
      state.headerVisible = action.payload;
    }
  }
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
