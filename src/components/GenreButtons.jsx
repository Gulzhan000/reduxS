import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, setCurrentGenre, fetchEvents, setShowForm } from "../features/events/eventsSlice";
import "../styles/neomorphic.css";

const GenreButtons = () => {
    const dispatch = useDispatch();
    const { genres, status, currentGenre } = useSelector(state => state.events);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchGenres());
        }
    }, [dispatch, status]);

    const handleGenreClick = (genreName) => {
        dispatch(setCurrentGenre(genreName));
        dispatch(fetchEvents(genreName === 'All' ? null : genreName));
    };

    const handleCreateClick = () => {
        dispatch(setShowForm(true));
    };

    return (
        <div className="genre-section">
            <div className="container">
                <div className="genre-header">
                    <h3 className="section-title shimmer-text">Browse by Genre</h3>
                    <p className="section-subtitle">Find your perfect concert</p>
                </div>
                
                <div className="genre-buttons-container">
                    <div className="genre-buttons-wrapper">
                        {genres.map((genre) => (
                            <button
                                key={genre.id}
                                className={`genre-button ${currentGenre === genre.name ? 'active' : ''}`}
                                onClick={() => handleGenreClick(genre.name)}
                            >
                                <span className="genre-name">{genre.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Кнопка Create по центру */}
                <div className="create-button-container">
                    <button 
                        className="create-button liquid-button pulse-glow"
                        onClick={handleCreateClick}
                    >
                        <span className="create-icon">➕</span>
                        <span className="create-text">Create New Event</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GenreButtons;