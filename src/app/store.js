import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import eventsReducer from '../features/events/eventsSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        events: eventsReducer
    }
});