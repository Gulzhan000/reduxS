import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEventsApi, fetchEventByIdApi, fetchGenresApi } from "../../api/eventsApi";
export const fetchEvents = createAsyncThunk(
    "events/fetchEvents",
    async (genre = null) => {
        return await fetchEventsApi(genre);
    }
);

export const fetchEventById = createAsyncThunk(
    "events/fetchEventById",
    async (id) => {
        return await fetchEventByIdApi(id);
    }
);

export const fetchGenres = createAsyncThunk(
    "events/fetchGenres",
    async () => {
        return await fetchGenresApi();
    }
);

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
        selectedEvent: null,
        genres: [],
        status: "idle",
        error: null,
        currentGenre: "All",
        showForm: false,
        editingEvent: null
    },
    reducers: {
        setCurrentGenre(state, action) {
            state.currentGenre = action.payload;
        },
        setSelectedEvent(state, action) {
            state.selectedEvent = action.payload;
        },
        clearSelectedEvent(state) {
            state.selectedEvent = null;
        },
        // CRUD операции
        addEvent(state, action) {
            state.events.push(action.payload);
        },
        updateEvent(state, action) {
            const { id, updates } = action.payload;
            const index = state.events.findIndex(event => event.id === id);
            if (index !== -1) {
                state.events[index] = { ...state.events[index], ...updates };
            }
        },
        deleteEvent(state, action) {
            state.events = state.events.filter(event => event.id !== action.payload);
        },
        setShowForm(state, action) {
            state.showForm = action.payload;
        },
        setEditingEvent(state, action) {
            state.editingEvent = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.events = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchEventById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchEventById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedEvent = action.payload;
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            });
    }
});

export const { 
    setCurrentGenre, 
    setSelectedEvent, 
    clearSelectedEvent,
    addEvent,
    updateEvent,
    deleteEvent,
    setShowForm,
    setEditingEvent
} = eventsSlice.actions;

export default eventsSlice.reducer;