import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import eventsReducer from '../features/events/eventsSlice';
import authReducer from '../features/auth/authSlice';
import { authMiddleware } from './authMiddleware';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        events: eventsReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});