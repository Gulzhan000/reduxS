// src/features/events/eventsSlice.js
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

// Загрузка сохраненных данных из localStorage
const loadFavoritesFromStorage = () => {
    const saved = localStorage.getItem('favorite_events');
    return saved ? JSON.parse(saved) : [];
};

const loadLikesFromStorage = () => {
    const saved = localStorage.getItem('liked_events');
    return saved ? JSON.parse(saved) : [];
};

const loadRatingsFromStorage = () => {
    const saved = localStorage.getItem('event_ratings');
    return saved ? JSON.parse(saved) : {};
};

const loadUserRatingsFromStorage = () => {
    const saved = localStorage.getItem('user_ratings');
    return saved ? JSON.parse(saved) : {};
};

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
        editingEvent: null,
        favorites: loadFavoritesFromStorage(),
        likes: loadLikesFromStorage(),
        ratings: loadRatingsFromStorage(),
        userRatings: loadUserRatingsFromStorage()
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
        addEvent(state, action) {
            const newEvent = {
                ...action.payload,
                isLiked: false,
                isFavorite: false,
                averageRating: 0,
                ratingsCount: 0,
                userRating: null
            };
            state.events.push(newEvent);
        },
        updateEvent(state, action) {
            const { id, updates } = action.payload;
            const index = state.events.findIndex(event => event.id === id);
            if (index !== -1) {
                state.events[index] = { ...state.events[index], ...updates };
            }
            if (state.selectedEvent?.id === id) {
                state.selectedEvent = { ...state.selectedEvent, ...updates };
            }
        },
        deleteEvent(state, action) {
            state.events = state.events.filter(event => event.id !== action.payload);
            // Также удаляем из избранного и лайков
            state.favorites = state.favorites.filter(id => id !== action.payload);
            state.likes = state.likes.filter(id => id !== action.payload);
            localStorage.setItem('favorite_events', JSON.stringify(state.favorites));
            localStorage.setItem('liked_events', JSON.stringify(state.likes));
        },
        setShowForm(state, action) {
            state.showForm = action.payload;
        },
        setEditingEvent(state, action) {
            state.editingEvent = action.payload;
        },
        
        // Лайк события
        toggleLike(state, action) {
            const eventId = action.payload;
            const index = state.likes.indexOf(eventId);
            
            if (index === -1) {
                state.likes.push(eventId);
            } else {
                state.likes.splice(index, 1);
            }
            
            // Обновляем isLiked для всех событий
            state.events = state.events.map(event => ({
                ...event,
                isLiked: state.likes.includes(event.id)
            }));
            
            if (state.selectedEvent) {
                state.selectedEvent.isLiked = state.likes.includes(state.selectedEvent.id);
            }
            
            localStorage.setItem('liked_events', JSON.stringify(state.likes));
        },
        
        // Избранное
        toggleFavorite(state, action) {
            const eventId = action.payload;
            const index = state.favorites.indexOf(eventId);
            
            if (index === -1) {
                state.favorites.push(eventId);
            } else {
                state.favorites.splice(index, 1);
            }
            
            // Обновляем isFavorite для всех событий
            state.events = state.events.map(event => ({
                ...event,
                isFavorite: state.favorites.includes(event.id)
            }));
            
            if (state.selectedEvent) {
                state.selectedEvent.isFavorite = state.favorites.includes(state.selectedEvent.id);
            }
            
            localStorage.setItem('favorite_events', JSON.stringify(state.favorites));
        },
        
        // Добавление оценки
        addRating(state, action) {
            const { eventId, rating } = action.payload;
            
            state.userRatings[eventId] = rating;
            
            if (!state.ratings[eventId]) {
                state.ratings[eventId] = [];
            }
            state.ratings[eventId].push(rating);
            
            localStorage.setItem('event_ratings', JSON.stringify(state.ratings));
            localStorage.setItem('user_ratings', JSON.stringify(state.userRatings));
            
            const avgRating = getAverageRating(state.ratings[eventId]);
            const ratingsCount = state.ratings[eventId].length;
            
            // Обновляем в списке событий
            const eventIndex = state.events.findIndex(e => e.id === eventId);
            if (eventIndex !== -1) {
                state.events[eventIndex].averageRating = avgRating;
                state.events[eventIndex].ratingsCount = ratingsCount;
                state.events[eventIndex].userRating = rating;
            }
            
            // Обновляем выбранное событие
            if (state.selectedEvent?.id === eventId) {
                state.selectedEvent.averageRating = avgRating;
                state.selectedEvent.ratingsCount = ratingsCount;
                state.selectedEvent.userRating = rating;
            }
        },
        
        loadRatingsToEvents(state) {
            state.events.forEach(event => {
                if (state.ratings[event.id] && state.ratings[event.id].length > 0) {
                    event.averageRating = getAverageRating(state.ratings[event.id]);
                    event.ratingsCount = state.ratings[event.id].length;
                } else {
                    event.averageRating = 0;
                    event.ratingsCount = 0;
                }
                event.userRating = state.userRatings[event.id] || null;
                event.isLiked = state.likes.includes(event.id);
                event.isFavorite = state.favorites.includes(event.id);
            });
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.events = action.payload.map(event => ({
                    ...event,
                    averageRating: state.ratings[event.id] ? getAverageRating(state.ratings[event.id]) : (event.averageRating || 0),
                    ratingsCount: state.ratings[event.id] ? state.ratings[event.id].length : (event.ratingsCount || 0),
                    userRating: state.userRatings[event.id] || null,
                    isLiked: state.likes.includes(event.id),
                    isFavorite: state.favorites.includes(event.id)
                }));
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
                const event = action.payload;
                state.selectedEvent = {
                    ...event,
                    averageRating: state.ratings[event.id] ? getAverageRating(state.ratings[event.id]) : (event.averageRating || 0),
                    ratingsCount: state.ratings[event.id] ? state.ratings[event.id].length : (event.ratingsCount || 0),
                    userRating: state.userRatings[event.id] || null,
                    isLiked: state.likes.includes(event.id),
                    isFavorite: state.favorites.includes(event.id)
                };
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            });
    }
});

// Вспомогательная функция для вычисления средней оценки
const getAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, val) => acc + val, 0);
    return parseFloat((sum / ratings.length).toFixed(1));
};

export const { 
    setCurrentGenre, 
    setSelectedEvent, 
    clearSelectedEvent,
    addEvent,
    updateEvent,
    deleteEvent,
    setShowForm,
    setEditingEvent,
    toggleLike,
    toggleFavorite,
    addRating,
    loadRatingsToEvents
} = eventsSlice.actions;

export default eventsSlice.reducer;