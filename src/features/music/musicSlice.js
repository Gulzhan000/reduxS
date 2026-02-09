import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTracksApi, fetchTrackByIdApi, fetchGenresApi } from "../../api/musicApi";

// Асинхронные действия
export const fetchTracks = createAsyncThunk(
    "music/fetchTracks",
    async (genre = null) => {
        return await fetchTracksApi(genre);
    }
);

export const fetchTrackById = createAsyncThunk(
    "music/fetchTrackById",
    async (id) => {
        return await fetchTrackByIdApi(id);
    }
);

export const fetchGenres = createAsyncThunk(
    "music/fetchGenres",
    async () => {
        return await fetchGenresApi();
    }
);

const musicSlice = createSlice({
    name: "music",
    initialState: {
        tracks: [],
        selectedTrack: null,
        genres: [],
        status: "idle",
        error: null,
        currentGenre: "All"
    },
    reducers: {
        setCurrentGenre(state, action) {
            state.currentGenre = action.payload;
        },
        setSelectedTrack(state, action) {
            state.selectedTrack = action.payload;
        },
        clearSelectedTrack(state) {
            state.selectedTrack = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTracks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTracks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.tracks = action.payload;
            })
            .addCase(fetchTracks.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchTrackById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTrackById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedTrack = action.payload;
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            });
    }
});

export const { setCurrentGenre, setSelectedTrack, clearSelectedTrack } = musicSlice.actions;
export default musicSlice.reducer;