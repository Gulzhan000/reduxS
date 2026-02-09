import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "dark"  // По умолчанию темная тема для Voxel
    },

    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
});

export const { toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;