import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    isAuthenticated: false,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setUsername, setIsAuthenticated, logout } = userSlice.actions;

export default userSlice.reducer;
