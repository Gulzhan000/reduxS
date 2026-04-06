import { createSlice } from "@reduxjs/toolkit";
const loadUserFromStorage = () => {
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    return JSON.parse(savedUser);
  }
  return null;
};

const initialState = {
  user: loadUserFromStorage(),
  isAuth: !!loadUserFromStorage(),
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action) {
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    login(state, action) {
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.isAuth = false;
      state.error = null;
      localStorage.removeItem("currentUser");
    },
    setError(state, action) {
      state.error = action.payload;
    }
  }
});

export const { register, login, logout, setError } = authSlice.actions;
export default authSlice.reducer;