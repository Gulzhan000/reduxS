import { useDispatch } from "react-redux";
import { clearSelectedTrack } from "../features/music/musicSlice";
import "../styles/neomorphic.css";
import "../styles/animations.css";

const MusicDetail = ({ track }) => {
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(clearSelectedTrack());
    };

    if (!track) return null;

    return (
        <div className="music-detail-container">
            {/* Hero секция трека */}
            <div className="detail-hero">
                <div className="hero-background" style={{ backgroundImage: `url(${track.image})` }}></div>
                <div className="hero-overlay"></div>
                
                <div className="container">
                    <button className="back-btn liquid-button float-animation" onClick={handleBack}>
                        <span className="back-icon">←</span>
                        Back to Flow
                    </button>

                    <div className="hero-content">
                        <div className="track-meta">
                            <span className="genre-badge" style={{ backgroundColor: track.color }}>
                                {track.genre}
                            </span>
                            <span className="release-date">Released: {track.releaseDate}</span>
                        </div>

                        <h1 className="track-title shimmer-text">{track.title}</h1>
                        <h2 className="track-artist">
                            <span className="artist-icon">🎤</span>
                            {track.artist}
                        </h2>

                        <div className="track-stats-hero">
                            <div className="stat-circle float-animation">
                                <div className="stat-icon">⏱️</div>
                                <div className="stat-value">{track.duration}</div>
                                <div className="stat-label">Duration</div>
                            </div>
                            <div className="stat-circle float-animation" style={{ animationDelay: '0.2s' }}>
                                <div className="stat-icon">💓</div>
                                <div className="stat-value">{track.bpm}</div>
                                <div className="stat-label">BPM</div>
                            </div>
                            <div className="stat-circle float-animation" style={{ animationDelay: '0.4s' }}>
                                <div className="stat-icon">🎧</div>
                                <div className="stat-value">{track.plays.toLocaleString()}</div>
                                <div className="stat-label">Plays</div>
                            </div>
                            <div className="stat-circle float-animation" style={{ animationDelay: '0.6s' }}>
                                <div className="stat-icon">❤️</div>
                                <div className="stat-value">{track.likes.toLocaleString()}</div>
                                <div className="stat-label">Likes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Основной контент */}
            <div className="detail-content container">
                <div className="content-grid">
                    {/* Левая колонка */}
                    <div className="left-column">
                        <div className="detail-section neomorphic">
                            <h3 className="section-title">
                                <span className="title-icon">📖</span>
                                About This Track
                            </h3>
                            <p className="track-description">{track.description}</p>
                        </div>

                        <div className="detail-section neomorphic">
                            <h3 className="section-title">
                                <span className="title-icon">🎭</span>
                                Mood & Atmosphere
                            </h3>
                            <div className="mood-tags">
                                <span className="mood-tag">{track.mood}</span>
                                {track.tags.map((tag, index) => (
                                    <span key={index} className="mood-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка */}
                    <div className="right-column">
                        <div className="detail-section neomorphic">
                            <h3 className="section-title">
                                <span className="title-icon">🎵</span>
                                Similar Tracks
                            </h3>
                            <div className="similar-tracks">
                                {track.similarTracks.map((similar, index) => (
                                    <div key={index} className="similar-track">
                                        <div className="similar-wave"></div>
                                        <div className="similar-info">
                                            <div className="similar-title">{similar}</div>
                                            <div className="similar-artist">Similar Artist</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="detail-section neomorphic">
                            <h3 className="section-title">
                                <span className="title-icon">🎛️</span>
                                Track Controls
                            </h3>
                            <div className="player-controls">
                                <button className="control-btn liquid-button pulse-glow">
                                    <span className="btn-icon">▶️</span>
                                    Play Stream
                                </button>
                                <button className="control-btn liquid-button">
                                    <span className="btn-icon">➕</span>
                                    Add to Playlist
                                </button>
                                <button className="control-btn liquid-button">
                                    <span className="btn-icon">💾</span>
                                    Download
                                </button>
                                <button className="control-btn liquid-button">
                                    <span className="btn-icon">🔗</span>
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicDetail;