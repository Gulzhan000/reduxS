import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTracks, setSelectedTrack } from "../features/music/musicSlice";
import "../styles/neomorphic.css";
import "../styles/animations.css";

const MusicList = () => {
    const dispatch = useDispatch();
    const { tracks, status, currentGenre } = useSelector(state => state.music);

    useEffect(() => {
        dispatch(fetchTracks(currentGenre === 'All' ? null : currentGenre));
    }, [dispatch, currentGenre]);

    const handleDetailsClick = (track) => {
        dispatch(setSelectedTrack(track));
    };

    if (status === 'loading') {
        return (
            <div className="music-loading container">
                <div className="loading-skeletons">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="track-skeleton">
                            <div className="skeleton-img"></div>
                            <div className="skeleton-content">
                                <div className="skeleton-title"></div>
                                <div className="skeleton-artist"></div>
                                <div className="skeleton-details"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="music-list-container">
            <div className="container">
                <div className="list-header">
                    <h2 className="list-title shimmer-text">
                        {currentGenre === 'All' ? 'All Liquid Tracks' : `${currentGenre} Flow`}
                    </h2>
                    <p className="list-count">{tracks.length} tracks flowing</p>
                </div>

                <div className="tracks-grid">
                    {tracks.map((track) => (
                        <div
                            key={track.id}
                            className="track-card slide-in"
                            style={{ animationDelay: `${track.id * 0.1}s` }}
                        >
                            {/* Картинка трека */}
                            <div className="track-image">
                                <img src={track.image} alt={track.title} />
                                <div className="image-overlay"></div>
                                <div 
                                    className="genre-tag"
                                    style={{ backgroundColor: track.color }}
                                >
                                    {track.genre}
                                </div>
                            </div>

                            {/* Контент карточки */}
                            <div className="track-content">
                                <div className="track-header">
                                    <h3 className="track-title">{track.title}</h3>
                                    <div className="track-artist">
                                        <span className="artist-icon">🎤</span>
                                        {track.artist}
                                    </div>
                                </div>

                                {/* УБРАТЬ ТОЛЬКО ЭТИ ДАННЫЕ: */}
                                {/* <div className="track-info">
                                    <div className="info-item">
                                        <span className="info-icon">⏱️</span>
                                        <span className="info-value">{track.duration}</span> // УБРАТЬ
                                    </div>
                                    <div className="info-item">
                                        <span className="info-icon">💓</span>
                                        <span className="info-value">{track.bpm} BPM</span> // УБРАТЬ
                                    </div>
                                    <div className="info-item">
                                        <span className="info-icon">🌡️</span>
                                        <span className="info-value">{track.mood}</span> // УБРАТЬ
                                    </div>
                                </div> */}

                                {/* УБРАТЬ ТОЛЬКО ЭТУ СТАТИСТИКУ: */}
                                {/* <div className="track-stats">
                                    <div className="stat">
                                        <span className="stat-icon">🎧</span>
                                        <span className="stat-value">{track.plays.toLocaleString()}</span> // УБРАТЬ
                                    </div>
                                    <div className="stat">
                                        <span className="stat-icon">❤️</span>
                                        <span className="stat-value">{track.likes.toLocaleString()}</span> // УБРАТЬ
                                    </div>
                                </div> */}

                                {/* Кнопка Details */}
                                <button
                                    className="details-btn liquid-button pulse-glow"
                                    onClick={() => handleDetailsClick(track)}
                                    style={{ '--btn-color': track.color }}
                                >
                                    <span className="btn-icon">🔍</span>
                                    <span className="btn-text">Dive Deeper</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MusicList;