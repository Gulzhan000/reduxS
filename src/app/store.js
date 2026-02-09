import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import musicReducer from '../features/music/musicSlice'; // ЗАМЕНИЛИ instruments на music

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        music: musicReducer  // ЗАМЕНИЛИ instruments на music
    }
});