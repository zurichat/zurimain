import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  headerVisible: boolean;
  sideBarVisible: boolean;
  footerVisible: boolean;
}

const initialState = (): UiState => {
  return {
    headerVisible: true,
    sideBarVisible: true,
    footerVisible: false
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
    },
    setFooterVisibility: (state, action: PayloadAction<boolean>) => {
      state.footerVisible = action.payload;
    }
  }
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
