import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { User } from "@zuri/types";

export interface UserState {
  user: User | null;
}

const initialState = (): UserState => {
  return {
    user: null
  };
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  }
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;