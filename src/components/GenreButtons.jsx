import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, setCurrentGenre, fetchTracks } from "../features/music/musicSlice";
import "../styles/neomorphic.css";
import "../styles/animations.css";

const GenreButtons = () => {
    const dispatch = useDispatch();
    const { genres, status, currentGenre } = useSelector(state => state.music);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchGenres());
        }
    }, [dispatch, status]);

    const handleGenreClick = (genreName) => {
        dispatch(setCurrentGenre(genreName));
        dispatch(fetchTracks(genreName === 'All' ? null : genreName));
    };

    return (
        <div className="genre-section">
            <div className="container">
                <div className="genre-header">
                    <h3 className="section-title shimmer-text">Flow Through Genres</h3>
                    <p className="section-subtitle">Select a genre to explore its unique soundscape</p>
                </div>
                
                <div className="genre-scroll-container">
                    <div className="genre-buttons-grid">
                        {/* All button */}
                        <button
                            className={`genre-button ${currentGenre === 'All' ? 'active pulse-glow' : ''}`}
                            onClick={() => handleGenreClick('All')}
                        >
                            <span className="genre-icon">🌊</span>
                            <span className="genre-name">All Streams</span>
                            <span className="genre-desc">Everything in flow</span>
                        </button>

                        {/* Genre buttons */}
                        {genres.map((genre) => (
                            <button
                                key={genre.id}
                                className={`genre-button ${currentGenre === genre.name ? 'active pulse-glow' : ''}`}
                                onClick={() => handleGenreClick(genre.name)}
                                style={{
                                    '--genre-color': genre.color,
                                    borderLeft: `4px solid ${genre.color}`
                                }}
                            >
                                <span className="genre-icon">{genre.icon}</span>
                                <span className="genre-name">{genre.name}</span>
                                <span className="genre-desc">{genre.description}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenreButtons;